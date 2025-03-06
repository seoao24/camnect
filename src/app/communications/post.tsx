'use client';
import React from 'react'

interface PostProps {
    avatarUrl: string,
    fullname: string,
    status: string,
    lastPost: string,
    description: string,
    imageUrls: string[]
}
export default function Post(props: PostProps) {
    return (
        <div className='card shadow-lg py-5 md:px-10 px-5 my-5 rounded-[20px] w-full'>
            <div className="flex items-center">
                <div className="w-[67px] h-[67px] bg-no-repeat bg-cover rounded-[50%]"
                    style={{
                        backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${props.avatarUrl}')`
                    }}></div>
                <div className='px-3'>
                    <div className="font-bold text-[16px]">{props.fullname}</div>
                    <div className="flex items-center">
                        <div className="px-2 py-1 text-[#CCAA8C] border-[1px] border-[#CCAA8C] rounded-[5px] text-[12px]">
                            {props.status}
                        </div>
                        <div className="px-2 py-1 text-[#B3B3B3] border-[1px] border-[#B3B3B3] rounded-[5px] mx-3 text-[12px]">
                            {props.lastPost}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3 text-[14px]">
                {props.description}
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    props.imageUrls.map((url, index) => {
                        return (
                            <div key={"image" + index} className="rounded-[10px] bg-cover bg-no-repeat w-full md:h-[500px] h-[152px]"
                                style={{
                                    backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${url}')`
                                }}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
