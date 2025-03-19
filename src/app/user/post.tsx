'use client';
import React, { useEffect, useState } from 'react';
import Post from '../communications/post';
import ContactForm from './contact';
import axiosInstance from '@/api/apiBase';

interface PostResponse {
	id: string;
	description: string;
	createdDateAgo: string;
	totalLike: number;
	totalComment: number;
	createdDate: string; // Hoặc Date nếu bạn muốn xử lý dạng Date trong JS
	imageUrls: string[];
	likedByUser: boolean;
	userFullname: string;
	userAvatar: string | null;
	typeUser: string;
	userId: string;
}
export default function PostFeature() {
	const [posts, setPosts] = useState<PostResponse[]>([]);
	const getPosts = async () => {
		const response = await axiosInstance.get('/Post/Search');
		setPosts(response.data);
	};

	useEffect(() => {
		getPosts();
	}, []);
	return (
		<div>
			<div className='md:flex my-5 hidden'>
				<input type='text' className='border-none outline-none bg-[#F3F3F3] w-full' placeholder='Tìm kiếm' />
				<button className='w-[50px] h-[40px] rounded-[5px] bg-[#F07202] flex items-center justify-center ml-1'>
					<svg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<path
								d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
								stroke='#ffffff'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>{' '}
						</g>
					</svg>
				</button>
			</div>
			<div className='flex'>
				<div className='w-full'>
					<div className='font-bold text-[36px] hidden md:block'>Bài viết</div>
					{posts.map((e) => (
						<div key={e.id} className='w-full'>
							<Post
								id={e.id}
								avatarUrl={`${
									e.userAvatar
										? `${process.env.NEXT_PUBLIC_API_URL}/${e.userAvatar}`
										: '/assets/images/relative1.png'
								}`}
								description={e.description}
								fullname={e.userFullname}
								imageUrls={e.imageUrls}
								lastPost={e.createdDateAgo}
								status={e.typeUser}
								totalLike={e.totalLike}
								totalComment={e.totalComment}
								likedByUser={false}
							/>
						</div>
					))}
				</div>
				<div className='w-[400px] ml-4 md:block hidden'>
					<ContactForm />
					<div
						className='w-full h-[200px] rounded-[10px] bg-cover bg-no-repeat mt-4'
						style={{
							backgroundImage: "url('/assets/images/google-map.png')",
						}}
					></div>
				</div>
			</div>
		</div>
	);
}
