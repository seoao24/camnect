'use client';
import React from 'react'
import ServiceSlide from './service-slide'

export default function HomeService() {
    return (
        <div className='px-5 mt-[5rem]'>
            <div className="h-[2px] bg-[#FF9900] opacity-[0.5] w-[65px]"></div>
            <div className="text-[22px] font-bold bg-gradient-to-r from-[#FFB16B] to-[#DF7313] text-transparent bg-clip-text w-[330px]">HỆ SINH THÁI NHIẾP ẢNH VÀ DỊCH VỤ CHUYÊN NGHIỆP</div>
            <p className="text-[12px] text-[#6B716E] w-[300px]">Chất lượng hình ảnh không chỉ đến từ tài năng mà còn từ thiết bị – Camnect giúp bạn có cả hai!</p>
            <ServiceSlide />
        </div>
    )
}
