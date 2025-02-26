'use client';
import React from 'react'
import Slider from 'react-slick';

const itemSlides = [
    {
        id: "slide-1",
        background: "/assets/images/mobile-reason1.png",
        title: "Kết nối nhanh chóng",
        content: "Khách hàng có thể tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh một cách dễ dàng. Không còn phải loay hoay tìm nhiếp ảnh gia phù hợp, Camnect giúp bạn tiết kiệm thời gian và công sức, mang lại sự thuận tiện tối đa."
    },
    {
        id: "slide-2",
        background: "/assets/images/mobile-reason2.png",
        title: "Chất lượng đảm bảo",
        content: "Camnect không chỉ kết nối nhanh chóng mà còn cam kết mang lại dịch vụ chất lượng hàng đầu. Với hệ thống đánh giá minh bạch, khách hàng có thể yên tâm hoàn toàn về sự chuyên nghiệp và đáng tin cậy của dịch vụ."
    },
    {
        id: "slide-3",
        background: "/assets/images/mobile-reason1.png",
        title: "Kết nối nhanh chóng",
        content: "Khách hàng có thể tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh một cách dễ dàng. Không còn phải loay hoay tìm nhiếp ảnh gia phù hợp, Camnect giúp bạn tiết kiệm thời gian và công sức, mang lại sự thuận tiện tối đa."
    },
    {
        id: "slide-4",
        background: "/assets/images/mobile-reason2.png",
        title: "Chất lượng đảm bảo",
        content: "Camnect không chỉ kết nối nhanh chóng mà còn cam kết mang lại dịch vụ chất lượng hàng đầu. Với hệ thống đánh giá minh bạch, khách hàng có thể yên tâm hoàn toàn về sự chuyên nghiệp và đáng tin cậy của dịch vụ."
    }
]
export default function ReasonSlide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const getNumber = (index: number) => {
        var text = "";
        if (index > 9) text = index + "";
        else {
            text = "0" + index;
        }
        return text;
    }
    return (
        <div className='className="slider-container reason-slide'>
            <Slider {...settings}>
                {
                    itemSlides.map((e, index) => (
                        <div key={e.id}>
                            <div className='w-[226px] h-[310px] bg-cover bg-no-repeat shadow-md text-white px-3 py-5 relative' style={{
                                backgroundImage: `url('${e.background}')`
                            }}>
                                <div className='text-[16px] font-[600]'>{e.title}</div>
                                <div className="text-[14px]">{e.content}</div>
                                <div className="absolute text-[90px] font-bold bottom-[-30px] right-0">
                                    {getNumber(index+1)}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
