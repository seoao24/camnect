'use client';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import axiosInstance from '@/api/apiBase';

interface ServiceModel {
    id: string,
    type: string,
    name: string,
    price: number,
    oldPrice: number,
    description: string,
    image: File | null,
    imageDefaultUrl: string
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
        className: "center h-[391px]",
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
        <div className={`${services.length ? '' : 'hidden'} mb-[5rem] mb-5`}>
            <div className="text-center text-[40px] font-bold text-[#F07202] mt-5">ĐANG ĐƯỢC GIẢM GIÁ</div>
            <div className="slider-container w-full overflow-hidden">
                <Slider {...settings}>
                    {
                        services.map((e) => (
                            <div className='rounded-[25px] bg-white md:w-full' key={e.id}>
                                <div className="bg-cover bg-center bg-no-repeat h-[207px] rounded-[25px]" style={{
                                    backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${e.imageDefaultUrl}')`
                                }}></div>
                                <div className="px-1 mt-2">
                                    <div className='text-[20px] font-bold'>{e.name}</div>
                                    <div className="text-[18px]">{e.type}</div>
                                    <div className="flex items-center py-1">
                                        <svg
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 64 64"
                                            enableBackground="new 0 0 64 64"
                                            xmlSpace="preserve"
                                            fill="#000000"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    fill="#F07202"
                                                    d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                                                />{" "}
                                            </g>
                                        </svg>
                                        <div className='text-[14px] text-[#606060] ml-2'>{e.address ?? "Tất cả"}</div>
                                    </div>
                                    <div className="flex items-center py-1">
                                        <svg
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 64 64"
                                            enableBackground="new 0 0 64 64"
                                            xmlSpace="preserve"
                                            fill="#000000"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    fill="#FF9900"
                                                    d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"
                                                />{" "}
                                            </g>
                                        </svg>
                                        <div className='text-[14px] text-[#606060] ml-2'>{e.rate}</div>
                                    </div>
                                    <div className="text-[18px] font-bold text-nowrap">Giá: {e.price}</div>
                                    <div className="text-[14px] font-bold text-nowrap text-[#828282] line-through">Giá: {e.oldPrice}</div>
                                    <div className="flex justify-between">
                                        <button className="text-white bg-[#F07202] rounded-[30px] px-[14px] py-2 font-bold flex items-center">
                                            <div>Thêm vào giỏ hàng</div>
                                            <svg
                                                width="20px"
                                                height="20px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                <g id="SVGRepo_iconCarrier">
                                                    {" "}
                                                    <path
                                                        d="M8.7351 14.0181C8.91085 13.6985 9.24662 13.5 9.61132 13.5H16.47C17.22 13.5 17.88 13.09 18.22 12.47L21.6008 6.33041C21.7106 6.13097 21.7448 5.91025 21.7129 5.70131C21.8904 5.52082 22 5.27321 22 5C22 4.44772 21.5523 4 21 4H6C5.96703 4 5.93443 4.0016 5.90228 4.00471L5.7317 3.64435C5.40095 2.94557 4.69708 2.5 3.92398 2.5H2.92004C2.36776 2.5 1.92004 2.94772 1.92004 3.5C1.92004 4.05228 2.36776 4.5 2.92004 4.5H3.14518C3.6184 4.5 4.04931 4.77254 4.25211 5.20011L7.08022 11.1627C7.35632 11.7448 7.33509 12.4243 7.02318 12.988L6.17004 14.53C5.44004 15.87 6.40004 17.5 7.92004 17.5H18.92C19.4723 17.5 19.92 17.0523 19.92 16.5C19.92 15.9477 19.4723 15.5 18.92 15.5H9.61131C8.85071 15.5 8.36855 14.6845 8.7351 14.0181Z"
                                                        fill="#ffffff"
                                                    />{" "}
                                                    <path
                                                        d="M7.92005 18.5C6.82005 18.5 5.93005 19.4 5.93005 20.5C5.93005 21.6 6.82005 22.5 7.92005 22.5C9.02005 22.5 9.92005 21.6 9.92005 20.5C9.92005 19.4 9.02005 18.5 7.92005 18.5Z"
                                                        fill="#ffffff"
                                                    />{" "}
                                                    <path
                                                        d="M17.9201 18.5C16.8201 18.5 15.9301 19.4 15.9301 20.5C15.9301 21.6 16.8201 22.5 17.9201 22.5C19.0201 22.5 19.9201 21.6 19.9201 20.5C19.9201 19.4 19.0201 18.5 17.9201 18.5Z"
                                                        fill="#ffffff"
                                                    />{" "}
                                                </g>
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
