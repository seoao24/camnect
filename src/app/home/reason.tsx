'use client';
import React from "react";

export default function Reason() {
    return (
        <div className="flex justify-center mt-[5rem]">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] pr-[50px] px-5">
                    <div className="mt-[4.5rem]">
                        <div className="bg-contain bg-no-repeat w-[250px] h-[338px]"
                            style={{
                                backgroundImage: `url('/assets/images/reason11.png')`
                            }}></div>
                        <div className="bg-contain bg-no-repeat w-[250px] h-[338px] mt-4"
                            style={{
                                backgroundImage: `url('/assets/images/reason13.png')`
                            }}></div>
                    </div>
                    <div>
                        <div className="bg-contain bg-no-repeat w-[250px] h-[338px]"
                            style={{
                                backgroundImage: `url('/assets/images/reason12.png')`
                            }}></div>
                        <div className="bg-contain bg-no-repeat w-[250px] h-[338px] mt-4"
                            style={{
                                backgroundImage: `url('/assets/images/reason14.png')`
                            }}></div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="">
                        <div className="text-[30px] text-[#777777]">Những lý do</div>
                        <div className="text-[#F07202] text-[36px] font-bold uppercase">Vì sao nên chọn Camnect?</div>
                        <span className="text-[#777777] text-[18px]">Camnect – Nền tảng kết nối nhiếp ảnh chuyên nghiệp
                            Camnect là giải pháp hoàn hảo dành cho những ai đang tìm kiếm dịch vụ chụp ảnh chuyên nghiệp và tiện lợi. Với hệ thống kết nối nhanh chóng, dịch vụ đa dạng và cam kết chất lượng vượt trội.
                        </span>
                        <div className="mt-10">
                            <button
                                className="flex items-center bg-[#F07202] px-[2rem] text-[#F07202] rounded-[20px] py-[10px] text-[16px] font-bold text-white"
                            >
                                <div className="mr-2">Đăng ký</div>
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
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                                            fill="#ffffff"
                                        />{" "}
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}