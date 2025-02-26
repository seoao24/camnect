'use client';
import Link from 'next/link';
import React from 'react'

export default function MobileIntroduction() {
    return (
        <div>
            <div className="w-full h-[174px] bg-cover bg-no-repeat" style={{
                backgroundImage: `url('/assets/images/mobile-intro-bg.png')`
            }}>
                <div className="text-[24px] font-bold text-white text-center">GIỚI THIỆU VỀ CAMNECT</div>
                <div className="flex justify-center mt-3">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="w-[123px] h-[105px] bg-cover bg-no-repeat" style={{
                            backgroundImage: `url('/assets/images/mobile-intro1.png')`
                        }}></div>
                        <div className="w-[123px] h-[105px] bg-cover bg-no-repeat" style={{
                            backgroundImage: `url('/assets/images/mobile-intro2.png')`
                        }}></div>
                        <div className="w-[123px] h-[105px] bg-cover bg-no-repeat" style={{
                            backgroundImage: `url('/assets/images/mobile-intro3.png')`
                        }}></div>
                    </div>
                </div>
            </div>
            <div className="text-[14px] text-[#515151] px-5">
                <p className='mb-3'>Camnect là nền tảng trực tuyến hàng đầu, chuyên kết nối khách hàng với các nhiếp ảnh gia chuyên nghiệp, đáp ứng mọi nhu cầu chụp ảnh từ sự kiện, chân dung, thời trang đến sản phẩm và bất động sản.</p>
                <p className='mb-3'>Với Camnect, việc tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh trở nên dễ dàng và thuận tiện hơn bao giờ hết. Chỉ cần vài thao tác đơn giản, bạn có thể kết nối ngay với nhiếp ảnh gia phù hợp.</p>
                <p className='mb-3'>Ngoài ra Camnect cung cấp nhiều dịch vụ chụp ảnh đa dạng, từ chân dung cá nhân, sự kiện, kỷ yếu đến sản phẩm và bất động sản, đảm bảo đáp ứng mọi nhu cầu cho cả cá nhân và doanh nghiệp.</p>
                <div className="flex justify-end px-5">
                    <Link
                        href={''}
                        className='bg-[#F07202] rounded-[20px] px-5 py-2 text-white uppercase font-bold'>
                        Đọc thêm
                    </Link>
                </div>
            </div>
        </div>
    )
}
