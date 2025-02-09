import React from 'react'

interface TopUserProps {
    top: number,
    fullname: string,
    avatarUrl: string,
    point: number
}
export default function TopUser(props: TopUserProps) {
    return (
        <div className='flex items-center my-5'>
            <div className="text-[20px] text-[#F07202] font-bold">{props.top}</div>
            <div className="w-[44px] h-[44px] rounded-[50%] mx-3 bg-contain"
            style={{
                backgroundImage: `url('${props.avatarUrl}')`
            }}></div>
            <div className='text-[14px]'>
                <div className="font-bold">{props.fullname}</div>
                <div>{props.point} điểm</div>
            </div>
        </div>
    )
}
