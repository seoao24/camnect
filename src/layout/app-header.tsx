'use client';
import OrgangeButton from "@/components/buttons/OrganeButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import YellowButton from "@/components/buttons/YellowButton";
import BorderedInput from "@/components/inputs/BorderedInput";
import React from "react";
import HeaderMenu from "./header-menu";

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
        <div className="w-[100vw] h-[72px] bg-[url('/assets/images/header-top.png')] bg-no-repeat bg-cover flex justify-center">
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
    return (
        <div className="flex justify-center w-[100vw] mt-3">
            <div className="container justify-between flex items-center">
                <div className="flex">
                    <img src="/assets/images/logo.png" alt="" className="w-[100px] h-[120px]" />
                    <div className="font-bold text-[50px] text-[#F07202] ml-3 mt-[2rem]">Camnect</div>
                </div>
                <div>
                    <HeaderMenu />
                </div>
                <div className="flex items-center">
                    <OutlineButton title="Đăng ký" onClick={() => { }} />
                    <OrgangeButton title="Đăng nhập" onClick={() => { }} />
                </div>
            </div>
        </div>
    )
}