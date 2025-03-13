'use client';
import Link from 'next/link';
import React from 'react'

interface NewsCardProps {
    id: string,
    imageUrl: string,
    title: string,
    lastPost: string
}
export default function NewsCard(props: NewsCardProps) {
    return (
        <Link
            href={'/news-detail?id=' + props.id}>
            <div className="rouned-[20px] md:w-[295px] md:h-[184px] bg-[#D9D9D9] bg-cover bg-no-repeat bg-center w-[128px] h-[79px]"
                style={{
                    backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${props.imageUrl}')`
                }}></div>
            <div className="md:text-[20px] font-bold mt-5 text-[12px] truncate">{props.title}</div>
            <div className="flex items-center text-[#6B716E]">
                <div className="w-[20px] h-[20px] bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/images/clock-icon.png')"
                    }}></div>
                <div className='ml-2'>{props.lastPost}</div>
            </div>
        </Link>
    )
}
