'use client';
import axiosInstance from '@/api/apiBase';
// import { UserInfo } from '@/layout/app-header';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '@/redux/slices/loginSlice';

interface User {
	fullname: string;
	email: string;
	password: string;
	gender: number;
	role: number;
	numberPhone?: string;
	address?: string;
	provinceId?: string;
	provinceName?: string;
	districtId?: string;
	districtName?: string;
	wardId?: string;
	wardName?: string;
	avatarUrl?: string;
	qrPaymentUrl?: string;
}
export default function UserInformation() {
	// const [currentUser, setCurrentUserState] = useState<UserInfo>();
	const [form, setForm] = useState<User | null>(null);
	const [qrPayment, setQRPayment] = useState<File | null>(null);
	const [qrUrl, setQrUrl] = useState('');
	const [avatar, setAvatar] = useState<File | null>(null);
	const [avatarUrl, setAvatarUrl] = useState('/assets/images/default-image.jpg');
	const router = useRouter();
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (form) {
			const { name, value } = e.target;
			setForm({ ...form, [name]: value });
		}
	};

	const getUserInformation = async () => {
		try {
			const response = await axiosInstance.get('/Authentication/UserInformation');
			setForm(response.data);
			setAvatarUrl(`https://api.tapta.online/${response.data?.avatarUrl}`);
			setQrUrl(`https://api.tapta.online/${response.data?.qrPaymentUrl}`);
		} catch {}
	};

	const getUser = async () => {
		try {
			const response = await axiosInstance.get('/Authentication/CurrentUser');
			// Update local state
			// setCurrentUserState(response.data);
			// Update Redux store
			dispatch(setCurrentUser(response.data));
			// Update cookie
			Cookies.set('currentUser', JSON.stringify(response.data));
		} catch {}
	};

	const updateUserInformation = async () => {
		try {
			const formData = new FormData();
			formData.append(`avatar`, avatar);
			formData.append(`qRPayment`, qrPayment);
			formData.append(`numberPhone`, form?.numberPhone);
			formData.append(`address`, form?.address);
			formData.append(`fullname`, form?.fullname);
			await axiosInstance.post('/Authentication/UpdateInformation', formData);

			// After successful update, get the updated user information
			await getUser();

			toast.success('Cập nhật thông tin thành công');
			router.push('/user');
		} catch {
			toast.error('Lỗi thông tin, vui lòng kiểm tra lại');
		}
	};

	useEffect(() => {
		getUserInformation();
		const userString = Cookies.get('currentUser');
		if (userString) {
			const user = JSON.parse(userString);
			// setCurrentUserState(user);
			setAvatarUrl(`https://api.tapta.online/${user?.avatarUrl}`);
		}
	}, []);

	return (
		<div>
			<div className='mt-5'>
				<div
					className='w-full md:h-[500px] bg-cover bg-center bg-no-repeat md:py-10 py-5 flex justify-center items-center'
					style={{
						backgroundImage: `url('/assets/images/user-background.png')`,
					}}
				>
					<div>
						<div className='flex justify-center'>
							<input
								type='file'
								id='avatar'
								className='hidden'
								onChange={(e) => {
									if (e.target.files && e.target.files.length > 0) {
										const file = e.target.files[0];
										const newImageUrl = URL.createObjectURL(file);
										setAvatar(file);
										setAvatarUrl(newImageUrl);
									}
								}}
							/>
							<label htmlFor='avatar'>
								<div
									className='md:w-[225px] md:h-[225px] bg-white w-[95px] h-[95px] rounded-[50%] border-[2px] border-white bg-cover bg-no-repeat bg-center'
									style={{
										backgroundImage: `url('${avatarUrl}')`,
									}}
								></div>
							</label>
						</div>
						<div className='md:text-[36px] text-[14px] text-[#F07202] font-bold text-center'>
							{form?.fullname}
						</div>
						<div className='text-center text-[#F07202] md:text-[24px] text-[12px]'>978 người theo dõi</div>
						<div className='flex justify-center'>
							<div
								className='md:w-[150px] md:h-[50px] w-[50px] h-[20px] bg-contain bg-no-repeat'
								style={{
									backgroundImage: `url('/assets/images/follow.png')`,
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='container'>
					<div className='flex justify-between items-center'>
						<button
							onClick={updateUserInformation}
							className='bg-[#F07202] rounded-[10px] flex px-4 py-2 items-center w-[500px]'
						>
							<svg
								width='24px'
								height='24px'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									{' '}
									<path
										d='M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z'
										fill='#ffffff'
									></path>{' '}
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z'
										fill='#ffffff'
									></path>{' '}
								</g>
							</svg>
							<div className='text-[24px] text-white ml-2'>Cập nhật thông tin</div>
						</button>
						<Link href={'/user'} className='flex px-4 py-2 rounded-[10px] bg-[#EAEAEA] my-4'>
							<svg
								width='24px'
								height='24px'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								fill='#000000'
							>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									{' '}
									<title></title>{' '}
									<g id='Complete'>
										{' '}
										<g id='edit'>
											{' '}
											<g>
												{' '}
												<path
													d='M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8'
													fill='none'
													stroke='#545353'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
												></path>{' '}
												<polygon
													fill='none'
													points='12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8'
													stroke='#545353'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
												></polygon>{' '}
											</g>{' '}
										</g>{' '}
									</g>{' '}
								</g>
							</svg>
							<div className='text-[#545353] ml-2'>Trở về trang cá nhân</div>
						</Link>
					</div>
					<div className='mt-5'>
						<div className='grid grid-cols-2 gap-4'>
							<input
								type='text'
								className='px-2 py-1 border-[1px] border-[#F07202] rounded-[5px] outline-none'
								placeholder='Email'
								readOnly
								value={form?.email}
							/>
							<input
								type='text'
								name='numberPhone'
								onChange={handleChange}
								value={form?.numberPhone}
								className='px-2 py-1 border-[1px] border-[#F07202] rounded-[5px] outline-none'
								placeholder='Số điện thoại'
							/>
						</div>
						<div className='grid grid-cols-2 gap-4 mt-4'>
							<input
								type='text'
								onChange={handleChange}
								value={form?.fullname}
								name='fullname'
								className='px-2 py-1 border-[1px] border-[#F07202] rounded-[5px] outline-none'
								placeholder='Họ tên'
							/>
							<input
								type='password'
								name='password'
								onChange={handleChange}
								value={form?.password}
								readOnly
								className='px-2 py-1 border-[1px] border-[#F07202] rounded-[5px] outline-none'
								placeholder='Mật khẩu'
							/>
						</div>
						<div className='mt-4'>
							<textarea
								name='address'
								onChange={handleChange}
								value={form?.address}
								className='px-2 py-1 border-[1px] border-[#F07202] rounded-[5px] outline-none w-full'
								placeholder='Địa chỉ'
								rows={3}
							></textarea>
						</div>
						{form?.role == 1 ? (
							<div className='flex justify-center mt-4'>
								<input
									type='file'
									id='qrUrl'
									className='hidden'
									onChange={(e) => {
										if (e.target.files && e.target.files.length > 0) {
											const file = e.target.files[0];
											const newImageUrl = URL.createObjectURL(file);
											setQRPayment(file);
											setQrUrl(newImageUrl);
										}
									}}
								/>
								<label htmlFor='qrUrl'>
									<div
										className='w-[300px] h-[300px] bg-center bg-cover bg-no-repeat border-[1px] rounded-[5px] border-[#F07202] flex justify-center items-center'
										style={{
											backgroundImage: `url('${qrUrl}')`,
										}}
									>
										{qrUrl ? '' : 'Upload mã QR thanh toán'}
									</div>
								</label>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
