'use client';
import ChatwootScript from '@/components/chatwoot-script';
import Feedback from './home/feedback';
import FQA from './home/FQA';
import HomeHere from './home/hero';
import Introduction from './home/introduction';
// import MobilePage from './mobile-home/mobile-page';
import Reason from './home/reason';
import SearchPhotographers from './home/search';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axiosInstance from '@/api/apiBase';
import { toast } from 'react-toastify';

export default function Home() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [isUpdatingPayment, setIsUpdatingPayment] = useState(false);

	useEffect(() => {
		const updatePaymentStatus = async () => {
			// Get query parameters
			const code = searchParams.get('code');
			const id = searchParams.get('id');
			const cancel = searchParams.get('cancel');
			const status = searchParams.get('status');
			const orderCode = searchParams.get('orderCode');

			// Check if all required parameters exist
			if (code && id && cancel && status && orderCode) {
				setIsUpdatingPayment(true);
				try {
					// Call the API to update payment status
					await axiosInstance.post('/Payment/update-status', null, {
						params: {
							code,
							id,
							cancel,
							status,
							orderCode,
						},
					});

					toast.success('Cập nhật trạng thái thanh toán thành công');

					// After successful update, redirect to clean URL without query parameters
					router.push('/');
				} catch (error) {
					console.error('Error updating payment status:', error);
					toast.error('Có lỗi khi cập nhật trạng thái thanh toán');
				} finally {
					setIsUpdatingPayment(false);
				}
			}
		};

		updatePaymentStatus();
	}, [searchParams, router]);

	return (
		<div className='relative'>
			{isUpdatingPayment && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
					<div className='bg-white p-4 rounded-lg shadow-lg'>
						<div className='flex items-center space-x-3'>
							<div className='animate-spin rounded-full h-6 w-6 border-b-2 border-[#F07202]'></div>
							<p>Đang cập nhật trạng thái thanh toán...</p>
						</div>
					</div>
				</div>
			)}
			<div className=''>
				<HomeHere />
				<Introduction />
				<Reason />
				<SearchPhotographers />
				<FQA />
				<Feedback />
				<ChatwootScript />
			</div>
			{/* <div className='md:hidden'>
				<MobilePage />
			</div> */}
		</div>
	);
}
