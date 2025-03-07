'use client';
import axiosInstance from '@/api/apiBase';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter  } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function NewPassword() {
    const router = useRouter();
    const [password, setPassword] = useState<string>("");
    const [cfPassword, setCfPassword] = useState<string>("");
    const login = async () => {
        try {
            if (cfPassword != password) {
                toast.error("Mật khẩu không khớp");
                return;
            }
            const body = {
                password: password
            }
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            console.log(token);
            axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
            const response = await axiosInstance.post("/Authentication/ResetPassword", body);
            toast.success("Đăng nhập thành công");
            router.push("/");
            Cookies.set('access-key', response.data, { expires: 1 })
        } catch (e: unknown) {
            if (axios.isAxiosError(e) && e.response) {
                toast.error(e.response.data);
            } else {
                toast.error("Có lỗi xảy ra, vui lòng thử lại.");
            }
        }
    }
    return (
        <div className='flex justify-center mt-[5rem] px-5'>
            <div className="container md:flex items-center justify-center">
                <div className='max-w-[450px] hidden md:block'>
                    <div className="text-[#777777] text-[30px]">Form Đăng ký Camect</div>
                    <div className="text-[#F07202] font-bold text-[36px]">Đăng ký ngay để trải nghiệm dịch vụ Camnect!</div>
                    <div className="text-[18px] text-[#777777] ">Chào mừng bạn đến với Camnect – nền tảng kết nối nhiếp ảnh chuyên nghiệp và đáng tin cậy. Hãy hoàn thành form đăng ký ngay nhé!</div>
                    <div className='bg-contain bg-no-repeat w-[209px] h-[38px] mt-[5rem]'
                        style={{
                            backgroundImage: `url('/assets/images/dot-signup.png')`
                        }}>
                    </div>
                </div>
                <div className="p-10 bg-[#F07202] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] max-w-[740px] py-[60px]">
                    <input type="password" name='email' className='bg-white outline-none border-none p-4 md:w-[400px] mt-4' placeholder='Mật khẩu*' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" name='email' className='bg-white outline-none border-none p-4 md:w-[400px] mt-4' placeholder='Xác nhận mật khẩu*' value={cfPassword} onChange={(e) => setCfPassword(e.target.value)} />
                    {/* <input type="password" className='bg-white outline-none border-none p-4 w-full mt-4' placeholder='Xác nhận mật khẩu*' /> */}
                    <button className='flex text-[#F07202] bg-white rounded-[20px] md:w-[274px] py-4 justify-center mt-5 w-full'
                        onClick={login}>
                        <div className="flex items-center">
                            <div className='mx-1'>Yêu cầu đặt lại mật khẩu</div>
                            <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
                                        stroke="#F07202"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
