import React from 'react'
import Input from './input'

export default function Search() {
    return (
        <div className='w-full flex justify-between py-5 px-3 bg-cover bg-no-repeat' style={{
            backgroundImage: `url('/assets/images/service-search-bg.png')`
        }}>
            <Input
                icon='/assets/images/service-search.png'
                placeholder='Nhập tên dịch vụ hoặc nhiếp ảnh gia'
                value=''
                classes='w-[420px]'
            />
            <Input
                icon='/assets/images/service-calendar.png'
                placeholder='Ngày sử dụng dịch vụ'
                value=''
                classes='w-[280px]'
            />
            <Input
                icon='/assets/images/service-clock.png'
                placeholder='Thời gian'
                value=''
                classes='w-[164px]'
            />
            <Input
                icon='/assets/images/service-person.png'
                placeholder='Số lượng'
                value=''
                classes='w-[164px]'
            />
            <button className='px-6 py-2 bg-[#F07202] rounded-[5px] uppercase font-bold text-[20px] text-white'>
                Tìm
            </button>
        </div>
    )
}
