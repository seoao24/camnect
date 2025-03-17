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
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@radix-ui/react-dropdown-menu';

export interface UserInfo {
	userId: string;
	fullname: string;
	avatarUrl: string;
	role: number;
}

const pages = [
	{ title: 'Trang Chủ', link: '/' },
	{ title: 'Lịch', link: '/lich' },
	{ title: 'Tin Tức', link: '/tin-tuc' },
	{ title: 'Cộng đồng', link: '/cong-dong' },
	{ title: 'Dịch vụ', link: '/dich-vu' },
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

export default function AppHeader() {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [selectedLink, setSelectedLink] = useState(pages[0].link);
	const dispatch = useDispatch();

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

	useEffect(() => {
		// Check for currentUser in cookies at component mount and update Redux if found
		const currentUserString = Cookies.get('currentUser');
		if (currentUserString) {
			dispatch(setCurrentUser(JSON.parse(currentUserString)));
		}
	}, [dispatch]);

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

	return (
		<div className='sticky -top-1 left-0 w-full z-[51] bg-white'>
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
							<div>
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

						<Sheet>
							<SheetTrigger asChild>
								<button className='p-2'>
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

			{/* Orange banner for mobile view */}
			<div className='lg:hidden bg-[#F07202] py-3 px-4'>
				<p className='text-white text-center font-medium'>Nơi khoảnh khắc trở thành kỉ niệm!</p>
			</div>
		</div>
	);
}
