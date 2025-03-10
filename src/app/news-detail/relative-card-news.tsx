'use client';
import Link from 'next/link';
import React from 'react'

interface RelativeCardNewsProps {
    id: string,
    imageUrl: string,
    title: string,
    views: number
}
export default function RelativeCardNews(props: RelativeCardNewsProps) {
    return (
        <div className='card shadow-lg rounded-[10px]'>
            <div className="w-full h-[264px] bg-cover bg-no-repeat relative"
                style={{
                    backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${props.imageUrl}')`
                }}>
                <div className='w-[72px] h-[72px] rounded-[50%] bg-white absolute bottom-[-20px] right-[3rem] flex justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-[50%] bg-[#FFBE27] flex justify-center items-center">
                        <div className='text-[20px] font-bold text-white'>{props.views}</div>
                    </div>
                </div>
            </div>
            <div className="px-5 mt-10">
                <div className='text-[24px] text-[#6B716E] font-bold truncate'>{props.title}</div>
                <div className="py-5">
                    <Link
                        href={'/news-detail?id=' + props.id}
                        className='bg-[#FFBE27] px-[2rem] text-[#F07202] rounded-[5px] py-[10px] text-[16px] font-bold text-white opacity-[1]'>
                        Xem thêm
                    </Link>
                </div>
            </div>
        </div>
    )
}
