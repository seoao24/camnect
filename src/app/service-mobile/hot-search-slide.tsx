'use client';
import React from 'react'
import ServiceItem, { ServiceItemProps } from '../services/service-item';
import Slider from 'react-slick';

const serviceItems: ServiceItemProps[] = Array.from({ length: 20 }, (_, i) => ({
    id: `service-${i + 1}`,
    imageUrl: `/assets/images/default-image.png`,
    name: `Tên`,
    type: "Chụp chân dung",
    location: `Hà Nội`,
    rate: 4.9, // Random rating từ 0 - 5
    currentPrice: 450000, // Giá ngẫu nhiên từ 50 - 150
    lastPrice: 500000, // Giá cũ ngẫu nhiên từ 100 - 200
    link: `https://example.com/service-${i + 1}`
}));
export default function HotSearchSlideMobile() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
    };
    return (
        <div className='px-5 my-5'>
            <div className="text-[24px] text-[#F07202] font-bold">Tìm kiếm hàng đầu</div>
            <div className="slider-container discount-service-mobile">
                <Slider {...settings}>
                    {
                        serviceItems.map((e) => (
                            <div key={e.id}>
                                <ServiceItem
                                    currentPrice={e.currentPrice}
                                    id={e.id}
                                    imageUrl={e.imageUrl}
                                    lastPrice={e.lastPrice}
                                    link={e.link}
                                    location={e.location}
                                    name={e.name}
                                    rate={e.rate}
                                    type={e.type}
                                />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
