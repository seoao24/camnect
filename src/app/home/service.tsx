'use client';
import Image from "next/image";
import React from "react";

export default function Service() {
    return (
        <div className="relative w-full bg-white rounded-[20px] px-5">
            <div className="absolute top-[-40px] flex justify-center w-full left-0">
                <div className="w-[80px] h-[80px] rounded-[50%] flex justify-center items-center shadow-md bg-white">
                    <Image
                        src="/assets/images/service1.png"
                        alt="Service 1"
                        width={36}
                        height={36}
                    />
                </div>
            </div>
            <div className="pt-[70px] pb-[50px]">
                <div className=" text-[#6B716E] font-bold text-center text-[16px]">
                    Chụp Ảnh Chân Dung & Cá Nhân
                </div>
                <div className="text-[12px] text-center text-[#6B716E]">
                    Hướng dẫn tạo dáng tự nhiên, phù hợp với cá tính riêng của mỗi người. Đặc biệt, quá trình xử lý hậu kỳ chuyên sâu sẽ làm nổi bật thần thái và vẻ đẹp độc đáo, mang đến những bức ảnh hoàn hảo nhất.
                </div>
            </div>
        </div>
    )
}