import Image from 'next/image'
import React, { ReactNode } from 'react'

interface TextCollapseProps {
    title: string,
    description: string,
    isOpen: boolean
}
export default function TextCollapse(props: TextCollapseProps) {
    return (
        <div className={`px-10 my-5 py-10 rounded-[30px] flex justify-between items-center ${props.isOpen ? 'bg-[#F07202] text-white' : 'bg-[#EBEBEB] text-[#6E6E6E]'}`}>
            <div className="pr-[5rem]">
                <div className='font-bold text-[22px]'>{props.title}</div>
                <div className='text-[18px]'>{props.description}</div>
            </div>
            <div className="w-[50px] h-[50px] relative mx-5">
                {props.isOpen ? (
                    <Image src="/assets/images/close-icon.png" alt='close' fill />
                ) : (
                    <Image src="/assets/images/open-icon.png" alt='close' fill />
                )}
            </div>
        </div>
    )
}
