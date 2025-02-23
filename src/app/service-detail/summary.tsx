'use client';
import Link from 'next/link';
import React from 'react'

export default function ServiceDetailSummary() {
    return (
        <div className='flex'>
            <div className="px-5 py-3 bg-cover bg-no-repeat flex items-center"
                style={{
                    backgroundImage: `url('/assets/images/background.png')`
                }}>
                <div className='w-[127px] h-[127px] rounded-[50%] bg-cover bg-no-repeat'
                    style={{
                        backgroundImage: `url('/assets/images/avatar.png')`
                    }}></div>
                <div className='ml-5'>
                    <div className="text-[30px] text-white font-bold">Lyn Nguyen</div>
                    <div className="text-[16px] text-white">Online 2 phút trước</div>
                    <div className="grid grid-cols-2 gap-2 mt-5">
                        <Link
                            href={``}
                            className='bg-white shadow-md px-2 py-2 rounded-[5px] text-[12px] flex justify-center'
                        >
                            <svg
                                width="17px"
                                height="17px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
                                        stroke="#F07202"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />{" "}
                                    <path
                                        d="M8 12H8.009M11.991 12H12M15.991 12H16"
                                        stroke="#F07202"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                </g>
                            </svg>

                            <div className='ml-2'>Chat ngay</div>
                        </Link>
                        <Link
                            href={``}
                            className='bg-white shadow-md px-2 py-2 rounded-[5px] text-[12px] flex'
                        >
                            <svg
                                width="17px"
                                height="17px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M18.3944 7C18.9574 7 19.2389 7 19.4711 7.05628C20.199 7.2327 20.7673 7.801 20.9437 8.52887C21 8.76107 21 9.04256 21 9.60555L21 16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20L16 20L8 20L7 20C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16L3 9.60555C3 9.04256 3 8.76107 3.05628 8.52887C3.23271 7.801 3.80101 7.2327 4.52887 7.05628C4.76107 7 5.04257 7 5.60555 7V7C5.92098 7 6.07869 7 6.2261 6.9779C6.68235 6.90952 7.10092 6.6855 7.4109 6.34382C7.51105 6.23342 7.59853 6.1022 7.7735 5.83975L8 5.5C8.39637 4.90544 8.59456 4.60816 8.86549 4.40367C9.03094 4.27879 9.2148 4.18039 9.41048 4.112C9.73092 4 10.0882 4 10.8028 4L13.1972 4C13.9118 4 14.2691 4 14.5895 4.112C14.7852 4.18039 14.9691 4.27879 15.1345 4.40367C15.4054 4.60816 15.6036 4.90544 16 5.5L16.2265 5.83975C16.4015 6.1022 16.4889 6.23342 16.5891 6.34382C16.8991 6.6855 17.3177 6.90952 17.7739 6.9779C17.9213 7 18.079 7 18.3944 7V7Z"
                                        stroke="#F07202"
                                        strokeWidth={2}
                                        strokeLinejoin="round"
                                    />{" "}
                                    <path
                                        d="M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z"
                                        stroke="#F07202"
                                        strokeWidth={2}
                                    />{" "}
                                </g>
                            </svg>

                            <div className='ml-2'>Xem trang cá nhân</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="ml-5 border-l-[1px] border-l-[#C4C4C4] flex items-center">
                <div className="grid grid-cols-2 gap-5 text-[18px] text-[#777777] px-10">
                    <div>Dịch vụ: 5</div>
                    <div>Đánh giá: 4.9 (20 đánh giá)</div>
                    <div>Đang theo dõi: 2</div>
                    <div>Tỷ lệ phản hồi chat: 100% (Trong 1 giờ)</div>
                    <div>Người theo dõi: 50</div>
                    <div>Tham gia: 5 ngày</div>
                </div>
            </div>
        </div>
    )
}
