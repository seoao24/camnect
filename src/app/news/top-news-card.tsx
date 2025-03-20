'use client';
import Link from 'next/link';
import React from 'react';

interface TopNewsCardProps {
	id: string;
	imageUrl: string;
	title: string;
	postAt: string;
	content: string;
}
export default function TopNewsCard(props: TopNewsCardProps) {
	return (
		<Link href={`/news-detail?id=` + props.id} className=''>
			<div
				className='bg-cover bg-[#D9D9D9] bg-center bg-no-repeat md:h-[200px] md:w-full w-[120px] h-[92px]'
				style={{
					backgroundImage: `${
						props.imageUrl
							? `url('https://api.tapta.online/${props.imageUrl}')`
							: `url('/assets/images/defaut-image.jpg')`
					}`,
				}}
			></div>
			<div className='mt-3 text-[11px] font-bold truncate'>{props.title}</div>
			<hr className='w-[70px] h-[1px] bg-[#BBB9B9] mb-3 mt-1' />
			<div className='border-t-[1px[ border-[#BBB9B9] flex'>
				<div
					className='w-[12px] h-[12px] bg-cover bg-no-repeat'
					style={{
						backgroundImage: "url('/assets/images/clock-icon.png')",
					}}
				></div>
				<div className='mx-1 text-[10px] text-[#BBB9B9]'>{props.postAt}</div>
			</div>
			<div
				className='text-[11px] truncate w-full overflow-hidden h-[60px] line-clamp-3'
				dangerouslySetInnerHTML={{ __html: props.content }}
			></div>
		</Link>
	);
}
