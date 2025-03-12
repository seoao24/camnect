'use client';
import YellowButton from "@/components/buttons/YellowButton";
import React, { useEffect, useState } from "react";
import HeaderMenu, { pages } from "./header-menu";
import Link from "next/link";
import { toast } from 'react-toastify';
import axiosInstance from "@/api/apiBase";
import UserDropdown from "./user-dropdown";
import { usePathname, useRouter } from "next/navigation";
// import Cookies from "js-cookie";

export interface UserInfo {
    userId: string,
    fullname: string,
    avatarUrl: string,
    role: number
}
export default function AppHeader() {
    const [email, setEmail] = useState('');
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [selectedLink, setSelectedLink] = useState(pages[0].link);
    const [currentUser, setCurrentUser] = useState<UserInfo>();
    const pathname = usePathname();
    const router = useRouter();
    const getVoucher = async () => {
        const params = {
            Email: email
        }
        try {
            await axiosInstance.get('/OrderService/GetVoucherByEmail', {
                params: params
            });
            toast.success("Hãy kiểm tra email của bạn để lấy voucher");
        } catch {
            toast.error("Đã có lỗi xảy ra khi gửi voucher");
        }
    }
    const getUser = async () => {
        try {
            const response = await axiosInstance.get("/Authentication/CurrentUser");
            setCurrentUser(response.data);
        } catch {

        }
    }
    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        if(currentUser?.role != 2 && pathname.includes("/admin")){
            router.push("/");
        }
    }, [pathname])
    return (
        <>
            <div className="hidden md:flex w-[100vw] h-[72px] bg-[url('/assets/images/header-top.png')] bg-no-repeat bg-cover justify-center">
                <div className="container flex justify-between items-center">
                    <div className="font-bold text-[24px] uppercase">Giảm giá 25% cho lần đầu đăng ký</div>
                    <div className="flex items-center">
                        <input
                            className="pt-[10px] pb-[10px] px-[1rem] rounded-[20px] border-none outline-none mx-[1.5rem]"
                            placeholder="Điền email tại đây"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" />
                        <YellowButton title="Nhận mã giảm giá" onClick={getVoucher} />
                    </div>
                </div>
            </div>
            <div>
                <div className="hidden md:flex justify-center w-[100vw] mt-3">
                    <div className={`container justify-between flex items-center`}>
                        <Link
                            href={'/'} className="flex">
                            <img src="/assets/images/logo.png" alt="" className="w-[100px] h-[120px]" />
                            <div className="font-bold text-[50px] text-[#F07202] ml-3 mt-[2rem]">Camnect</div>
                        </Link>
                        <div>
                            <HeaderMenu role={currentUser?.role ?? 0}/>
                        </div>
                        <div className={`flex items-center ${currentUser ? 'hidden' : ''}`}>
                            <Link className="bg-none border-[#F07202] border-[1px] px-[2rem] text-[#F07202] rounded-[20px] py-[10px] text-[16px] font-bold mx-2"
                                href='/sign-up'>Đăng ký</Link>
                            {/* <OrgangeButton title="Đăng nhập" onClick={() => { }} /> */}
                            <Link
                                href={'/sign-in'}
                                className="bg-[#F07202] px-[2rem] text-[#F07202] rounded-[20px] py-[10px] text-[16px] font-bold text-white mx-2"
                            >
                                Đăng nhập
                            </Link>
                        </div>
                        {/* <Link
                            href={'/user'}>
                            <div className={`container justify-between flex items-center ${currentUser ? '' : 'hidden'}`}>
                                <div className="bg-center bg-cover bg-no-repeat w-[40px] h-[40px] rounded-[50%] bg-[#BBBBBB]" style={{
                                    backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${currentUser?.avatarUrl}')`
                                }}></div>
                                <div className="text-[20px] ml-2 text-[#F07202] font-semibold">{currentUser?.fullname}</div>
                            </div>
                        </Link> */}
                        <div className={`${currentUser ? '' : 'hidden'}`}>
                            <UserDropdown currentUser={currentUser}/>
                        </div>
                    </div>

                </div>
                <div className="md:hidden flex justify-between items-center px-5 relative">
                    <div className="flex items-center">
                        <div className="bg-contain bg-no-repeat w-[50px] h-[50px]" style={{
                            backgroundImage: `url('/assets/images/logo.png')`
                        }}></div>
                        <div className="font-bold text-[24px] text-[#F07202]">Camnect</div>
                    </div>
                    <div onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <svg
                            fill="#D9D9D9"
                            width="21px"
                            height="21px"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title>menu</title>{" "}
                                <path d="M8 24h16v-4h-16v4zM8 18.016h16v-4h-16v4zM8 12h16v-4h-16v4z" />{" "}
                            </g>
                        </svg>
                    </div>
                    <div className={`absolute top-[50px] w-full bg-white z-[999] left-0 ${isOpenMenu ? 'block' : 'hidden'}`}>
                        {
                            pages.map(e => (
                                <div key={e.link}>
                                    <Link
                                        href={e.link}
                                        onClick={() => setSelectedLink(e.link)}
                                        className={`${selectedLink == e.link ? 'font-bold' : ''}`}>
                                        {e.title}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}