'use client';
import CustomButton from '@/components/buttons/CustomButton'
import React from 'react'

interface RelativeCardNewsProps {
    imageUrl: string,
    title: string,
    views: number,
    link: string
}
export default function RelativeCardNews(props: RelativeCardNewsProps) {
    return (
        <div className='card shadow-lg rounded-[10px]'>
            <div className="w-full h-[264px] bg-cover bg-no-repeat relative"
                style={{
                    backgroundImage: `url('${props.imageUrl}')`
                }}>
                    <div className='w-[72px] h-[72px] rounded-[50%] bg-white absolute bottom-[-20px] right-[3rem] flex justify-center items-center'>
                        <div className="w-[60px] h-[60px] rounded-[50%] bg-[#FFBE27] flex justify-center items-center">
                            <div className='text-[20px] font-bold text-white'>{props.views}</div>
                        </div>
                    </div>
                </div>
            <div className="px-5 mt-10">
                <div className='text-[24px] text-[#6B716E] font-bold'>{props.title}</div>
                <div className="py-5">
                    <CustomButton
                        onClick={() => { }}
                        title='Xem thêm'
                    />
                </div>
            </div>
        </div>
    )
}
