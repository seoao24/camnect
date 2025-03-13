'use client';
import Link from 'next/link'
import React from 'react'
import HomeBanner from './banner';
import HomeService from './home-service';
import MobileIntroduction from './introduction';
import MobileReason from './mobile-reason';
import SearchPhotographer from './search-photographer';

export default function MobilePage() {
    return (
        <div>
            <div className="px-5">
                <div className="text-[12px]">Nơi khoảnh khắc trở thành kỉ niệm!</div>
                <div className="text-[22px] font-bold bg-gradient-to-r from-[#FFB16B] to-[#DF7313] text-transparent bg-clip-text w-[300px]">KẾT NỐI KHOẢNG KHẮC LƯU TRỮ KỈ NIỆM</div>
                <p className="text-[12px] text-[#585858] w-[250px]">Camnect không chỉ cung cấp hình ảnh đẹp, mà còn giúp khách hàng kể câu chuyện của riêng mình qua từng khung hình với tiêu chí luôn đặt chất lượng lên hàng đầu.</p>
                <Link
                    href={''}
                    className='bg-[#FF9900] rounded-[20px] px-5 py-1 text-white uppercase text-[10px] font-bold'>
                    Đăng ký
                </Link>
            </div>
            <HomeBanner />
            <HomeService />
            <MobileIntroduction />
            <MobileReason />
            <SearchPhotographer />
            {/* <FeedBackMobile /> */}
        </div>
    )
}
