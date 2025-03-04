'use client';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import ServiceItem from './service-item';
import axiosInstance from '@/api/apiBase';

interface ServiceModel {
    id: string,
    type: string,
    name: string,
    price: number,
    oldPrice: number,
    description: string,
    image: File | null,
    imageUrl: string
    conceptIds: string[]
    imageDefault: ImageDefault | null,
    address: string,
    rate: number
}
interface ImageDefault {
    imageUrl: string,
    size: number
}
export default function Discount() {
    const [services, setServices] = useState<ServiceModel[]>([]);
    const settings = {
        className: "center h-[450px]",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
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
    const getServices = async () => {
        try {
            const params = {
                
            }
            const response = await axiosInstance.get("/Service/Search", {
                params: params
            });
            setServices(response.data?.items);
        } catch {
            // toast.error("Không thể lấy danh sách concept");
        }
    }
    useEffect(() => {
        getServices();
    }, [])
    return (
        <div>
            <div className="text-center text-[40px] font-bold text-[#F07202] mt-5">ĐANG ĐƯỢC GIẢM GIÁ</div>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        services.map((e) => (
                            <div key={e.id}>
                                <ServiceItem
                                    currentPrice={e.price}
                                    id={e.id}
                                    imageUrl={e.imageUrl}
                                    lastPrice={e.oldPrice}
                                    link={""}
                                    location={e.address}
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
