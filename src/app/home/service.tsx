'use client';
import Image from 'next/image';
import React from 'react';

export default function Service({ iconSrc, title, description }) {
	return (
		<div className='relative w-full bg-white rounded-[20px] px-5 shadow-sm'>
			<div className='absolute top-[-40px] flex justify-center w-full left-0'>
				<div className='w-[80px] h-[80px] rounded-full flex justify-center items-center shadow-md bg-white'>
					<Image src={iconSrc} alt={title} width={36} height={36} />
				</div>
			</div>
			<div className='pt-[70px] pb-[30px]'>
				<div className='text-[#6B716E] font-bold text-center text-[16px] mb-3'>{title}</div>
				<div className='text-[12px] text-center text-[#6B716E] leading-relaxed'>{description}</div>
			</div>
		</div>
	);
}
