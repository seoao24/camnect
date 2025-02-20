import React from 'react'
import HintNews from '../news-detail/hint-news'

export default function LastNews() {
    return (
        <div className='shadow-lg rounded-[10px] px-4 py-4'>
            <div className="w-full my-3">
                <div className="flex py-2">
                    <div className="w-[30px] h-[30px] bg-cover bg-bo-repeat"
                        style={{
                            backgroundImage: "url('/assets/images/organe-clock.png')"
                        }}></div>
                    <div className="text-[#F07202] text-[20px] font-bold ml-2">BÀI ĐĂNG MỚI NHẤT</div>
                </div>
                <div className="bg-none bg-no-repeat w-full h-[2px]" style={{
                    backgroundImage: `url('/assets/images/news-line2.png')`
                }}></div>
            </div>
            <div>
                <HintNews
                    title='Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và thanh lịch!'
                    postedAt='11/01/2025'
                    author='Tam Nguyen'
                    imageUrl='/assets/images/last-news11.png'
                />
                <HintNews
                    title='Chụp hình Tết 2025 siêu đáng yêu, bạn đã từng trải nghiệm chưa?'
                    postedAt='11/01/2025'
                    author='Tuan Anh Tran'
                    imageUrl='/assets/images/last-news21.png'
                />
                <HintNews
                    title='Trải nghiệm concept chụp ảnh đơn giản nhưng vô cùng hút mắt ngay bây giờ!'
                    postedAt='11/01/2025'
                    author='Lili Nguyen'
                    imageUrl='/assets/images/last-news31.png'
                />
                <HintNews
                    title='Cùng tạo nên concept độc đáo có 102 trong dịp sinh nhật sắp tới nào!'
                    postedAt='11/01/2025'
                    author='Nhat Anh'
                    imageUrl='/assets/images/last-news41.png'
                />
            </div>
        </div>
    )
}
