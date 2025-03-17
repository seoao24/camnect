'use client';
import axiosInstance from '@/api/apiBase';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import axios from 'axios';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setIsLogin, setCurrentUser } from '@/redux/slices/loginSlice';

interface LoginForm {
	email: string;
	password: string;
}

// Use dynamic import with no SSR to prevent Redux from running during server-side rendering
export default function SignIn() {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const [form, setForm] = useState<LoginForm>({
		email: '',
		password: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const login = async () => {
		try {
			const response = await axiosInstance.post('/Authentication/SignIn', form);

			// Set the access token in cookies
			Cookies.set('access-key', response.data, { expires: 1 });

			// Get user details right after login
			await getUser();

			// Show success message
			toast.success('Đăng nhập thành công');

			// Redirect to home page
			router.push('/');
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				if (e.code === 'ERR_NETWORK' || e.code === 'ECONNABORTED') {
					toast.error('Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng.');
				} else if (e.response) {
					toast.error(e.response.data);
				} else {
					toast.error('Có lỗi xảy ra, vui lòng thử lại.');
				}
			} else {
				toast.error('Có lỗi xảy ra, vui lòng thử lại.');
			}
		}
	};

	const getUser = async () => {
		try {
			const response = await axiosInstance.get('/Authentication/CurrentUser');
			const userData = response.data;

			// Store user data in cookie
			Cookies.set('currentUser', JSON.stringify(userData));

			// Dispatch both login status and user data to Redux
			dispatch(setIsLogin());
			dispatch(setCurrentUser(userData));
		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	};

	return (
		<div className='flex justify-center mt-[5rem] px-5'>
			<div className='container md:flex items-center justify-center'>
				<div className='max-w-[450px] hidden md:block'>
					<div className='text-[#777777] text-[30px]'>Form Đăng ký Camect</div>
					<div className='text-[#F07202] font-bold text-[36px]'>
						Đăng ký ngay để trải nghiệm dịch vụ Camnect!
					</div>
					<div className='text-[18px] text-[#777777] '>
						Chào mừng bạn đến với Camnect – nền tảng kết nối nhiếp ảnh chuyên nghiệp và đáng tin cậy. Hãy
						hoàn thành form đăng ký ngay nhé!
					</div>
					<div
						className='bg-contain bg-no-repeat w-[209px] h-[38px] mt-[5rem]'
						style={{
							backgroundImage: `url('/assets/images/dot-signup.png')`,
						}}
					></div>
				</div>
				<div className='p-10 bg-[#F07202] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] max-w-[740px]'>
					<input
						type='email'
						name='email'
						className='bg-white outline-none border-none p-4 w-full mt-4'
						placeholder='Email*'
						value={form.email}
						onChange={handleChange}
					/>
					<input
						type='password'
						name='password'
						className='bg-white outline-none border-none p-4 w-full my-4'
						placeholder='Mật khẩu*'
						value={form.password}
						onChange={handleChange}
					/>
					<Link href={'/forgot-password'} className='mt-5 text-white'>
						Quên mật khẩu
					</Link>
					<button
						className='flex text-[#F07202] bg-white rounded-[20px] md:w-[274px] py-4 justify-center mt-5 w-full'
						onClick={login}
					>
						<div className='flex items-center'>
							<div className='mx-1'>Đăng nhập</div>
							<svg
								width='20px'
								height='20px'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g id='SVGRepo_bgCarrier' strokeWidth={0} />
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
								<g id='SVGRepo_iconCarrier'>
									{' '}
									<path
										d='M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z'
										stroke='#F07202'
										strokeWidth={2}
										strokeLinecap='round'
										strokeLinejoin='round'
									/>{' '}
								</g>
							</svg>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
