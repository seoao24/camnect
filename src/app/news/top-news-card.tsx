import React from 'react'

interface TopNewsCardProps {
    imageUrl: string,
    title: string,
    postAt: string,
    content: string
}
export default function TopNewsCard(props: TopNewsCardProps) {
    return (
        <div className=''>
            <div className="bg-cover bg-no-repeat md:h-[200px] md:w-full w-[120px] h-[92px]"
                style={{
                    backgroundImage: `url('${props.imageUrl}')`
                }}></div>
            <div className="mt-3 text-[11px] font-bold">{props.title}</div>
            <hr className='w-[70px] h-[1px] bg-[#BBB9B9] mb-3 mt-1'/>
            <div className="border-t-[1px[ border-[#BBB9B9] flex">
                <div className="w-[12px] h-[12px] bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/images/clock-icon.png')"
                    }}></div>
                <div className="mx-1 text-[10px] text-[#BBB9B9]">{props.postAt}</div>
            </div>
            <div className="text-[11px]">
                {props.content}
            </div>
        </div>
    )
}
