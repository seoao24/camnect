'use client';
import React, { useEffect, useState } from 'react';
import HintNews from '../news-detail/hint-news';
import axiosInstance from '@/api/apiBase';

export interface News {
	id: string;
	title: string;
	imageUrl?: string;
	content: string;
	postedAt?: string;
	author?: string;
}
export default function LastNews() {
	const [news, setNews] = useState<News[]>([]);
	const getNews = async () => {
		try {
			const params = {
				total: 4,
			};
			const response = await axiosInstance.get('/Blog/Search', {
				params: params,
			});
			setNews(response.data);
		} catch {}
	};

	useEffect(() => {
		getNews();
	}, []);
	return (
		<div className='shadow-lg rounded-[10px] px-4 py-4'>
			<div className='w-full my-3'>
				<div className='flex py-2'>
					<div
						className='w-[30px] h-[30px] bg-cover bg-bo-repeat'
						style={{
							backgroundImage: "url('/assets/images/organe-clock.png')",
						}}
					></div>
					<div className='text-[#F07202] text-[20px] font-bold ml-2'>BÀI ĐĂNG MỚI NHẤT</div>
				</div>
				<div
					className='bg-none bg-no-repeat w-full h-[2px]'
					style={{
						backgroundImage: `url('/assets/images/news-line2.png')`,
					}}
				></div>
			</div>
			<div>
				{news.map((e) => (
					<div key={e.id}>
						<HintNews
							id={e.id}
							title={e.title}
							postedAt={e.postedAt}
							author={e.author}
							imageUrl={`https://api.tapta.online/${e.imageUrl}`}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
