import React from 'react'
import ServiceItem, { ServiceItemProps } from './service-item';
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
export default function HotSearch() {
    const settings = {
        className: "center h-[900px]",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        rows: 2,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="text-center text-[40px] font-bold text-[#F07202] mt-5">TÌM KIẾM HÀNG ĐẦU</div>
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
