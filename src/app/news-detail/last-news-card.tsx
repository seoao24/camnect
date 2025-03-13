'use client';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface LastNewsCardProps {
    id: string,
    imageUrl: string,
    title: string,
    content: ReactNode
}
export default function LastNewsCard(props: LastNewsCardProps) {
    return (
        <Link
            href={'/news-detail?id=' + props.id}
            className='flex my-3'>
            <div className='w-[400px] h-[230px] bg-cover bg-no-repeat bg-center bg-[#D9D9D9]'
                style={{
                    backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${props.imageUrl}')`
                }}>

            </div>
            <div className="text-black px-5">
                <div className="md:text-[24px] text-[14px] font-bold truncate md:max-w-[600px]">{props.title}</div>
                <div className='md:text-[20px] text-[12px] font-[500] truncate md:max-w-[800px] overflow-hidden line-clamp-4'>{props.content}</div>
            </div>
        </Link>
    )
}
