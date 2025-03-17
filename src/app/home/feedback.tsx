'use client';
import React from 'react';
import Image from 'next/image';

// Title component
function Title({ content }) {
	return <h2 className='text-center text-[#F07202] text-3xl md:text-4xl font-bold mb-4'>{content}</h2>;
}

// Description component
function Description({ content, classes }) {
	return <p className={`text-center text-gray-700 ${classes}`}>{content}</p>;
}

// Star Rating component
function StarRating({ rating }) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;

	return (
		<div className='flex'>
			{[...Array(5)].map((_, i) => (
				<span key={i}>
					{i < fullStars ? (
						<svg width='20' height='20' viewBox='0 0 20 20' fill='#FFB800'>
							<path d='M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z' />
						</svg>
					) : hasHalfStar && i === fullStars ? (
						<svg width='20' height='20' viewBox='0 0 20 20'>
							<path
								d='M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z'
								fill='#FFB800'
								fillOpacity='0.5'
							/>
						</svg>
					) : (
						<svg width='20' height='20' viewBox='0 0 20 20'>
							<path
								d='M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z'
								fill='#D1D1D1'
							/>
						</svg>
					)}
				</span>
			))}
		</div>
	);
}

// Card Feedback component
function CardFeedback({ imageUrl, content, fullname, rate }) {
	return (
		<div className='flex items-start gap-5 p-0.5 bg-gray-100'>
			<div className='w-36 h-56 md:w-48 md:h-60 shrink-0'>
				<Image
					src={imageUrl}
					alt={fullname}
					width={150}
					height={150}
					className='w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl'
				/>
			</div>
			<div className='flex-1'>
				<p className='text-gray-700 mb-3'>{content}</p>
				<div className='mt-2'>
					<h3 className='text-[#F07202] font-semibold text-lg mb-1'>{fullname}</h3>
					<StarRating rating={rate} />
				</div>
			</div>
		</div>
	);
}

export default function Feedback() {
	const feedbacks = [
		{
			imageUrl: '/assets/images/feedback1.png',
			content:
				'Sẽ tiếp tục sử dụng dịch vụ trong tương lai! Camnect có đội ngũ nhiếp ảnh gia rất chuyên nghiệp. Tôi đã chụp ảnh sinh nhật cho con gái mình và kết quả thật sự làm tôi hài lòng.',
			fullname: 'Nguyen Thi Mai',
			rate: 4.5,
		},
		{
			imageUrl: '/assets/images/feedback2.png',
			content:
				'Chị Mỹ Hạnh chụp ảnh rất chuyên nghiệp, bắt được những khoảnh khắc tự nhiên và vui vẻ trong ngày kỷ yếu của lớp em. Cách làm việc thân thiện và nhiệt tình.',
			fullname: 'Ninh Anh Đào',
			rate: 4.5,
		},
		{
			imageUrl: '/assets/images/feedback3.png',
			content:
				'Anh Khải là người chụp ảnh sinh nhật cho con gái tôi, anh ấy rất dễ mến và kiên nhẫn. Những bức ảnh ghi lại những khoảnh khắc đẹp nhất của buổi tiệc.',
			fullname: 'Khánh Vy',
			rate: 4.5,
		},
		{
			imageUrl: '/assets/images/feedback4.png',
			content:
				'Sẽ tiếp tục sử dụng dịch vụ trong tương lai! Camnect có đội ngũ nhiếp ảnh gia rất chuyên nghiệp. Tôi đã chụp ảnh sinh nhật cho con gái mình và kết quả thật sự làm tôi hài lòng.',
			fullname: 'Minh Anh Nguyễn',
			rate: 4.5,
		},
	];

	return (
		<div className='sec-com bg-[#FAFAFA]'>
			<div className='container-lg'>
				<Title content='ĐÁNH GIÁ CỦA MỘT SỐ KHÁCH HÀNG' />

				<div className='flex justify-center mb-12'>
					<div className='max-w-[867px]'>
						<Description
							content='Hãy cùng xem xem, những khách hàng thân yêu của Camnect nói gì về trải nghiệm sử dụng dịch vụ của chúng tôi nhé!'
							classes={undefined}
						/>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{feedbacks.map((feedback, index) => (
						<CardFeedback
							key={index}
							imageUrl={feedback.imageUrl}
							content={feedback.content}
							fullname={feedback.fullname}
							rate={feedback.rate}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
