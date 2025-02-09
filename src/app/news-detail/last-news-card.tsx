import React, { ReactNode } from 'react'

interface LastNewsCardProps {
    imageUrl: string,
    title: string,
    content: ReactNode
}
export default function LastNewsCard(props: LastNewsCardProps) {
    return (
        <div className='flex my-3'>
            <div className='w-[400px] h-[230px] bg-cover bg-no-repeat'
                style={{
                    backgroundImage: `url('${props.imageUrl}')`
                }}>

            </div>
            <div className="text-black px-5">
                <div className="text-[24px] font-bold">{props.title}</div>
                <div className='text-[20px] font-[500]'>{props.content}</div>
            </div>
        </div>
    )
}
