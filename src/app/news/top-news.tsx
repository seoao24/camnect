import React from 'react'
import TopNewsCard from './top-news-card'

export default function TopNews() {
    return (
        <div className='rounded-[10px] shadow-lg px-4 py-4'>
            <div className="w-full my-5">
                <div className="flex items-center py-2">
                    <div className="w-[30px] h-[30px]"
                        style={{
                            backgroundImage: "url('/assets/images/star.png')"
                        }}></div>
                    <div className="text-[20px] text-[#F07202] font-bold h-full">BÀI VIẾT NỔI BẬT</div>
                </div>
                <div className="bg-none bg-no-repeat w-full h-[2px]" style={{
                    backgroundImage: `url('/assets/images/top-news-line.png')`
                }}>

                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
                <TopNewsCard
                    content='- Bạn đã bao giờ chìm đắm trong những khoảng khắc lắng đọng...'
                    postAt='06/01/2025'
                    title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
                    imageUrl='/assets/images/top-news-1.png'
                />
                <TopNewsCard
                    content='- Bạn đã bao giờ chìm đắm trong những khoảng khắc lắng đọng...'
                    postAt='06/01/2025'
                    title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
                    imageUrl='/assets/images/top-news-2.png'
                />
                <TopNewsCard
                    content='- Bạn đã bao giờ chìm đắm trong những khoảng khắc lắng đọng...'
                    postAt='06/01/2025'
                    title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
                    imageUrl='/assets/images/top-news-3.png'
                />
            </div>
        </div>
    )
}
