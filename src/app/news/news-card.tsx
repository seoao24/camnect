import React from 'react'

interface NewsCardProps {
    imageUrl: string,
    title: string,
    lastPost: string
}
export default function NewsCard(props: NewsCardProps) {
    return (
        <div>
            <div className="rouned-[20px] w-full h-[200px] bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('${props.imageUrl}')`
                }}></div>
            <div className="text-[20px] font-bold mt-5">{props.title}</div>
            <div className="flex items-center text-[#6B716E]">
                <div className="w-[20px] h-[20px] bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/images/clock-icon.png')"
                    }}></div>
                <div>{props.lastPost}</div>
            </div>
        </div>
    )
}
