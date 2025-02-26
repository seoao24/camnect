'use client';
import React, { useState } from 'react'
import PhotographerSlide from './photographer-slide';

export default function SearchPhotographer() {
    const [typeSort, setTypeSort] = useState(0);
    return (
        <div className='w-full'>
            <div className="px-10">
                <div className="text-[22px] font-bold bg-gradient-to-r from-[#FFB16B] to-[#DF7313] text-transparent bg-clip-text w-[330px] text-center">TÌM KIẾM NHIẾP ẢNH GIA</div>
                <div className="text-[12px] text-[#6B716E]">Camnect cung cấp công cụ tìm kiếm thông minh, cho phép khách hàng lọc nhiếp ảnh gia theo loại hình chụp ảnh, phong cách, địa điểm, và mức giá.</div>
                <div className="flex justify-end items-center">
                    <div className={`rounded-[20px] border-[1px] border-[#F07202] uppercase w-[120px] text-center px-3 py-1 mx-2 ${typeSort == 0 ? 'bg-[#F07202] text-white' : 'text-[#F07202]'}`}
                        onClick={() => setTypeSort(0)}>
                        Gần nhất
                    </div>
                    <div className={`rounded-[20px] border-[1px] border-[#F07202] uppercase w-[120px] text-center px-3 py-1 ${typeSort == 1 ? 'bg-[#F07202] text-white' : 'text-[#F07202]'}`}
                        onClick={() => setTypeSort(1)}>
                        Giá
                    </div>
                </div>
                <div>
                    <PhotographerSlide />
                </div>
            </div>
        </div>
    )
}
