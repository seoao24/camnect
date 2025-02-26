import React from 'react'

interface NewsCardProps {
    imageUrl: string,
    title: string,
    lastPost: string
}
export default function NewsCard(props: NewsCardProps) {
    return (
        <div>
            <div className="rouned-[20px] md:w-full md:h-[200px] bg-cover bg-no-repeat w-[128px] h-[79px]"
                style={{
                    backgroundImage: `url('${props.imageUrl}')`
                }}></div>
            <div className="md:text-[20px] font-bold mt-5 text-[12px]">{props.title}</div>
            <div className="flex items-center text-[#6B716E]">
                <div className="w-[20px] h-[20px] bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/images/clock-icon.png')"
                    }}></div>
                <div className='ml-2'>{props.lastPost}</div>
            </div>
        </div>
    )
}
