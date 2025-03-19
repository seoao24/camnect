'use client';
import axiosInstance from '@/api/apiBase';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Order {
	id: string;
	orderDate: string;
	customerName: string;
	customerEmail: string;
	customerPhone: string;
	customerAddress: string;
	billCode: string;
	totalAmount: number;
}

export default function RequestPayment() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getOrders = async () => {
		setIsLoading(true);
		try {
			const response = await axiosInstance.get('/OrderService/PaymentConfirm');
			setOrders(response.data);
		} catch (error) {
			console.error('Error fetching orders:', error);
			toast.error('Không thể tải danh sách đơn hàng');
		} finally {
			setIsLoading(false);
		}
	};

	const paymentConfirm = async (id: string, billCode: string) => {
		try {
			const body = {
				orderIds: [id],
			};
			await axiosInstance.post('/OrderService/PaymentConfirm', body);
			toast.success('Thanh toán thành công cho đơn hàng ' + billCode);
			// Refresh the list after confirmation
			getOrders();
		} catch (error) {
			console.error('Error confirming payment:', error);
			toast.error('Xác nhận thanh toán thất bại');
		}
	};

	useEffect(() => {
		getOrders();
	}, []);

	// Format currency
	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
	};

	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-5'>
			<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<caption className='p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800'>
					Danh sách khách hàng thanh toán chờ xác nhận
				</caption>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Tên khách hàng
						</th>
						<th scope='col' className='px-6 py-3'>
							Email
						</th>
						<th scope='col' className='px-6 py-3'>
							Số điện thoại
						</th>
						<th scope='col' className='px-6 py-3'>
							Địa chỉ
						</th>
						<th scope='col' className='px-6 py-3'>
							Ngày đặt hàng
						</th>
						<th scope='col' className='px-6 py-3'>
							Mã đơn hàng
						</th>
						<th scope='col' className='px-6 py-3'>
							Thành tiền
						</th>
						<th scope='col' className='px-6 py-3 text-center'>
							Xác nhận
						</th>
					</tr>
				</thead>
				<tbody>
					{isLoading ? (
						<tr>
							<td colSpan={8} className='px-6 py-4 text-center'>
								<div className='flex justify-center items-center'>
									<div className='animate-spin rounded-full h-6 w-6 border-b-2 border-[#F07202]'></div>
									<span className='ml-2'>Đang tải dữ liệu...</span>
								</div>
							</td>
						</tr>
					) : orders.length === 0 ? (
						<tr>
							<td colSpan={8} className='px-6 py-4 text-center'>
								Không có đơn hàng nào chờ xác nhận
							</td>
						</tr>
					) : (
						orders.map((order, index) => (
							<tr
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50'
								key={order.id + '-' + index}
							>
								<th
									scope='row'
									className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
								>
									{order.customerName}
								</th>
								<td className='px-6 py-4'>{order.customerEmail || '—'}</td>
								<td className='px-6 py-4'>{order.customerPhone || '—'}</td>
								<td className='px-6 py-4'>
									{order.customerAddress ? (
										<span className='line-clamp-1' title={order.customerAddress}>
											{order.customerAddress}
										</span>
									) : (
										'—'
									)}
								</td>
								<td className='px-6 py-4'>{order.orderDate || '—'}</td>
								<td className='px-6 py-4'>{order.billCode || '—'}</td>
								<td className='px-6 py-4 font-semibold text-[#F07202]'>
									{formatCurrency(order.totalAmount)}
								</td>
								<td className='px-6 py-4'>
									<div className='flex justify-center items-center'>
										<button
											className='flex items-center justify-center bg-green-100 hover:bg-green-200 text-green-800 font-medium rounded-full w-8 h-8 transition-colors'
											onClick={() => paymentConfirm(order.id, order.billCode)}
											title='Xác nhận thanh toán'
										>
											<svg
												width='20'
												height='20'
												viewBox='0 0 512 512'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.43872,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.438933,384 213.333333,384 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z'
													fill='#008000'
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}
