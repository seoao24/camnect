'use client';
import React from "react";

export default function Introduction() {
    return (
        <div className="flex justify-center z-[50] relative mt-[100px]">
            <div className="container flex">
                <div className="text-[#777777] pr-5 w-[80%]">
                    <div className="font-bold text-[40px] text-[#F07202]">GIỚI THIỆU VỀ CAMNECT</div>
                    <p className="text-[18px] mt-5">
                        Camnect là nền tảng trực tuyến hàng đầu, chuyên kết nối khách hàng với các nhiếp ảnh gia chuyên nghiệp, đáp ứng mọi nhu cầu chụp ảnh từ sự kiện, chân dung, thời trang đến sản phẩm và bất động sản.
                    </p>
                    <p className="text-[18px] mt-5">
                        Với Camnect, việc tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh trở nên dễ dàng và thuận tiện hơn bao giờ hết. Chỉ cần vài thao tác đơn giản, bạn có thể kết nối ngay với nhiếp ảnh gia phù hợp.
                    </p>
                    <p className="text-[18px] mt-5">
                        Ngoài ra Camnect cung cấp nhiều dịch vụ chụp ảnh đa dạng, từ chân dung cá nhân, sự kiện, kỷ yếu đến sản phẩm và bất động sản, đảm bảo đáp ứng mọi nhu cầu cho cả cá nhân và doanh nghiệp.
                    </p>
                    <p className="text-[18px] mt-5">
                        Cuối cùng, Camnect cam kết mang lại dịch vụ chuyên nghiệp và đáng tin cậy nhờ quy trình chọn lọc nhiếp ảnh gia nghiêm ngặt cùng hệ thống đánh giá minh bạch, giúp khách hàng hoàn toàn an tâm về chất lượng.
                    </p>
                    <div className="mt-10">
                        <button
                            className="flex items-center bg-[#F07202] px-[2rem] text-[#F07202] rounded-[20px] py-[10px] text-[16px] font-bold text-white"
                        >
                            <div className="mr-2">Đọc thêm</div>
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
                <div className="w-full h-full w-[800px] h-[780px] bg-contain bg-no-repeat"
                style={{
                    backgroundImage: `url('/assets/images/introduction-frame.png')`
                }}>
                    
                </div>
            </div>
            {/* <div className="bg-contain bg-no-repeat w-full h-[50vw] container relative"
                style={{
                    backgroundImage: `url('/assets/images/introduction-full.png')`
                }}>
                <button
                    className="absolute top-[750px] left-0 flex items-center bg-[#F07202] px-[2rem] text-[#F07202] rounded-[20px] py-[10px] text-[16px] font-bold text-white"
                >
                    <div className="mr-2">Đọc thêm</div>
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
            </div> */}
        </div>
    )
}