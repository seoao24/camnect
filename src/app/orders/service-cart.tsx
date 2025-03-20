/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import axiosInstance from '@/api/apiBase';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface OrderDetailProps {
	orderDetailId: string;
	serviceId: string;
	imageDefault?: string | null;
	name?: string | null;
	description?: string | null;
	price?: number | null;
	oldPrice?: number | null;
	quantity?: number | null;
	totalQuantity?: number | null;
	orderID: string | null;
}

interface PaymentFormData {
	email: string;
	fullName: string;
	phone: string;
	address: string;
	provinceId: string;
	provinceName: string;
	districtId: string;
	districtName: string;
	wardId: string;
	wardName: string;
	note: string;
	billCode: string;
	voucherCode: string;
	orderDetailID: string;
}

export default function ServiceCart(props: OrderDetailProps) {
	const [quantity, setQuantity] = useState(1);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const [showPaymentForm, setShowPaymentForm] = useState(false);
	const [formData, setFormData] = useState<PaymentFormData>({
		email: '',
		fullName: '',
		phone: '',
		address: '',
		provinceId: '',
		provinceName: '',
		districtId: '',
		districtName: '',
		wardId: '',
		wardName: '',
		note: '',
		billCode: '',
		voucherCode: '',
		orderDetailID: props.orderDetailId,
	});

	const deleteOrder = async (id: string) => {
		try {
			await axiosInstance.post(`/OrderService/Delete?orderDetailIds=${id}`);
			toast.success('Đã xóa dịch vụ khỏi đơn hàng');
		} catch {
			toast.error('Không thể xóa dịch vụ');
		}
	};

	const handlePaymentClick = () => {
		// Generate random billCode with 6 characters
		const randomBillCode = Math.random().toString(36).substring(2, 8).toUpperCase();
		setFormData({
			...formData,
			billCode: randomBillCode,
			orderDetailID: props.orderDetailId,
		});
		setShowPaymentForm(true);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmitPayment = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsProcessingPayment(true);

		try {
			// Step 1: Create order first
			const orderResponse = await axiosInstance.post('/OrderService/create-order-online-payment', formData);

			if (orderResponse.data && orderResponse.data.orderID) {
				toast.success('Đã tạo đơn hàng thành công!');
				console.log('Order created:', orderResponse.data);

				// Step 2: Process payment using the returned orderID
				const paymentResponse = await axiosInstance.post('/Payment/create', {
					orderCode: orderResponse.data.orderID,
					voucherCode: '',
				});

				toast.success('Đã tạo thanh toán thành công!');
				console.log('Payment response:', paymentResponse.data);

				// Redirect to payment page if API returns URL
				if (paymentResponse.data && paymentResponse.data.paymentUrl) {
					window.location.href = paymentResponse.data.paymentUrl;
				}
			} else {
				toast.error('Không nhận được mã đơn hàng từ máy chủ');
			}
			setShowPaymentForm(false);
		} catch (error) {
			console.error('Payment error:', error);
			toast.error('Có lỗi xảy ra trong quá trình thanh toán');
		} finally {
			setIsProcessingPayment(false);
		}
	};

	return (
		<>
			<div className='grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-[#8E8B8B] py-6'>
				<div className='flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto'>
					<div className='img-box'>
						<img
							src={`https://api.tapta.online/${props.imageDefault}`}
							alt='perfume bottle image'
							className='xl:w-[140px] rounded-xl object-cover'
						/>
					</div>
					<div className='pro-data w-full max-w-sm '>
						<h5 className='font-bold text-[16px] text-black max-[550px]:text-center uppercase'>
							{props.name}
						</h5>
						<p className='font-normal text-[12px] text-[#141416] my-2 min-[550px]:my-3 max-[550px]:text-center'>
							{props.description}
						</p>
						<h6 className='font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center'>
							{props.price}
						</h6>
					</div>
				</div>
				<div className='flex items-center flex-col min-[450px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2'>
					<div className='font-manrope font-bold text-[13px] leading-2 text-[#F07202] w-full max-w-[150px] text-center'>
						<div className='text-[#6B716E] line-through'>{props.oldPrice}đ</div>
						<div>{props.price}đ</div>
					</div>
					<div className='flex items-center w-full mx-auto justify-center'>
						<input
							className='border-y border-[#8E8B8B] outline-none text-gray-900 font-semibold text-[13px] w-[50px] placeholder:text-gray-900 py-[4.3px] text-center bg-transparent'
							value={quantity}
							disabled
							onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
						/>
					</div>
					<div className='font-manrope font-bold text-[13px] leading-2 text-[#F07202] w-full max-w-[150px] text-center'>
						{(props.price ?? 0) * (props.quantity ?? 1)}đ
					</div>
					<div className=''>
						<div
							className='text-[#6B716E] text-[13px] text-center cursor-pointer'
							onClick={() => deleteOrder(props.orderDetailId)}
						>
							Xóa
						</div>
						<Link className='' href={''}>
							<div className='text-center text-[#F07202] text-[13px] w-[100px]'>Tìm dịch vụ tương tự</div>
						</Link>
						{/* Nút thanh toán */}
						<button
							onClick={handlePaymentClick}
							className='mt-2 bg-[#F07202] hover:bg-[#d86602] text-white py-1 px-3 rounded-md text-[13px] w-full transition-colors'
						>
							Thanh toán
						</button>
					</div>
				</div>
			</div>

			{/* Payment Form Modal */}
			{showPaymentForm && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[55] p-4'>
					<div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto'>
						<h2 className='text-xl font-bold mb-4 text-[#F07202]'>Thông tin thanh toán</h2>
						<form onSubmit={handleSubmitPayment}>
							<div className='mb-3'>
								<label className='block text-sm font-medium mb-1'>Email</label>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									required
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
								/>
							</div>

							<div className='mb-3'>
								<label className='block text-sm font-medium mb-1'>Họ tên</label>
								<input
									type='text'
									name='fullName'
									value={formData.fullName}
									onChange={handleInputChange}
									required
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
								/>
							</div>

							<div className='mb-3'>
								<label className='block text-sm font-medium mb-1'>Số điện thoại</label>
								<input
									type='tel'
									name='phone'
									value={formData.phone}
									onChange={handleInputChange}
									required
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
								/>
							</div>

							<div className='mb-3'>
								<label className='block text-sm font-medium mb-1'>Địa chỉ</label>
								<input
									type='text'
									name='address'
									value={formData.address}
									onChange={handleInputChange}
									required
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
								/>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-3'>
								<div>
									<label className='block text-sm font-medium mb-1'>Tỉnh/Thành phố</label>
									<div className='flex space-x-2'>
										<input
											type='text'
											name='provinceId'
											value={formData.provinceId}
											onChange={handleInputChange}
											placeholder='Mã'
											required
											className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
										/>
										<input
											type='text'
											name='provinceName'
											value={formData.provinceName}
											onChange={handleInputChange}
											placeholder='Tên'
											required
											className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
										/>
									</div>
								</div>

								<div>
									<label className='block text-sm font-medium mb-1'>Quận/Huyện</label>
									<div className='flex space-x-2'>
										<input
											type='text'
											name='districtId'
											value={formData.districtId}
											onChange={handleInputChange}
											placeholder='Mã'
											required
											className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
										/>
										<input
											type='text'
											name='districtName'
											value={formData.districtName}
											onChange={handleInputChange}
											placeholder='Tên'
											required
											className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
										/>
									</div>
								</div>
							</div>

							<div className='mb-3'>
								<label className='block text-sm font-medium mb-1'>Phường/Xã</label>
								<div className='flex space-x-2'>
									<input
										type='text'
										name='wardId'
										value={formData.wardId}
										onChange={handleInputChange}
										placeholder='Mã'
										required
										className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
									/>
									<input
										type='text'
										name='wardName'
										value={formData.wardName}
										onChange={handleInputChange}
										placeholder='Tên'
										required
										className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
									/>
								</div>
							</div>

							<div className='mb-3'>
								<label className='block text-sm font-medium mb-1'>Ghi chú</label>
								<textarea
									name='note'
									value={formData.note}
									onChange={handleInputChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F07202]'
									rows={3}
								/>
							</div>

							<div className='mb-3'>
								<label className='block text-sm font-medium mb-1'>Mã đơn hàng</label>
								<input
									type='text'
									name='billCode'
									value={formData.billCode}
									readOnly
									className='w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100'
								/>
								<p className='text-xs text-gray-500 mt-1'>Mã đơn hàng tự động được tạo</p>
							</div>

							<div className='flex justify-end gap-3 mt-6'>
								<button
									type='button'
									onClick={() => setShowPaymentForm(false)}
									className='px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors'
								>
									Hủy
								</button>
								<button
									type='submit'
									disabled={isProcessingPayment}
									className='px-4 py-2 bg-[#F07202] hover:bg-[#d86602] text-white rounded-md transition-colors disabled:bg-gray-400'
								>
									{isProcessingPayment ? 'Đang xử lý...' : 'Xác nhận thanh toán'}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
