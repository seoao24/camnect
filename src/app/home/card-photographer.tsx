'use client';
import Image from 'next/image';
import React from 'react';

interface CardPhotographersProps {
	avatarUrl: string;
	fullname: string;
	rate: number;
	minPrice: number;
	maxPrice: number;
	experience: string;
	outstandingConcert: string;
	services: string[];
}
export default function CardPhotographers(props: CardPhotographersProps) {
	const formatMoney = (amount: number) => {
		return amount
			.toFixed(0)
			.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
			.replace('.', ',');
	};
	return (
		<div className='rounded-[20px] bg-white px-5 py-5 flex my-4'>
			<div className='w-[300px] border-r-[1px] border-r-[#F07202] px-10'>
				<div className='flex justify-center'>
					<Image src={props.avatarUrl} alt='search1' width={180} height={180} className='rounded-[50%]' />
				</div>
				<div className='flex justify-center py-3'>
					<div className='flex'></div>
				</div>
				<div className='text-center font-bold text-[22px]'>{props.fullname}</div>
				<div className='text-center text-[#F07202] text-[16px] text-nowrap'>
					{formatMoney(props.minPrice)} - {formatMoney(props.maxPrice)}
				</div>
			</div>
			<div className='px-10'>
				<div className='text-[14px] flex flex-col justify-between h-full'>
					<div>
						<strong>Kinh nghiệm: </strong> Hơn 3 năm trong lĩnh vực nhiếp ảnh, đặc biệt là chụp ảnh thời
						trang và chân dung.
					</div>
					<div>
						<strong>Concept nổi bật: </strong> Thường chụp ảnh kỷ yếu với phong cách trẻ trung và năng động,
						ghi lại những khoảnh khắc vui vẻ của học sinh, sinh viên. Bên cạnh đó, tôi cũng chụp chân dung
						cá nhân với ánh sáng tự nhiên và tạo dáng thoải mái để tôn lên vẻ đẹp tự nhiên của mỗi người.
					</div>
					<div>
						<strong>Dịch vụ đáp ứng: </strong>
						{props.services.map((e, index) => (
							<div key={`service-${index}`}>{e}</div>
						))}
					</div>
					<div>
						<button className='uppercase px-5 py-1 rounded-[20px] bg-[#FF9900] text-[15px] font-bold text-white'>
							Xem thêm
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
