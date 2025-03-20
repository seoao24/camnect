'use client';
import Image from 'next/image';
import React from 'react';

interface HintNewsProps {
	id: string;
	imageUrl: string;
	title: string;
	postedAt: string;
	author: string;
}
export default function HintNews(props: HintNewsProps) {
	return (
		<div className='flex my-2'>
			<div
				className={`w-[104px] h-[62px] bg-cover bg-no-repeat bg-center bg-[#D9D9D9]`}
				style={{
					backgroundImage: `url('https://api.tapta.online/${props.imageUrl}')`,
				}}
			></div>
			<div className='px-3 flex flex-col justify-between'>
				<div className='font-bold text-[11px] truncate md:max-w-[200px]'>{props.title}</div>
				<hr className='w-[70px] h-[1.5px] bg-[#BBB9B9]' />
				<div className='flex text-[10px] text-[#6B716E]'>
					<div className='w-[11px] h-[11px] relative'>
						<Image src='/assets/images/clock-icon.png' alt='clock' fill />
					</div>
					<div className='ml-2'>{props.postedAt}</div>
				</div>
				<div className='text-[10px] text-[#6B716E]'>Bởi: {props.author}</div>
			</div>
		</div>
	);
}
