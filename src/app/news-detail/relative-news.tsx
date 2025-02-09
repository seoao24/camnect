import React from 'react'
import RelativeCardNews from './relative-card-news'

export default function RelativeNews() {
    return (
        <div>
            <div className='font-bold text-[36px]'>
                Các bài viết cùng chủ đề:
            </div>
            <div className="grid grid-cols-3 gap-4">
                <RelativeCardNews
                    imageUrl='/assets/images/relative6.png'
                    title='Chụp ảnh Tết cùng concept vô cùng độc lạ ngay hôm nay!'
                    views={12}
                    link=''
                />
                <RelativeCardNews
                    imageUrl='/assets/images/relative5.png'
                    title='Chụp ảnh Tết cùng concept vô cùng độc lạ ngay hôm nay!'
                    views={12}
                    link=''
                />
                <RelativeCardNews
                    imageUrl='/assets/images/relative4.png'
                    title='Chụp ảnh Tết cùng concept vô cùng độc lạ ngay hôm nay!'
                    views={12}
                    link=''
                />
                <RelativeCardNews
                    imageUrl='/assets/images/relative3.png'
                    title='Chụp ảnh Tết cùng concept vô cùng độc lạ ngay hôm nay!'
                    views={12}
                    link=''
                />
                <RelativeCardNews
                    imageUrl='/assets/images/relative2.png'
                    title='Chụp ảnh Tết cùng concept vô cùng độc lạ ngay hôm nay!'
                    views={12}
                    link=''
                />
                <RelativeCardNews
                    imageUrl='/assets/images/relative1.png'
                    title='Chụp ảnh Tết cùng concept vô cùng độc lạ ngay hôm nay!'
                    views={12}
                    link=''
                />
            </div>
        </div>
    )
}
