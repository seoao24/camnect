'use client';
import React from 'react';
import Slider from "react-slick";

export default function ServiceSlide() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    rows: 1,
    speed: 500
  };
  return (
    <div className="slider-container my-5 service-item-home">
      <Slider {...settings}>
        {
          itemContents.map(e => (
            <div className=' rounded-[20px] shadow-md px-2 py-4' key={e.id}>
              <div className="text-[16px] font-bold text-center">{e.title}</div>
              <div className="text-[12px] text-center my-2">{e.content}</div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

const itemContents = [
  {
    id: "slide-1",
    title: "Chụp Ảnh Chân Dung & Cá Nhân",
    content: "Hướng dẫn tạo dáng tự nhiên, phù hợp với cá tính riêng của mỗi người. Đặc biệt, quá trình xử lý hậu kỳ chuyên sâu sẽ làm nổi bật thần thái và vẻ đẹp độc đáo, mang đến những bức ảnh hoàn hảo nhất."
  },
  {
    id: "slide-2",
    title: "Chụp Ảnh Chân Dung & Cá Nhân",
    content: "Hướng dẫn tạo dáng tự nhiên, phù hợp với cá tính riêng của mỗi người. Đặc biệt, quá trình xử lý hậu kỳ chuyên sâu sẽ làm nổi bật thần thái và vẻ đẹp độc đáo, mang đến những bức ảnh hoàn hảo nhất."
  },
  {
    id: "slide-3",
    title: "Chụp Ảnh Chân Dung & Cá Nhân",
    content: "Hướng dẫn tạo dáng tự nhiên, phù hợp với cá tính riêng của mỗi người. Đặc biệt, quá trình xử lý hậu kỳ chuyên sâu sẽ làm nổi bật thần thái và vẻ đẹp độc đáo, mang đến những bức ảnh hoàn hảo nhất."
  },
  {
    id: "slide-4",
    title: "Chụp Ảnh Chân Dung & Cá Nhân",
    content: "Hướng dẫn tạo dáng tự nhiên, phù hợp với cá tính riêng của mỗi người. Đặc biệt, quá trình xử lý hậu kỳ chuyên sâu sẽ làm nổi bật thần thái và vẻ đẹp độc đáo, mang đến những bức ảnh hoàn hảo nhất."
  }
]