'use client';
import Link from 'next/link';
import React, { useState } from 'react'

export default function ServiceCart() {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-[#8E8B8B] py-6">
            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box">
                    <img
                        src="https://pagedone.io/asset/uploads/1701162850.png"
                        alt="perfume bottle image"
                        className="xl:w-[140px] rounded-xl object-cover"
                    />
                </div>
                <div className="pro-data w-full max-w-sm ">
                    <h5 className="font-bold text-[16px] text-black max-[550px]:text-center uppercase">
                        GÓI CHỤP CÁ NHÂN
                    </h5>
                    <p className="font-normal text-[12px] text-[#141416] my-2 min-[550px]:my-3 max-[550px]:text-center">
                        Khám phá vẻ đẹp cá nhân, lưu giữ dấu ấn riêng biệt.
                    </p>
                    <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                        $120.00
                    </h6>
                </div>
            </div>
            <div className="flex items-center flex-col min-[450px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <div className="font-manrope font-bold text-[13px] leading-2 text-[#F07202] w-full max-w-[150px] text-center">
                    <div className='text-[#6B716E] line-through'>3.500.000đ</div>
                    <div>2.500.000đ</div>
                </div>
                <div className="flex items-center w-full mx-auto justify-center">
                    <button className="group rounded-l-full px-3 py-[3px] border border-[#8E8B8B] flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                        <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                            <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                            <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                    <input
                        type="number"
                        className="border-y border-[#8E8B8B] outline-none text-gray-900 font-semibold text-[13px] w-[50px] placeholder:text-gray-900 py-[4.3px] text-center bg-transparent"
                        value={quantity}
                        onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                    />
                    <button className="group rounded-r-full px-3 py-[3px] border border-[#8E8B8B] flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                        <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                            <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                            <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="font-manrope font-bold text-[13px] leading-2 text-[#F07202] w-full max-w-[150px] text-center">2.500.000đ</div>
                <div className=''>
                    <div className="text-[#6B716E] text-[13px] text-center">Xóa</div>
                    <Link
                        className=''
                        href={''}>
                        <div className="text-center text-[#F07202] text-[13px] w-[100px]">Tìm dịch vụ tương tự</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
