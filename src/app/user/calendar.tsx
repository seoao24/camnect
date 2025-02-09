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
export default function CalendarFeature() {
    const [selectedMenu, setSelectedMenu] = useState(profileMenus[0].id);
    return (
        <div className='py-4'>
            <div className="flex justify-between">
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
                <div className="flex">
                    <div className="border-[2px] border-[#D9D9D9] relative w-[264px] h-[94px] py-4 px-5">
                        <div className="absolute w-[22px] h-[20px] bg-cover bg-no-repeat top-4 right-4"
                            style={{
                                backgroundImage: `url('/assets/images/calendar-icon1.png')`
                            }}></div>
                        <div className="text-[20px] text-[#6B716E] font-bold">24</div>
                        <div className="text-[20px] text-[#8E8B8B]">Lượt đăng ký</div>
                    </div>
                    <div className="border-[2px] border-[#D9D9D9] relative w-[264px] h-[94px] py-4 px-5 mx-2">
                        <div className="absolute w-[23px] h-[23px] bg-cover bg-no-repeat top-4 right-4"
                            style={{
                                backgroundImage: `url('/assets/images/calendar-icon2.png')`
                            }}></div>
                        <div className="text-[20px] text-[#6B716E] font-bold">16</div>
                        <div className="text-[20px] text-[#8E8B8B]">Lượt chụp xong</div>
                    </div>
                    <div className="border-[2px] border-[#D9D9D9] relative w-[264px] h-[94px] py-4 px-5">
                        <div className="absolute w-[22px] h-[22px] bg-cover bg-no-repeat top-4 right-4"
                            style={{
                                backgroundImage: `url('/assets/images/calendar-icon3.png')`
                            }}></div>
                        <div className="text-[20px] text-[#6B716E] font-bold">2</div>
                        <div className="text-[20px] text-[#8E8B8B]">Đang chờ chụp</div>
                    </div>
                </div>
            </div>
            <div className="flex mt-4">
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
                <div className="w-full shadow-lg px-10 ml-4">
                    <table className='w-full text-[#6B716E] text-[20px]'>
                        <thead className='border-b-[1px] border-[#D9D9D9]'>
                            <tr className='leading-[60px]'>
                                <th>#</th>
                                <th>Nội dung</th>
                                <th>Ngày đặt</th>
                                <th>Trạng thái</th>
                                <th>Nhiếp ảnh gia</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className='text-[16px]'>
                            <tr className='items-center'>
                                <td className='w-[50px]'>1</td>
                                <td className='max-w-[140px]'>Chụp ảnh Tết phong cách nhẹ nhàng, vui tươi</td>
                                <td className='text-center'>24/02/2025</td>
                                <td className='text-center text-[#39934D]'>Hoàn thành</td>
                                <td className='flex justify-center items-center'>
                                    <div className="w-[50px] h-[50px] rounded-[50%] bg-cover bg-no-repeat"
                                        style={{
                                            backgroundImage: `url('/assets/images/avatar.png')`
                                        }}></div>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <div className="w-[25px] h-[25px] bg-cover bg-no-repeat"
                                            style={{
                                                backgroundImage: `url('/assets/images/calendar-edit-icon.png')`
                                            }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className='items-center'>
                                <td className='w-[50px]'>1</td>
                                <td className='max-w-[140px]'>Chụp ảnh Tết phong cách nhẹ nhàng, vui tươi</td>
                                <td className='text-center'>24/02/2025</td>
                                <td className='text-center text-[#39934D]'>Hoàn thành</td>
                                <td className='flex justify-center items-center'>
                                    <div className="w-[50px] h-[50px] rounded-[50%] bg-cover bg-no-repeat"
                                        style={{
                                            backgroundImage: `url('/assets/images/avatar.png')`
                                        }}></div>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <div className="w-[25px] h-[25px] bg-cover bg-no-repeat"
                                            style={{
                                                backgroundImage: `url('/assets/images/calendar-edit-icon.png')`
                                            }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className='items-center'>
                                <td className='w-[50px]'>1</td>
                                <td className='max-w-[140px]'>Chụp ảnh Tết phong cách nhẹ nhàng, vui tươi</td>
                                <td className='text-center'>24/02/2025</td>
                                <td className='text-center text-[#39934D]'>Hoàn thành</td>
                                <td className='flex justify-center items-center'>
                                    <div className="w-[50px] h-[50px] rounded-[50%] bg-cover bg-no-repeat"
                                        style={{
                                            backgroundImage: `url('/assets/images/avatar.png')`
                                        }}></div>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <div className="w-[25px] h-[25px] bg-cover bg-no-repeat"
                                            style={{
                                                backgroundImage: `url('/assets/images/calendar-edit-icon.png')`
                                            }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className='items-center'>
                                <td className='w-[50px]'>1</td>
                                <td className='max-w-[140px]'>Chụp ảnh Tết phong cách nhẹ nhàng, vui tươi</td>
                                <td className='text-center'>24/02/2025</td>
                                <td className='text-center text-[#39934D]'>Hoàn thành</td>
                                <td className='flex justify-center items-center'>
                                    <div className="w-[50px] h-[50px] rounded-[50%] bg-cover bg-no-repeat"
                                        style={{
                                            backgroundImage: `url('/assets/images/avatar.png')`
                                        }}></div>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <div className="w-[25px] h-[25px] bg-cover bg-no-repeat"
                                            style={{
                                                backgroundImage: `url('/assets/images/calendar-edit-icon.png')`
                                            }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className='items-center'>
                                <td className='w-[50px]'>1</td>
                                <td className='max-w-[140px]'>Chụp ảnh Tết phong cách nhẹ nhàng, vui tươi</td>
                                <td className='text-center'>24/02/2025</td>
                                <td className='text-center text-[#39934D]'>Hoàn thành</td>
                                <td className='flex justify-center items-center'>
                                    <div className="w-[50px] h-[50px] rounded-[50%] bg-cover bg-no-repeat"
                                        style={{
                                            backgroundImage: `url('/assets/images/avatar.png')`
                                        }}></div>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <div className="w-[25px] h-[25px] bg-cover bg-no-repeat"
                                            style={{
                                                backgroundImage: `url('/assets/images/calendar-edit-icon.png')`
                                            }}></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
