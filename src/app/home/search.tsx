'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface CardPhotographersProps {
	avatarUrl: string;
	fullname: string;
	rate: number;
	minPrice: number;
	maxPrice: number;
	experience: string;
	outstandingConcept: string;
	services: string[];
	index: number;
}

function DesktopCard(props: CardPhotographersProps) {
	const formatMoney = (amount: number) => {
		return amount
			.toFixed(0)
			.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
			.replace('.', ',');
	};

	// Generate star rating
	const renderStars = (rating: number) => {
		return Array(5)
			.fill(0)
			.map((_, index) => (
				<svg
					key={index}
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill={index < rating ? '#FFB800' : '#D9D9D9'}
				>
					<path d='M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z' />
				</svg>
			));
	};

	return (
		<div className='rounded-[20px] bg-white px-5 py-5 my-4 shadow-sm'>
			<div className='flex'>
				<div className='w-[220px] flex-shrink-0 border-r border-r-[#F07202] px-5'>
					<div className='flex justify-center'>
						<Image
							src={props.avatarUrl}
							alt={props.fullname}
							width={140}
							height={140}
							className='rounded-full object-cover'
						/>
					</div>
					<div className='flex justify-center py-3'>
						<div className='flex space-x-1'>{renderStars(props.rate)}</div>
					</div>
					<div className='text-center font-bold text-[18px]'>{props.fullname}</div>
					<div className='text-center text-[#F07202] text-[16px] whitespace-nowrap'>
						{formatMoney(props.minPrice)} - {formatMoney(props.maxPrice)} VNĐ
					</div>
				</div>
				<div className='px-6 flex-grow'>
					<div className='text-[14px] flex flex-col justify-between h-full'>
						<div className='mb-3'>
							<strong>Kinh nghiệm: </strong> {props.experience}
						</div>
						<div className='mb-3'>
							<strong>Concept nổi bật: </strong> {props.outstandingConcept}
						</div>
						<div className='mb-5'>
							<strong>Dịch vụ đáp ứng: </strong>
							{props.services.map((service, index) => (
								<div key={`service-${index}`} className='ml-4'>
									- {service}
								</div>
							))}
						</div>
						<div>
							<button className='uppercase px-5 py-1 rounded-[20px] bg-[#FF9900] text-[15px] font-bold text-white hover:bg-[#F07202] transition-colors'>
								Xem thêm
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function MobileCard(props: CardPhotographersProps) {
	const formatMoney = (amount: number) => {
		return amount
			.toFixed(0)
			.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
			.replace('.', ',');
	};

	// Generate star rating
	const renderStars = (rating: number) => {
		return Array(5)
			.fill(0)
			.map((_, index) => (
				<svg
					key={index}
					width='12'
					height='12'
					viewBox='0 0 16 16'
					fill={index < rating ? '#FFB800' : '#D9D9D9'}
				>
					<path d='M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z' />
				</svg>
			));
	};

	return (
		<div className='relative px-2 py-4'>
			{/* Large background number */}
			<div className='absolute text-[140px] font-bold text-[#FFF1E0] -z-10 opacity-30 right-0 -top-2 leading-none'>
				{props.index < 9 ? `0${props.index + 1}` : props.index + 1}
			</div>

			<div>
				<div className='flex items-center mb-4'>
					<div className='relative w-20 h-20 mr-4 flex-shrink-0'>
						<Image src={props.avatarUrl} alt={props.fullname} fill className='rounded-full object-cover' />
					</div>
					<div>
						<div className='font-bold'>{props.fullname}</div>
						<div className='flex my-1 space-x-1'>{renderStars(props.rate)}</div>
						<div className='text-[#F07202] text-sm'>
							{formatMoney(props.minPrice)} - {formatMoney(props.maxPrice)} VNĐ
						</div>
					</div>
				</div>

				<div className='text-sm space-y-2'>
					<div>
						<strong>Kinh nghiệm:</strong> {props.experience}
					</div>
					<div>
						<strong>Concept nổi bật:</strong> {props.outstandingConcept.substring(0, 100)}...
					</div>
					<div>
						<strong>Dịch vụ đáp ứng:</strong>
						{props.services.map((service, index) => (
							<div key={`mobile-service-${index}`}>{service}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function SearchPhotographers() {
	const photographers = [
		{
			avatarUrl: '/assets/images/search1.png',
			experience: 'Hơn 3 năm trong lĩnh vực nhiếp ảnh, đặc biệt là chụp ảnh thời trang và chân dung.',
			fullname: 'Quỳnh Trang',
			minPrice: 500000,
			maxPrice: 1000000,
			outstandingConcept:
				'Thường chụp ảnh kỷ yếu với phong cách trẻ trung và năng động, ghi lại những khoảnh khắc vui vẻ của học sinh, sinh viên. Bên cạnh đó, tôi cũng chụp chân dung cá nhân với ánh sáng tự nhiên và tạo dáng thoải mái để tôn lên vẻ đẹp tự nhiên của mỗi người.',
			rate: 5,
			services: [
				'Chụp ảnh thời trang cá nhân và thương mại',
				'Chụp ảnh chân dung chuyên nghiệp',
				'Chụp ảnh sản phẩm cho thương hiệu',
			],
		},
		{
			avatarUrl: '/assets/images/pham-sang.png',
			experience: 'Hơn 3 năm trong lĩnh vực nhiếp ảnh, đặc biệt là chụp ảnh thời trang và chân dung.',
			fullname: 'Phạm San',
			minPrice: 700000,
			maxPrice: 2000000,
			outstandingConcept:
				'Thường chụp ảnh kỷ yếu với phong cách trẻ trung và năng động, ghi lại những khoảnh khắc vui vẻ của học sinh, sinh viên. Bên cạnh đó, tôi cũng chụp chân dung cá nhân với ánh sáng tự nhiên và tạo dáng thoải mái để tôn lên vẻ đẹp tự nhiên của mỗi người.',
			rate: 5,
			services: [
				'Chụp ảnh thời trang cá nhân và thương mại',
				'Chụp ảnh chân dung chuyên nghiệp',
				'Chụp ảnh sản phẩm cho thương hiệu',
			],
		},
		{
			avatarUrl: '/assets/images/tran-van-khai.png',
			experience: 'Hơn 3 năm trong lĩnh vực nhiếp ảnh, đặc biệt là chụp ảnh thời trang và chân dung.',
			fullname: 'Trần Văn Khải',
			minPrice: 700000,
			maxPrice: 1500000,
			outstandingConcept:
				'Thường chụp ảnh kỷ yếu với phong cách trẻ trung và năng động, ghi lại những khoảnh khắc vui vẻ của học sinh, sinh viên. Bên cạnh đó, tôi cũng chụp chân dung cá nhân với ánh sáng tự nhiên và tạo dáng thoải mái để tôn lên vẻ đẹp tự nhiên của mỗi người.',
			rate: 5,
			services: [
				'Chụp ảnh thời trang cá nhân và thương mại',
				'Chụp ảnh chân dung chuyên nghiệp',
				'Chụp ảnh sản phẩm cho thương hiệu',
			],
		},
		{
			avatarUrl: '/assets/images/hai-dang.png',
			experience: 'Hơn 3 năm trong lĩnh vực nhiếp ảnh, đặc biệt là chụp ảnh thời trang và chân dung.',
			fullname: 'Hải Đăng',
			minPrice: 700000,
			maxPrice: 1500000,
			outstandingConcept:
				'Thường chụp ảnh kỷ yếu với phong cách trẻ trung và năng động, ghi lại những khoảnh khắc vui vẻ của học sinh, sinh viên. Bên cạnh đó, tôi cũng chụp chân dung cá nhân với ánh sáng tự nhiên và tạo dáng thoải mái để tôn lên vẻ đẹp tự nhiên của mỗi người.',
			rate: 5,
			services: [
				'Chụp ảnh thời trang cá nhân và thương mại',
				'Chụp ảnh chân dung chuyên nghiệp',
				'Chụp ảnh sản phẩm cho thương hiệu',
			],
		},
	];

	return (
		<div className='flex justify-center sec-com bg-[#FAFAFA]'>
			<div className='container-lg'>
				{/* Header */}
				<div className='text-center mb-8'>
					<h1 className='text-2xl md:text-4xl text-[#F07202] font-bold mb-4'>TÌM KIẾM NHIẾP ẢNH GIA</h1>
					<div className='max-w-[827px] mx-auto text-sm md:text-base text-[#555555] mb-8'>
						Camnect cung cấp công cụ tìm kiếm thông minh, cho phép khách hàng lọc nhiếp ảnh gia theo loại
						hình chụp ảnh, phong cách, địa điểm, và mức giá.
					</div>

					{/* Filter buttons */}
					<div className='flex items-center justify-center mb-10'>
						<div className='flex-grow md:block hidden'>
							<div className='h-[1px] bg-[#BCBCBC]'></div>
						</div>
						<div className='flex space-x-3'>
							<button className='bg-[#F07202] px-5 rounded-full py-2 text-sm font-bold text-white'>
								GẦN NHẤT
							</button>
							<button className='bg-white border-[#F07202] border px-5 rounded-full py-2 text-sm font-bold text-[#F07202]'>
								GIÁ
							</button>
						</div>
						<div className='flex-grow md:block hidden'>
							<div className='h-[1px] bg-[#BCBCBC]'></div>
						</div>
					</div>
				</div>

				{/* Desktop Photographers list */}
				<div className='hidden md:block space-y-4'>
					{photographers.map((photographer, index) => (
						<DesktopCard
							key={index}
							index={index}
							avatarUrl={photographer.avatarUrl}
							experience={photographer.experience}
							fullname={photographer.fullname}
							minPrice={photographer.minPrice}
							maxPrice={photographer.maxPrice}
							outstandingConcept={photographer.outstandingConcept}
							rate={photographer.rate}
							services={photographer.services}
						/>
					))}
				</div>

				{/* Mobile Photographers swiper */}
				<div className='md:hidden'>
					<Swiper
						slidesPerView={1.15}
						spaceBetween={10}
						initialSlide={0}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className='photographersSwiper'
					>
						{photographers.map((photographer, index) => (
							<SwiperSlide key={index}>
								<MobileCard
									index={index}
									avatarUrl={photographer.avatarUrl}
									experience={photographer.experience}
									fullname={photographer.fullname}
									minPrice={photographer.minPrice}
									maxPrice={photographer.maxPrice}
									outstandingConcept={photographer.outstandingConcept}
									rate={photographer.rate}
									services={photographer.services}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			{/* Swiper custom styles */}
			<style jsx global>{`
				.photographersSwiper {
					padding-bottom: 40px;
				}
				.swiper-pagination-bullet {
					background: #f07202;
					opacity: 0.5;
				}
				.swiper-pagination-bullet-active {
					opacity: 1;
					background: #f07202;
				}
				.swiper-slide {
					background: white;
					border-radius: 12px;
					height: auto;
				}
			`}</style>
		</div>
	);
}
