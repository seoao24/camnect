import Image from 'next/image'
import React from 'react'

interface CardFeedbackProps {
    imageUrl: string,
    content: string,
    fullname: string,
    rate: number
}
export default function CardFeedback(props: CardFeedbackProps) {
    return (
        <div className='card rounded-[20px] flex bg-[#F1F1F1]'>
            <div className='w-[250px] h-full rounded-tl-[20px] rounded-bl-[20px] relative'>
                <Image src={props.imageUrl} alt='feedback1' fill className='w-full'/>
            </div>
            <div className='px-5 py-5'>
                <div className='text-[17px] text-[#6E6E6E]'>{props.content}</div>
                <div className='text-[#F07202] text-[20px] font-bold'>{props.fullname}</div>

            </div>
        </div>
    )
}
