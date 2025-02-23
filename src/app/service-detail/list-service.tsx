import React from 'react'

export default function ListService() {
    return (
        <div className='shadow-md mt-5'>
            <div className="w-full border-[1px] border-[#8E8B8B] flex justify-between px-4 py-2">
                <div className="text-[30px] text-[#F07202] font-bold">Gói chụp ảnh cá nhân</div>
                <div className="flex items-center text-[#606060] text-[24px]">
                    <div className="flex items-center px-4">
                        <svg
                            width="38px"
                            height="38px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    fill="#F07202"
                                />{" "}
                            </g>
                        </svg>
                        <div className="mx-1">4.9</div>
                    </div>
                    <div className="flex items-center px-4 border-l-[1px] border-r-[1px] border-[#8E8B8B]">
                        <div className="text-black">20</div>
                        <div className="mx-1">đánh giá</div>
                    </div>
                    <div className="flex items-center px-4">
                        <div className="text-black">30</div>
                        <div className="mx-1">giao dịch</div>
                    </div>
                </div>
            </div>
            <div className="flex py-5">
                <div className='shadow-md rounded-[20px] my-2 mx-2 pb-2'>
                    <div className="w-[390px] h-[314px] rounded-[20px] bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: `url('/assets/images/personal-service.png')`
                        }}></div>
                    <div className="grid grid-cols-3 gap-2 p-4">
                        <div className="h-[95px] rounded-[20px] bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url('/assets/images/default-image.png')`
                            }}></div>
                        <div className="h-[95px] rounded-[20px] bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url('/assets/images/default-image.png')`
                            }}></div>
                        <div className="h-[95px] rounded-[20px] bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url('/assets/images/default-image.png')`
                            }}></div>
                    </div>
                </div>
                <div>
                    <table className='table-auto border border-gray-300 w-full text-[14px]' border={1}>
                        <tbody>
                            <tr>
                                <td className='border-gray-300 border border-2'>
                                    <ul>
                                        <li>Bao gồm: 1 thợ chụp, set up background và dụng cụ theo concept</li>
                                        <li>Không hoàn lại tiền (giá thấp)</li>
                                        <li>Đặt dịch vụ và thanh toán ngay</li>
                                    </ul>
                                </td>
                                <td className='border-gray-300 border border-2 text-nowrap'>2 tiếng</td>
                                <td className='border-gray-300 border border-2'>
                                    <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <circle cx={12} cy={6} r={4} stroke="#1C274C" strokeWidth="1.5" />{" "}
                                            <path
                                                d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                                stroke="#1C274C"
                                                strokeWidth="1.5"
                                            />{" "}
                                        </g>
                                    </svg>
                                </td>
                                <td className='border-gray-300 border border-2'>
                                    <div className="text-[#F07202]">
                                        <div className='text-[18px] font-bold text-center text-nowrap'>770.000 VNĐ</div>
                                        <div className="text-[8px] text-center">Giá trước phí dịch vụ</div>
                                    </div>
                                </td>
                                <td className='border-gray-300 border border-2'>1</td>
                                <td className='border-gray-300 border-2'>
                                    <button className='text-[14px] font-bold text-white bg-[#F07202] rounded-[20px] px-2 py-1 my-1 w-full'>
                                        Thêm vào giỏ
                                    </button>
                                    <button className='text-[14px] font-bold text-white bg-[#F07202] rounded-[20px] px-2 py-1 my-1 w-full'>
                                        Đặt ngay
                                    </button>
                                    <div className="text-[8px] text-center text-[#F07202]">Dịch vụ có hạn</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
