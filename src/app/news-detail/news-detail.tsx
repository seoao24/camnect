import Image from 'next/image'
import React, { ReactNode } from 'react'

interface NewsDetailProps {
    title: string,
    postedAt: string,
    content: ReactNode,
    author: string
}
export default function NewsDetail(props: NewsDetailProps) {
    return (
        <div className="flex shadow-lg px-10">
            <div className='py-10'>
                <div className="text-[#F07202] md:text-[36px] font-bold text-[20px]">{props.title}</div>
                <div className='flex items-center text-[#BBB9B9]'>
                    <div className="w-[18px] h-[18px] relative">
                        <Image src="/assets/images/clock-icon.png" alt='clock' fill />
                    </div>
                    <div className='ml-2'>{props.postedAt}</div>
                </div>
                <div>
                    <div className='text-black md:text-[20px] text-[14px]'>{props.content}</div>
                    <div className='text-[16px] text-[#F07202] text-end italic'>Tác giả: {props.author}</div>
                </div>
            </div>
        </div>
    )
}
