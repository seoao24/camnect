import React from 'react';
import Slider from "react-slick";
import ServiceItem, { ServiceItemProps } from './service-item';

const serviceItems: ServiceItemProps[] = Array.from({ length: 10 }, (_, i) => ({
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
export default function Discount() {
    const settings = {
        className: "center h-[450px]",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function (index: number) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    return (
        <div>
            <div className="text-center text-[40px] font-bold text-[#F07202] mt-5">ĐANG ĐƯỢC GIẢM GIÁ</div>
            <div className="slider-container">
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
