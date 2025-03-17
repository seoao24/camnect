/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setCurrentUser } from '@/redux/slices/loginSlice';
import axiosInstance from '@/api/apiBase';
import Image from 'next/image';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '@/components/ui/dialog';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';

// Define interface for cart items
interface CartItem {
	id: string;
	orderDetailId?: string; // Add this field if it's in the response
	serviceId: string;
	serviceName: string;
	price: number;
	imageUrl: string;
	quantity: number;
}

export interface UserInfo {
	userId: string;
	fullname: string;
	avatarUrl: string;
	role: number;
}

// Interface for checkout form data
interface CheckoutFormData {
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
	orderDetailIds: string[];
}

// Interface for location options
interface LocationOption {
	id: string;
	name: string;
}

const pages = [
	{ title: 'Trang Chủ', link: '/' },
	{ title: 'Tin Tức', link: '/news' },
	{ title: 'Cộng đồng', link: '/communications' },
	{ title: 'Dịch vụ', link: '/services' },
];

const HeaderMenu = ({ role }: { role: number }) => {
	const [selectedLink, setSelectedLink] = useState(pages[0].link);

	return (
		<div className='flex items-center space-x-8'>
			{pages.map((page) => (
				<Link
					key={page.link}
					href={page.link}
					onClick={() => setSelectedLink(page.link)}
					className={`${
						selectedLink === page.link ? 'font-bold text-[#F07202]' : 'text-gray-800'
					} hover:text-[#F07202] transition-colors`}
				>
					{page.title}
				</Link>
			))}
		</div>
	);
};

