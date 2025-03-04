'use client';
import React from 'react'
import Slider from 'react-slick';

const slideData = [
    {
        id: "slide-home-1",
        backgroundUrl: "/assets/images/search1.png",
        fullname: "Quỳnh Trang",
        rate: 5,
        minPrice: 500000,
        maxPrice: 1000000,
        experience: "Hơn 3 năm trong lĩnh vực nhiếp ảnh, đặc biệt là chụp ảnh thời trang và chân dung.",
        topConcept: "Thường chụp ảnh kỷ yếu với phong cách trẻ trung và năng động, ghi lại những khoảnh khắc vui vẻ của học sinh, sinh viên...",
        services: [
            "Chụp ảnh thời trang cá nhân và thương mại",
            "Chụp ảnh chân dung chuyên nghiệp",
            "Chụp ảnh sản phẩm cho thương hiệu"
        ]
    },
    {
        id: "slide-home-2",
        backgroundUrl: "/assets/images/search1.png",
        fullname: "Quỳnh Trang",
        rate: 5,
        minPrice: 500000,
        maxPrice: 1000000,
        experience: "Hơn 3 năm trong lĩnh vực nhiếp ảnh, đặc biệt là chụp ảnh thời trang và chân dung.",
        topConcept: "Thường chụp ảnh kỷ yếu với phong cách trẻ trung và năng động, ghi lại những khoảnh khắc vui vẻ của học sinh, sinh viên...",
        services: [
            "Chụp ảnh thời trang cá nhân và thương mại",
            "Chụp ảnh chân dung chuyên nghiệp",
            "Chụp ảnh sản phẩm cho thương hiệu"
        ]
    },
    {
        id: "slide-home-3",
        backgroundUrl: "/assets/images/search1.png",
        fullname: "Quỳnh Trang",
        rate: 5,
        minPrice: 500000,
        maxPrice: 1000000,
        experience: "Hơn 3 năm trong lĩnh vực nhiếp ảnh, đặc biệt là chụp ảnh thời trang và chân dung.",
        topConcept: "Thường chụp ảnh kỷ yếu với phong cách trẻ trung và năng động, ghi lại những khoảnh khắc vui vẻ của học sinh, sinh viên...",
        services: [
            "Chụp ảnh thời trang cá nhân và thương mại",
            "Chụp ảnh chân dung chuyên nghiệp",
            "Chụp ảnh sản phẩm cho thương hiệu"
        ]
    }
]
export default function PhotographerSlide() {
    const getNumber = (index: number) => {
        let text = "";
        if (index > 9) text = index + "";
        else {
            text = "0" + index;
        }
        return text;
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
    };
    return (
        <div className="slider-container my-5 search-photographer">
            <Slider {...settings}>
                {
                    slideData.map((e, index) => (
                        <div className='' key={e.id}>
                            <div className="flex justify-between items-end">
                                <div className="text-[90px] text-[#FFD9B7] uppercase">
                                    {getNumber(index + 1)}
                                </div>
                                <div className="w-[185px] h-[185px] rounded-[50%] bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url('${e.backgroundUrl}')`
                                    }}></div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-[16px] font-bold mr-2">{e.fullname}</div>
                                <div className="flex items-center">
                                    {
                                        Array.from({ length: 5 }, () => (
                                            <div className="mx-[2px]" key={e.id}>
                                                <svg
                                                    width="18px"
                                                    height="18px"
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
                                                            fill="#FF9900"
                                                        />{" "}
                                                    </g>
                                                </svg>

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex items-center text-[#F07202] text-[12px]">
                                {e.minPrice.toLocaleString('vi-VN')} - {e.maxPrice.toLocaleString('vi-VN')} VND
                            </div>
                            <div className="text-[14px] text-[#545353]">
                                <p><strong>Kinh nghiệm: </strong> {e.experience}</p>
                                <p><strong>Concept nổi bật: </strong> {e.topConcept}</p>
                                <strong>Dịch vụ đáp ứng: </strong>
                                <ul>
                                    {
                                        e.services.map((title, index) => (
                                            <li key={`${index}-${title}`}>{title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
