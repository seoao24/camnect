import React from 'react'
import Input from '../services/input'

export default function SearchServiceMobile() {
    const getDate = () => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDay();
        let monthText = month + "";
        if (month < 10) monthText = "0" + month;
        let dayText = day + "";
        if (day < 10) dayText = "0" + day;
        return year + "-" + monthText + "-" + dayText;
    }
    return (
        <div>
            <div className="bg-[#F07202] px-5 py-1 my-1 text-white text-[12px]">Nơi khoảnh khắc trở thành kỉ niệm!</div>
            <div className="bg-cover bg-no-repeat bg-center px-5 py-3" style={{
                backgroundImage: `url('/assets/images/search-service-mobile-bg.png')`
            }}>
                <div className="px-5 py-3 w-full bg-white rounded-[5px]">
                    <div className="border-[1px] border-[#C4C4C4] rounded-[5px] py-1 px-3 flex justify-between items-center my-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#C4C4C4"
                            width="17px"
                            height="17px"
                            viewBox="0 0 24 24"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </g>
                        </svg>
                        <input type="text" className='w-full px-3 outline-none border-none' placeholder='Nhập tên dịch vụ hoặc nhiếp ảnh gia' />
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
                                    d="M7 10L12 15L17 10"
                                    stroke="#B7B7B7"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />{" "}
                            </g>
                        </svg>
                    </div>
                    <div className="border-[1px] border-[#C4C4C4] rounded-[5px] py-1 px-3 flex justify-between items-center my-3">
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
                                    d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                    stroke="#C4C4C4"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />{" "}
                            </g>
                        </svg>
                        <div className='w-full'>
                            <div className='text-[14px] text-[#B7B7B7] px-3'>Ngày sử dụng dịch vụ</div>
                            <input type="date" className='w-full px-3 outline-none border-none text-[#F07202]' value={getDate()} />
                        </div>
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
                                    d="M7 10L12 15L17 10"
                                    stroke="#B7B7B7"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />{" "}
                            </g>
                        </svg>
                    </div>
                    <div className="border-[1px] border-[#C4C4C4] rounded-[5px] py-1 px-3 flex justify-between items-center my-3">
                        <div className="flex items-center">
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
                                        d="M12 8V12L15 15"
                                        stroke="#B7B7B7"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />{" "}
                                    <circle cx={12} cy={12} r={9} stroke="#B7B7B7" strokeWidth={2} />{" "}
                                </g>
                            </svg>
                            <div className='text-[14px] text-[#B7B7B7]'>
                                <div>Thời gian</div>
                                <input type="time" className='border-none outline-none w-full' />
                            </div>
                        </div>
                        <div className='w-[1px] h-[40px] border-[#B7B7B7] border-[1px]'></div>
                        <div className="flex items-center">
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
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"
                                        fill="#B7B7B7"
                                    />{" "}
                                </g>
                            </svg>
                            <input type="number" className='border-none outline-none px-3 w-[150px]' placeholder='Số người' />
                        </div>
                    </div>
                    <button className='w-full uppercase text-white bg-[#F07202] py-2 rounded-[5px]'>Gửi</button>
                </div>
            </div>
        </div>
    )
}