const UserDropdown = ({ currentUser }: { currentUser: UserInfo | null }) => {
	if (!currentUser) return null;

	const handleLogout = () => {
		Cookies.remove('currentUser');
		Cookies.remove('token');
		Cookies.remove('access-key');
		// Refresh the page or redirect to home
		window.location.href = '/';
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex items-center space-x-2 cursor-pointer'>
					<div
						className='bg-center bg-cover bg-no-repeat w-[40px] h-[40px] rounded-full bg-[#BBBBBB]'
						style={{
							backgroundImage: currentUser?.avatarUrl
								? `url('${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatarUrl}')`
								: 'none',
						}}
					/>
					<div className='text-[16px] text-[#F07202] font-semibold'>{currentUser?.fullname}</div>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-48'>
				{currentUser.role === 2 && (
					<DropdownMenuItem>
						<Link href='/admin/dashboard' className='w-full'>
							Quản trị
						</Link>
					</DropdownMenuItem>
				)}
				<DropdownMenuItem>
					<Link href='/user' className='w-full'>
						Trang cá nhân
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleLogout}>Đăng xuất</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

// Checkout Component
const CheckoutForm = ({
	cartItems,
	totalPrice,
	onSuccess,
	onCancel,
}: {
	cartItems: CartItem[];
	totalPrice: number;
	onSuccess: () => void;
	onCancel: () => void;
}) => {
	const [formData, setFormData] = useState<CheckoutFormData>({
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
		orderDetailIds: cartItems.map((item) => item.orderDetailId),
	});

	const [provinces, setProvinces] = useState<LocationOption[]>([]);
	const [districts, setDistricts] = useState<LocationOption[]>([]);
	const [wards, setWards] = useState<LocationOption[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [discountAmount, setDiscountAmount] = useState(0);
	const [finalPrice, setFinalPrice] = useState(totalPrice);

	useEffect(() => {
		setFormData((prev) => ({
			...prev,
			orderDetailIds: cartItems.map((item) => item.orderDetailId || item.id),
		}));
	}, [cartItems]);

	// Fetch provinces on component mount
	useEffect(() => {
		fetchProvinces();
	}, []);

	// Update final price when discount or total price changes
	useEffect(() => {
		setFinalPrice(totalPrice - discountAmount);
	}, [totalPrice, discountAmount]);

	const fetchProvinces = async () => {
		try {
			// Try to fetch provinces from API
			const response = await axiosInstance.get('/Location/GetProvinces');
			if (response.data) {
				setProvinces(response.data);
			} else {
				// Fallback to mock data if API response is empty
				setProvinces([
					{ id: 'HN', name: 'Hà Nội' },
					{ id: 'HCM', name: 'Hồ Chí Minh' },
					{ id: 'DN', name: 'Đà Nẵng' },
				]);
			}
		} catch (error) {
			console.error('Error fetching provinces:', error);
			// Use mock data if API fails
			setProvinces([
				{ id: 'HN', name: 'Hà Nội' },
				{ id: 'HCM', name: 'Hồ Chí Minh' },
				{ id: 'DN', name: 'Đà Nẵng' },
			]);
		}
	};

	const fetchDistricts = async (provinceId: string) => {
		try {
			const response = await axiosInstance.get(`/Location/GetDistricts?provinceId=${provinceId}`);
			if (response.data) {
				setDistricts(response.data);
			} else {
				// Fallback to mock data if API response is empty
				setDistricts([
					{ id: 'D1', name: 'Quận 1' },
					{ id: 'D2', name: 'Quận 2' },
					{ id: 'D3', name: 'Quận 3' },
				]);
			}
		} catch (error) {
			console.error('Error fetching districts:', error);
			// Use mock data if API fails
			setDistricts([
				{ id: 'D1', name: 'Quận 1' },
				{ id: 'D2', name: 'Quận 2' },
				{ id: 'D3', name: 'Quận 3' },
			]);
		}
	};

	const fetchWards = async (districtId: string) => {
		try {
			const response = await axiosInstance.get(`/Location/GetWards?districtId=${districtId}`);
			if (response.data) {
				setWards(response.data);
			} else {
				// Fallback to mock data if API response is empty
				setWards([
					{ id: 'W1', name: 'Phường 1' },
					{ id: 'W2', name: 'Phường 2' },
					{ id: 'W3', name: 'Phường 3' },
				]);
			}
		} catch (error) {
			console.error('Error fetching wards:', error);
			// Use mock data if API fails
			setWards([
				{ id: 'W1', name: 'Phường 1' },
				{ id: 'W2', name: 'Phường 2' },
				{ id: 'W3', name: 'Phường 3' },
			]);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Handle location selection
		if (name === 'provinceId') {
			const selectedProvince = provinces.find((p) => p.id === value);
			if (selectedProvince) {
				setFormData((prev) => ({
					...prev,
					provinceName: selectedProvince.name,
					districtId: '',
					districtName: '',
					wardId: '',
					wardName: '',
				}));
				fetchDistricts(value);
			}
		} else if (name === 'districtId') {
			const selectedDistrict = districts.find((d) => d.id === value);
			if (selectedDistrict) {
				setFormData((prev) => ({
					...prev,
					districtName: selectedDistrict.name,
					wardId: '',
					wardName: '',
				}));
				fetchWards(value);
			}
		} else if (name === 'wardId') {
			const selectedWard = wards.find((w) => w.id === value);
			if (selectedWard) {
				setFormData((prev) => ({
					...prev,
					wardName: selectedWard.name,
				}));
			}
		}
	};

	const checkVoucher = async () => {
		if (!formData.voucherCode) {
			toast.error('Vui lòng nhập mã giảm giá');
			return;
		}

		try {
			const response = await axiosInstance.get(`/OrderService/CheckVoucher?code=${formData.voucherCode}`);
			if (response.data && response.data.isValid) {
				const discount = response.data.discountAmount || 0;
				setDiscountAmount(discount);
				toast.success(`Áp dụng mã giảm giá thành công: -${discount.toLocaleString()} VND`);
			} else {
				toast.error('Mã giảm giá không hợp lệ hoặc đã hết hạn');
			}
		} catch (error) {
			console.error('Error checking voucher:', error);
			toast.error('Không thể kiểm tra mã giảm giá');
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic form validation
		if (
			!formData.email ||
			!formData.fullName ||
			!formData.phone ||
			!formData.address ||
			!formData.provinceId ||
			!formData.districtId ||
			!formData.wardId
		) {
			toast.error('Vui lòng điền đầy đủ thông tin');
			return;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			toast.error('Email không hợp lệ');
			return;
		}

		// Phone validation
		const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
		if (!phoneRegex.test(formData.phone)) {
			toast.error('Số điện thoại không hợp lệ');
			return;
		}

		setIsLoading(true);

		try {
			// Make sure orderDetailIds is up-to-date
			const currentOrderDetailIds = cartItems
				.map((item) => item.orderDetailId || item.id)
				.filter((id) => id != null);

			const updatedFormData = {
				...formData,
				orderDetailIds: currentOrderDetailIds,
			};

			const response = await axiosInstance.post('/OrderService/CheckOut', updatedFormData);

			if (response.data && (response.data.success || response.status === 200)) {
				toast.success('Đặt hàng thành công!');
				onSuccess();
			} else {
				toast.error(response.data?.message || 'Đặt hàng thất bại');
			}
		} catch (error) {
			console.error('Error submitting order:', error);
			toast.error('Đã xảy ra lỗi khi đặt hàng');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='bg-white rounded-md max-w-4xl mx-auto'>
			<h2 className='text-xl font-bold text-[#F07202] mb-6'>Thông tin thanh toán</h2>

			<form onSubmit={handleSubmit}>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{/* Customer Information */}
					<div className='space-y-4'>
						<h3 className='font-medium text-gray-800'>Thông tin khách hàng</h3>

						<div>
							<label className='block text-sm text-gray-600 mb-1'>Họ và tên *</label>
							<input
								type='text'
								name='fullName'
								value={formData.fullName}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-md p-2'
								required
							/>
						</div>

						<div>
							<label className='block text-sm text-gray-600 mb-1'>Email *</label>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-md p-2'
								required
							/>
						</div>

						<div>
							<label className='block text-sm text-gray-600 mb-1'>Số điện thoại *</label>
							<input
								type='tel'
								name='phone'
								value={formData.phone}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-md p-2'
								required
							/>
						</div>

						<div>
							<label className='block text-sm text-gray-600 mb-1'>Tỉnh/Thành phố *</label>
							<select
								name='provinceId'
								value={formData.provinceId}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-md p-2'
								required
							>
								<option value=''>Chọn Tỉnh/Thành phố</option>
								{provinces.map((province) => (
									<option key={province.id} value={province.id}>
										{province.name}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className='block text-sm text-gray-600 mb-1'>Quận/Huyện *</label>
							<select
								name='districtId'
								value={formData.districtId}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-md p-2'
								required
								disabled={!formData.provinceId}
							>
								<option value=''>Chọn Quận/Huyện</option>
								{districts.map((district) => (
									<option key={district.id} value={district.id}>
										{district.name}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className='block text-sm text-gray-600 mb-1'>Phường/Xã *</label>
							<select
								name='wardId'
								value={formData.wardId}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-md p-2'
								required
								disabled={!formData.districtId}
							>
								<option value=''>Chọn Phường/Xã</option>
								{wards.map((ward) => (
									<option key={ward.id} value={ward.id}>
										{ward.name}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className='block text-sm text-gray-600 mb-1'>Địa chỉ chi tiết *</label>
							<input
								type='text'
								name='address'
								value={formData.address}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-md p-2'
								required
							/>
						</div>

						<div>
							<label className='block text-sm text-gray-600 mb-1'>Ghi chú</label>
							<textarea
								name='note'
								value={formData.note}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-md p-2'
								rows={3}
							/>
						</div>
					</div>

					{/* Order Summary */}
					<div className='space-y-4'>
						<h3 className='font-medium text-gray-800'>Thông tin đơn hàng</h3>

						<div className='bg-gray-50 p-4 rounded-md'>
							<div className='max-h-64 overflow-y-auto mb-4'>
								{cartItems.map((item) => (
									<div key={item.id} className='flex items-center mb-3 pb-3 border-b border-gray-200'>
										<div
											className='w-16 h-16 bg-cover bg-center rounded-md flex-shrink-0'
											style={{
												backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${item.imageUrl}')`,
											}}
										></div>
										<div className='ml-3 flex-grow'>
											<div className='font-medium'>{item.serviceName}</div>
											<div className='flex justify-between mt-1'>
												<span className='text-sm text-gray-600'>SL: {item.quantity}</span>
												<span className='text-[#F07202] font-medium'>
													{item.price.toLocaleString()} VND
												</span>
											</div>
										</div>
									</div>
								))}
							</div>

							<div className='space-y-2 pt-2 border-t border-gray-200'>
								<div className='flex justify-between'>
									<span>Tạm tính:</span>
									<span>{totalPrice.toLocaleString()} VND</span>
								</div>
								{discountAmount > 0 && (
									<div className='flex justify-between text-green-600'>
										<span>Giảm giá:</span>
										<span>-{discountAmount.toLocaleString()} VND</span>
									</div>
								)}
								<div className='flex justify-between font-bold text-lg'>
									<span>Tổng cộng:</span>
									<span className='text-[#F07202]'>{finalPrice.toLocaleString()} VND</span>
								</div>
							</div>
						</div>

						<div>
							<label className='block text-sm text-gray-600 mb-1'>Mã giảm giá</label>
							<div className='flex'>
								<input
									type='text'
									name='voucherCode'
									value={formData.voucherCode}
									onChange={handleInputChange}
									className='flex-grow border border-gray-300 rounded-l-md p-2'
									placeholder='Nhập mã giảm giá'
								/>
								<button
									type='button'
									onClick={checkVoucher}
									className='bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md hover:bg-gray-300'
								>
									Áp dụng
								</button>
							</div>
						</div>

						<div className='pt-6'>
							<h3 className='font-medium text-gray-800 mb-3'>Phương thức thanh toán</h3>
							<div className='space-y-2'>
								<div className='flex items-center'>
									<input
										type='radio'
										id='payment-cod'
										name='paymentMethod'
										value='cod'
										checked
										className='mr-2'
									/>
									<label htmlFor='payment-cod'>Thanh toán khi nhận hàng (COD)</label>
								</div>
								{/* Additional payment methods can be added here */}
							</div>
						</div>

						<div className='pt-6 space-y-3'>
							<button
								type='submit'
								className='w-full bg-[#F07202] text-white py-3 rounded-full font-medium disabled:bg-gray-400'
								disabled={isLoading}
							>
								{isLoading ? 'Đang xử lý...' : 'Xác nhận đặt hàng'}
							</button>
							<button
								type='button'
								onClick={onCancel}
								className='w-full border border-gray-300 text-gray-700 py-3 rounded-full font-medium'
							>
								Quay lại
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

// Cart Component
const CartComponent = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [loading, setLoading] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const [refreshTrigger, setRefreshTrigger] = useState(0);
	const [isCheckoutMode, setIsCheckoutMode] = useState(false);

	// Fetch cart data and refresh implementation
	const fetchCartItems = async () => {
		setLoading(true);
		try {
			const response = await axiosInstance.get('/OrderService/SearchOrder');
			console.log('Cart response:', response.data); // Log to see structure
			if (response.data && response.data.items) {
				setCartItems(response.data.items);
				// Calculate total price
				const total = response.data.items.reduce(
					(sum: number, item: CartItem) => sum + item.price * item.quantity,
					0
				);
				setTotalPrice(total);
			}
		} catch (error) {
			console.error('Error fetching cart items:', error);
			toast.error('Không thể lấy thông tin giỏ hàng');
		} finally {
			setLoading(false);
		}
	};

	const updateQuantity = async (id: string, quantity: number) => {
		if (quantity < 1) return;

		try {
			await axiosInstance.put('/OrderService/UpdateOrder', {
				id,
				quantity,
			});

			// Trigger refresh of cart items
			setRefreshTrigger((prev) => prev + 1);

			// Dispatch event to update cart count in header
			const cartUpdatedEvent = new Event('cart-updated');
			window.dispatchEvent(cartUpdatedEvent);
		} catch (error) {
			console.error('Error updating cart item:', error);
			toast.error('Không thể cập nhật giỏ hàng');
		}
	};

	const removeItem = async (id: string) => {
		try {
			console.log('Removing item with id:', id);

			// Examine the item to understand what ID to use
			const item = cartItems.find((item) => item.id === id);
			console.log('Item to remove:', item);

			// Try using different field that might be present in the API response
			const idToUse = item?.orderDetailId || id;
			console.log('Using ID for deletion:', idToUse);

			// Try multiple approaches for sending the parameter
			const result = await axiosInstance.post(`/OrderService/Delete?orderDetailIds=${idToUse}`);

			console.log('Delete result:', result);

			// Update local state
			setCartItems((prev) => prev.filter((item) => item.id !== id));
			if (item) {
				setTotalPrice((prev) => prev - item.price * item.quantity);
			}

			// Dispatch event to update cart count in header
			const cartUpdatedEvent = new Event('cart-updated');
			window.dispatchEvent(cartUpdatedEvent);

			toast.success('Đã xóa sản phẩm khỏi giỏ hàng');
		} catch (error) {
			console.error('Error removing cart item:', error);
			toast.error('Không thể xóa sản phẩm khỏi giỏ hàng');
		}
	};

	const handleCheckoutClick = () => {
		setIsCheckoutMode(true);
	};

	const handleCheckoutSuccess = () => {
		// Clear cart items in UI
		setCartItems([]);
		setTotalPrice(0);

		// Exit checkout mode
		setIsCheckoutMode(false);

		// Dispatch event to update cart count in header
		const cartUpdatedEvent = new Event('cart-updated');
		window.dispatchEvent(cartUpdatedEvent);

		// Close the dialog
		onClose();

		// Refresh cart data from server to ensure sync
		fetchCartItems();
	};

	const handleCancelCheckout = () => {
		setIsCheckoutMode(false);
	};

	useEffect(() => {
		if (isOpen) {
			fetchCartItems();
		}
	}, [isOpen, refreshTrigger]);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => {
				if (!open) {
					setIsCheckoutMode(false);
					onClose();
				}
			}}
		>
			<DialogContent className='sm:max-w-[800px] max-h-[90vh] flex flex-col'>
				{isCheckoutMode ? (
					<>
						<DialogHeader>
							<DialogTitle className='text-center text-xl font-bold text-[#F07202]'>
								Thanh Toán
							</DialogTitle>
						</DialogHeader>
						<div className='overflow-y-auto py-4 px-1'>
							<CheckoutForm
								cartItems={cartItems}
								totalPrice={totalPrice}
								onSuccess={handleCheckoutSuccess}
								onCancel={handleCancelCheckout}
							/>
						</div>
					</>
				) : (
					<>
						<DialogHeader>
							<DialogTitle className='text-center text-xl font-bold text-[#F07202]'>
								Giỏ hàng của bạn
							</DialogTitle>
							<DialogDescription className='text-center'>
								{cartItems.length ? `${cartItems.length} sản phẩm trong giỏ hàng` : 'Giỏ hàng trống'}
							</DialogDescription>
						</DialogHeader>

						<div className='overflow-y-auto flex-grow py-4'>
							{loading ? (
								<div className='flex justify-center items-center h-32'>
									<div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#F07202]'></div>
								</div>
							) : cartItems.length === 0 ? (
								<div className='text-center p-6'>
									<div className='text-gray-500 mb-4'>Giỏ hàng của bạn đang trống</div>
									<Link
										href='/services'
										className='inline-block bg-[#F07202] text-white px-4 py-2 rounded-full font-medium'
										onClick={onClose}
									>
										Khám phá dịch vụ
									</Link>
								</div>
							) : (
								<div className='space-y-4 px-1'>
									{cartItems.map((item) => (
										<div key={item.id} className='flex border-b border-gray-200 pb-4'>
											<div
												className='w-20 h-20 bg-cover bg-center rounded-md flex-shrink-0'
												style={{
													backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${item.imageUrl}')`,
												}}
											></div>
											<div className='ml-4 flex-grow'>
												<h3 className='font-medium text-gray-800'>{item.serviceName}</h3>
												<div className='text-[#F07202] font-bold mt-1'>
													{item.price.toLocaleString()} VND
												</div>
												<div className='flex items-center mt-2'>
													<button
														className='w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300'
														onClick={() => updateQuantity(item.id, item.quantity - 1)}
													>
														<span>-</span>
													</button>
													<span className='mx-2'>{item.quantity}</span>
													<button
														className='w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300'
														onClick={() => updateQuantity(item.id, item.quantity + 1)}
													>
														<span>+</span>
													</button>
													<button
														className='ml-auto text-gray-500 hover:text-red-500'
														onClick={() => removeItem(item.id)}
													>
														<svg
															width='16'
															height='16'
															viewBox='0 0 24 24'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M18 6L6 18M6 6L18 18'
																stroke='currentColor'
																strokeWidth='2'
																strokeLinecap='round'
																strokeLinejoin='round'
															/>
														</svg>
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							)}
						</div>

						{cartItems.length > 0 && (
							<DialogFooter className='border-t border-gray-200 pt-4 flex flex-col sm:flex-row gap-3'>
								<div className='flex justify-between font-bold mb-4 w-full'>
									<span>Tổng cộng:</span>
									<span className='text-[#F07202]'>{totalPrice.toLocaleString()} VND</span>
								</div>
								<button
									className='w-full bg-[#F07202] text-white py-3 rounded-full font-medium hover:bg-[#e06802] transition-colors'
									onClick={handleCheckoutClick}
								>
									Thanh toán
								</button>
							</DialogFooter>
						)}
					</>
				)}
			</DialogContent>
		</Dialog>
	);
};

export default function AppHeader() {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [selectedLink, setSelectedLink] = useState(pages[0].link);
	const dispatch = useDispatch();
	const [cartCount, setCartCount] = useState(0);
	const [isCartOpen, setIsCartOpen] = useState(false);

	// Get currentUser from Redux store
	const isLogin = useSelector((state: RootState) => state.login.isLogin);
	const currentUser = useSelector((state: RootState) => state.login.currentUser);

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const getVoucher = async () => {
		// Reset error state
		setEmailError('');

		// Validate empty email
		if (!email.trim()) {
			setEmailError('Vui lòng nhập email của bạn');
			return;
		}

		// Validate email format
		if (!validateEmail(email)) {
			setEmailError('Email không hợp lệ');
			return;
		}

		const params = {
			Email: email,
		};
		try {
			await axiosInstance.get('/OrderService/GetVoucherByEmail', {
				params: params,
			});
			toast.success('Hãy kiểm tra email của bạn để lấy voucher');
			// Clear email field after successful submission
			setEmail('');
		} catch (error) {
			toast.error('Đã có lỗi xảy ra khi gửi voucher');
		}
	};

	const fetchCartCount = async () => {
		try {
			const response = await axiosInstance.get('/OrderService/SearchOrder');
			if (response.data && response.data.items) {
				setCartCount(response.data.items.length);
			}
		} catch (error) {
			console.error('Error fetching cart count:', error);
		}
	};

	useEffect(() => {
		// Check for currentUser in cookies at component mount and update Redux if found
		const currentUserString = Cookies.get('currentUser');
		if (currentUserString) {
			dispatch(setCurrentUser(JSON.parse(currentUserString)));
		}
		// Fetch cart count
		if (isLogin) {
			fetchCartCount();
		}

		// Setup event listener for cart updates
		window.addEventListener('cart-updated', fetchCartCount);

		return () => {
			window.removeEventListener('cart-updated', fetchCartCount);
		};
	}, [dispatch, isLogin]);

	// Mobile menu items
	const MobileMenuItems = () => {
		const handleLogout = () => {
			Cookies.remove('currentUser');
			Cookies.remove('token');
			Cookies.remove('access-key');
			// Refresh the page or redirect to home
			window.location.href = '/';
		};

		return (
			<div className='py-4 space-y-4'>
				{pages.map((page) => (
					<Link
						key={page.link}
						href={page.link}
						onClick={() => setSelectedLink(page.link)}
						className={`block px-4 py-2 text-base ${
							selectedLink === page.link ? 'font-bold text-[#F07202]' : 'text-gray-800'
						}`}
					>
						{page.title}
					</Link>
				))}

				{!currentUser ? (
					<div className='mt-6 px-4 flex flex-col space-y-2'>
						<Link
							href='/sign-up'
							className='inline-block w-full text-center border border-[#F07202] text-[#F07202] rounded-full py-2 px-4 font-medium'
						>
							Đăng ký
						</Link>
						<Link
							href='/sign-in'
							className='inline-block w-full text-center bg-[#F07202] text-white rounded-full py-2 px-4 font-medium'
						>
							Đăng nhập
						</Link>
					</div>
				) : (
					<div className='mt-6 px-4'>
						<div className='flex items-center space-x-3 p-2 mb-4'>
							<div
								className='bg-center bg-cover bg-no-repeat w-[40px] h-[40px] rounded-full bg-[#BBBBBB]'
								style={{
									backgroundImage: currentUser?.avatarUrl
										? `url('${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatarUrl}')`
										: 'none',
								}}
							/>
							<div className='text-base text-[#F07202] font-semibold'>{currentUser?.fullname}</div>
						</div>

						<Separator className='my-2' />

						<nav className='flex flex-col space-y-1'>
							{currentUser.role === 2 && (
								<Link
									href='/admin/dashboard'
									className='px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md'
								>
									Quản trị
								</Link>
							)}
							<Link href='/user' className='px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md'>
								Trang cá nhân
							</Link>
							<button
								onClick={handleLogout}
								className='text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md'
							>
								Đăng xuất
							</button>
						</nav>
					</div>
				)}
			</div>
		);
	};

	// Cart trigger with count
	const CartTrigger = () => (
		<div className='relative'>
			<button className='p-2 relative' onClick={() => setIsCartOpen(true)}>
				<svg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g id='SVGRepo_iconCarrier'>
						<path
							d='M8.7351 14.0181C8.91085 13.6985 9.24662 13.5 9.61132 13.5H16.47C17.22 13.5 17.88 13.09 18.22 12.47L21.6008 6.33041C21.7106 6.13097 21.7448 5.91025 21.7129 5.70131C21.8904 5.52082 22 5.27321 22 5C22 4.44772 21.5523 4 21 4H6C5.96703 4 5.93443 4.0016 5.90228 4.00471L5.7317 3.64435C5.40095 2.94557 4.69708 2.5 3.92398 2.5H2.92004C2.36776 2.5 1.92004 2.94772 1.92004 3.5C1.92004 4.05228 2.36776 4.5 2.92004 4.5H3.14518C3.6184 4.5 4.04931 4.77254 4.25211 5.20011L7.08022 11.1627C7.35632 11.7448 7.33509 12.4243 7.02318 12.988L6.17004 14.53C5.44004 15.87 6.40004 17.5 7.92004 17.5H18.92C19.4723 17.5 19.92 17.0523 19.92 16.5C19.92 15.9477 19.4723 15.5 18.92 15.5H9.61131C8.85071 15.5 8.36855 14.6845 8.7351 14.0181Z'
							fill='#F07202'
						/>
						<path
							d='M7.92005 18.5C6.82005 18.5 5.93005 19.4 5.93005 20.5C5.93005 21.6 6.82005 22.5 7.92005 22.5C9.02005 22.5 9.92005 21.6 9.92005 20.5C9.92005 19.4 9.02005 18.5 7.92005 18.5Z'
							fill='#F07202'
						/>
						<path
							d='M17.9201 18.5C16.8201 18.5 15.9301 19.4 15.9301 20.5C15.9301 21.6 16.8201 22.5 17.9201 22.5C19.0201 22.5 19.9201 21.6 19.9201 20.5C19.9201 19.4 19.0201 18.5 17.9201 18.5Z'
							fill='#F07202'
						/>
					</g>
				</svg>
				{cartCount > 0 && (
					<div className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
						{cartCount > 99 ? '99+' : cartCount}
					</div>
				)}
			</button>
		</div>
	);

	return (
		<div className='sticky -top-1 left-0 w-full z-[51] bg-white'>
			{/* Cart modal */}
			<CartComponent isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

			{/* Top promotion banner - desktop only */}
			<div className='hidden lg:block bg-gradient-to-r from-[#FFD951] to-[#F07202] py-3'>
				<div className='container-lg flex justify-between items-center'>
					<div className='font-bold text-lg md:text-xl lg:text-2xl uppercase'>
						GIẢM 25% CHO LẦN ĐẦU ĐĂNG KÝ
					</div>
					<div className='flex flex-col'>
						<div className='flex items-center'>
							<input
								className={`h-10 px-4 rounded-full ${
									emailError ? 'border border-red-500' : 'border-none'
								} outline-none mr-2 w-48 md:w-64`}
								placeholder='Điền email tại đây...'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setEmailError('');
								}}
								type='email'
							/>
							<button
								onClick={getVoucher}
								className='bg-[#F07202] text-white font-medium rounded-full py-2 px-4 hover:bg-[#d86600] transition-colors'
							>
								Nhận mã giảm giá
							</button>
						</div>
						{emailError && <div className='text-white text-xs mt-1 ml-2'>{emailError}</div>}
					</div>
				</div>
			</div>

			{/* Main header */}
			<div className='bg-white shadow-sm'>
				{/* Desktop Navigation */}
				<div className='hidden lg:block container-lg'>
					<div className='flex items-center justify-between py-3'>
						<Link href='/' className='flex items-center'>
							<div className='relative w-12 h-12'>
								<Image
									src='/assets/images/logo.png'
									alt='Camnect Logo'
									fill
									className='object-contain'
								/>
							</div>
							<span className='ml-2 text-[#F07202] text-2xl font-bold'>Camnect</span>
						</Link>

						<div className='flex items-center'>
							<HeaderMenu role={currentUser?.role ?? 0} />

							<div className='ml-8 relative'>
								<div className='flex items-center px-3 py-2 bg-gray-100 rounded-full'>
									<svg
										className='w-4 h-4 text-gray-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
										/>
									</svg>
									<input
										type='text'
										placeholder='Tìm kiếm...'
										className='ml-2 bg-transparent border-none outline-none w-32'
									/>
								</div>
							</div>
						</div>

						{!currentUser ? (
							<div className='flex items-center space-x-2'>
								<Link
									href='/sign-up'
									className='border border-[#F07202] text-[#F07202] rounded-full py-2 px-6 font-medium hover:bg-[#FFF8E7] transition-colors'
								>
									Đăng ký
								</Link>
								<Link
									href='/sign-in'
									className='bg-[#F07202] text-white rounded-full py-2 px-6 font-medium hover:bg-[#d86600] transition-colors'
								>
									Đăng nhập
								</Link>
							</div>
						) : (
							<div className='flex items-center space-x-4'>
								<CartTrigger />
								<UserDropdown currentUser={currentUser} />
							</div>
						)}
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className='lg:hidden'>
					<div className='flex items-center justify-between px-4 py-3'>
						<Link href='/' className='flex items-center'>
							<div className='relative w-10 h-10'>
								<Image
									src='/assets/images/logo.png'
									alt='Camnect Logo'
									fill
									className='object-contain'
								/>
							</div>
							<span className='ml-2 text-[#F07202] text-xl font-bold'>Camnect</span>
						</Link>

						<div className='flex items-center'>
							{currentUser && <CartTrigger />}

							<Sheet>
								<SheetTrigger asChild>
									<button className='p-2 ml-2'>
										<svg
											width='24px'
											height='24px'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M4 6H20M4 12H20M4 18H20'
												stroke='#888888'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</button>
								</SheetTrigger>
								<SheetContent side='right'>
									<SheetTitle className='sr-only'>Menu Navigation</SheetTitle>
									<MobileMenuItems />
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</div>
			</div>

			{/* Orange banner for mobile view */}
			<div className='lg:hidden bg-[#F07202] py-3 px-4'>
				<p className='text-white text-center font-medium'>Nơi khoảnh khắc trở thành kỉ niệm!</p>
			</div>
		</div>
	);
}
