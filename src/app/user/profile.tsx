
'use client';
import React, { useState } from 'react'

interface ProfileItem {
    id: string,
    title: string,
    icon: string
}
const profileMenus: ProfileItem[] = [
    {
        id: "1",
        title: "Tổng quan",
        icon: '/assets/images/profile-icon1.png'
    },
    {
        id: "2",
        title: "Thông tin liên hệ cơ bản",
        icon: '/assets/images/profile-icon2.png'
    },
    {
        id: "3",
        title: "Sự kiện nổi bật",
        icon: '/assets/images/profile-icon3.png'
    },
    {
        id: "4",
        title: "Chi tiết về bạn",
        icon: '/assets/images/profile-icon4.png'
    }
]
export default function ProfileFeature() {
    const [selectedMenu, setSelectedMenu] = useState(profileMenus[0].id);
    return (
        <div className='py-4'>
            <div className="flex px-4">
                <div className="w-[93px] h-[93px] bg-cover bg-no-repeat rounded-[50%]"
                    style={{
                        backgroundImage: `url('/assets/images/avatar.png')`
                    }}>
                </div>
                <div className="flex items-center ml-4">
                    <div>
                        <div className="text-[20px] font-bold">Lyn Nguyen</div>
                        <div className="text-[20px] font-[200] text-[#6B716E]">978 người theo dõi</div>
                    </div>
                </div>
            </div>
            <div className="md:flex mt-4">
                <div className="w-[400px] shadow-lg">
                    {
                        profileMenus.map(e => (
                            <div key={e.id} className='flex items-center p-4 border-b-[1px] border-b-[#D9D9D9] cursor-pointer'
                                onClick={() => setSelectedMenu(e.id)}>
                                <div className="w-[40px] h-[40px] bg-cover bg-no-repeat"
                                    style={{
                                        backgroundImage: `url('${e.icon}')`
                                    }}></div>
                                <div className={`text-[20px] ml-5 ${selectedMenu == e.id ? 'font-bold' : ''}`}>{e.title}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full shadow-lg md:px-10 md:ml-4 px-5 md:mt-0 mt-5">
                    <div className="flex justify-between my-2">
                        <div className='flex'>
                            <div className="md:w-[52px] md:h-[56px] w-[24px] h-[26px] bg-cover bg-no-repeat"
                                style={{
                                    backgroundImage: `url('/assets/images/common-icon1.png')`
                                }}></div>
                            <div className="md:text-[20px] text-[14px] mt-1 ml-5 text-[#6B716E]">Sống tại: <strong>Hà Nội</strong></div>
                        </div>
                        <div className="flex items-center">
                            <div className="md:w-[17px] md:h-[22px] w-[13px] h-[17px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/lock-icon.png')`
                                }}></div>
                            <div className="w-[18px] h-[18px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/more-icon.png')`
                                }}></div>
                        </div>
                    </div>
                    <div className="flex justify-between my-2">
                        <div className='flex'>
                            <div className="md:w-[52px] md:h-[56px] w-[24px] h-[26px] bg-cover bg-no-repeat"
                                style={{
                                    backgroundImage: `url('/assets/images/common-icon2.png')`
                                }}></div>
                            <div className="md:text-[20px] text-[14px]  mt-1 ml-5 text-[#6B716E]">Từng học tại: <strong>Trường Đại học Mỹ Thuật Công Nghiệp</strong></div>
                        </div>
                        <div className="flex items-center">
                            <div className="md:w-[17px] md:h-[22px] w-[13px] h-[17px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/lock-icon.png')`
                                }}></div>
                            <div className="w-[18px] h-[18px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/more-icon.png')`
                                }}></div>
                        </div>
                    </div>
                    <div className="flex justify-between my-2">
                        <div className='flex'>
                            <div className="md:w-[52px] md:h-[56px] w-[24px] h-[26px] bg-cover bg-no-repeat"
                                style={{
                                    backgroundImage: `url('/assets/images/common-icon3.png')`
                                }}></div>
                            <div className="md:text-[20px] text-[14px]  mt-1 ml-5 text-[#6B716E]">Email: <span className='italic'>đã ẩn</span></div>
                        </div>
                        <div className="flex items-center">
                            <div className="md:w-[17px] md:h-[22px] w-[13px] h-[17px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/lock-icon.png')`
                                }}></div>
                            <div className="w-[18px] h-[18px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/more-icon.png')`
                                }}></div>
                        </div>
                    </div>
                    <div className="flex justify-between my-2">
                        <div className='flex'>
                            <div className="md:w-[52px] md:h-[56px] w-[24px] h-[26px] bg-cover bg-no-repeat"
                                style={{
                                    backgroundImage: `url('/assets/images/common-icon4.png')`
                                }}></div>
                            <div className="md:text-[20px] text-[14px]  mt-1 ml-5 text-[#6B716E]">Số điện thoại: <span className='italic'>đã ẩn</span></div>
                        </div>
                        <div className="flex items-center">
                            <div className="md:w-[17px] md:h-[22px] w-[13px] h-[17px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/lock-icon.png')`
                                }}></div>
                            <div className="w-[18px] h-[18px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/more-icon.png')`
                                }}></div>
                        </div>
                    </div>
                    <div className="flex justify-between my-2">
                        <div className='flex'>
                            <div className="md:w-[52px] md:h-[56px] w-[24px] h-[26px] bg-cover bg-no-repeat"
                                style={{
                                    backgroundImage: `url('/assets/images/common-icon5.png')`
                                }}></div>
                            <div className="md:text-[20px] text-[14px]  mt-1 ml-5 text-[#6B716E]">Tình trạng quan hệ: <strong>Độc thân</strong></div>
                        </div>
                        <div className="flex items-center">
                            <div className="md:w-[17px] md:h-[22px] w-[13px] h-[17px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/lock-icon.png')`
                                }}></div>
                            <div className="w-[18px] h-[18px] bg-cover bg-no-repeat mx-1 cursor-pointer"
                                style={{
                                    backgroundImage: `url('/assets/images/more-icon.png')`
                                }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
