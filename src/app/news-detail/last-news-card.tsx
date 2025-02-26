import React, { ReactNode } from 'react'

interface LastNewsCardProps {
    imageUrl: string,
    title: string,
    content: ReactNode
}
export default function LastNewsCard(props: LastNewsCardProps) {
    return (
        <div className='flex my-3'>
            <div className='w-[400px] h-[230px] bg-cover bg-no-repeat bg-center'
                style={{
                    backgroundImage: `url('${props.imageUrl}')`
                }}>

            </div>
            <div className="text-black px-5">
                <div className="md:text-[24px] text-[14px] font-bold">{props.title}</div>
                <div className='md:text-[20px] text-[12px] font-[500]'>{props.content}</div>
            </div>
        </div>
    )
}
