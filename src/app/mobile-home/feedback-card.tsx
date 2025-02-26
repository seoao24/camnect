'use client';
import React from 'react'

interface FeedbackCardProps {
    imageUrl: string,
    content: string,
    fullname: string
}
export default function FeedbackCard(props: FeedbackCardProps) {
    return (
        <div className='rounded-[20px] bg-[#F1F1F1] text-[14px] text-[#6E6E6E] flex items-center justify-between my-3'>
            <div className="rounded-tl-[20px] rounded-bl-[20px] w-[400px] h-[152px] bg-cover bg-no-repeat bg-center" style={{
                 backgroundImage: `url('${props.imageUrl}')`
            }}></div>
            <div className="px-3">
                <div>{props.content}</div>
                <div className="text-[16px] font-bold text-[#F07202] ">{props.fullname}</div>
            </div>
        </div>
    )
}
