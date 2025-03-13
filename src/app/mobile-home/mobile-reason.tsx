'use client';
import Link from 'next/link'
import React from 'react'
import ReasonSlide from './reason-slide'

export default function MobileReason() {
    return (
        <div className='bg-[#FFF3E8] px-5 my-5'>
            <div className="text-[16px] text-[#777777]">Những lí do</div>
            <div className="text-[22px] text-[#F07202] font-bold">VÌ SAO NÊN CHỌN CAMNECT?</div>
            <div className="text-[14px] text-[#777777] italic my-3">Camnect – Nền tảng kết nối nhiếp ảnh chuyên nghiệp</div>
            <div className="text-[14px] text-[#777777]">Camnect là giải pháp hoàn hảo dành cho những ai đang tìm kiếm dịch vụ chụp ảnh chuyên nghiệp và tiện lợi. Với hệ thống kết nối nhanh chóng, dịch vụ đa dạng và cam kết chất lượng vượt trội.</div>
            <div className="flex justify-end px-5">
                <Link
                    href='/sign-up'
                    className='bg-[#F07202] rounded-[20px] px-5 py-2 text-white uppercase font-bold'>
                    Đăng ký
                </Link>
            </div>
            <div className='py-5'>
                <ReasonSlide />
            </div>
        </div>
    )
}
