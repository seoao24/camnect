'use client';
import OrgangeButton from "@/components/buttons/OrganeButton";
import YellowButton from "@/components/buttons/YellowButton";
import BorderedInput from "@/components/inputs/BorderedInput";
import React, { useState } from "react";
import HeaderMenu, { pages } from "./header-menu";
import Link from "next/link";

export default function AppHeader() {
    return (
        <>
            <TopHeader />
            <MainHeader />
        </>
    )
}

const TopHeader = () => {
    return (
        <div className="hidden md:block w-[100vw] h-[72px] bg-[url('/assets/images/header-top.png')] bg-no-repeat bg-cover flex justify-center">
            <div className="container flex justify-between items-center">
                <div className="font-bold text-[24px] uppercase">Giảm giá 25% cho lần đầu đăng ký</div>
                <div className="flex items-center">
                    <BorderedInput />
                    <YellowButton title="Nhận mã giảm giá" onClick={() => { }} />
                </div>
            </div>
        </div>
    )
}

const MainHeader = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [selectedLink, setSelectedLink] = useState(pages[0].link)
    return (
        <div>
            <div className="hidden md:flex justify-center w-[100vw] mt-3">
                <div className="container justify-between flex items-center">
                    <div className="flex">
                        <img src="/assets/images/logo.png" alt="" className="w-[100px] h-[120px]" />
                        <div className="font-bold text-[50px] text-[#F07202] ml-3 mt-[2rem]">Camnect</div>
                    </div>
                    <div>
                        <HeaderMenu />
                    </div>
                    <div className="flex items-center">
                        <Link className="bg-none border-[#F07202] border-[1px] px-[2rem] text-[#F07202] rounded-[20px] py-[10px] text-[16px] font-bold mx-2"
                            href='/sign-up'>Đăng ký</Link>
                        <OrgangeButton title="Đăng nhập" onClick={() => { }} />
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
    )
}