/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Service Component
const Service = ({ iconSrc, title, description }) => {
	return (
		<div className='relative w-full bg-white rounded-[20px] px-5 shadow-xl'>
			<div className='absolute top-[-40px] flex justify-center w-full left-0'>
				<div className='w-[80px] h-[80px] rounded-full flex justify-center items-center shadow-md bg-white'>
					<Image src={iconSrc} alt={title} width={36} height={36} />
				</div>
			</div>
			<div className='pt-[70px] pb-[30px]'>
				<div className='text-[#6B716E] font-bold text-center text-sm mb-3'>{title}</div>
				<div className='text-[12px] text-center text-[#6B716E] leading-relaxed'>{description}</div>
			</div>
		</div>
	);
};

// Mobile Service Swiper
const MobileServiceSwiper = ({ services }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='py-0'>
			<Swiper
				slidesPerView='auto'
				centeredSlides={true}
				spaceBetween={15}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
				className='service-swiper'
			>
				{services.map((service: any, index: number) => (
					<SwiperSlide key={index} className='service-slide'>
						<div
							className={`rounded-xl p-5 transition-all duration-300 ${
								index === activeIndex ? 'bg-[#F07202] text-white scale-100' : 'bg-white text-[#6B716E]'
							}`}
							style={{
								width: '280px',
								minHeight: '240px',
								boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
							}}
						>
							<h3
								className={`text-center font-bold text-lg mb-4 ${
									index === activeIndex ? 'text-white' : 'text-[#F07202]'
								}`}
							>
								{service.title}
							</h3>
							<p
								className={`text-sm text-center leading-relaxed ${
									index === activeIndex ? 'text-white' : 'text-[#6B716E]'
								}`}
							>
								{service.description}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

// Main Homepage Component
export default function HomePage() {
	const services = [
		{
			iconSrc: '/assets/images/service1.png',
			title: 'Chụp Ảnh Chân Dung & Cá Nhân',
			description:
				'Hướng dẫn tạo dáng tự nhiên, phù hợp với cá tính riêng của mỗi người. Đặc biệt, quá trình xử lý hậu kỳ chuyên sâu sẽ làm nổi bật thần thái và vẻ đẹp độc đáo, mang đến những bức ảnh hoàn hảo nhất.',
		},
		{
			iconSrc: '/assets/images/service2.png',
			title: 'Chụp Ảnh Sự Kiện',
			description:
				'Quá trình xử lý ảnh thô sẽ được thực hiện chuyên nghiệp, đảm bảo chất lượng xuất trội. Đặc biệt, việc bàn giao ảnh trong thời hạn ưu tiên hàng đầu, mang đến sự hài lòng và tín tưởng tuyệt đối cho khách hàng.',
		},
		{
			iconSrc: '/assets/images/service3.png',
			title: 'Chụp Ảnh Sản Phẩm & Thương Mại',
			description:
				'Các concept được thiết kế phù hợp với thương hiệu, kỹ thuật chỉnh và ánh sáng mạnh mẽ. Luôn sẵn sàng hỗ trợ với những cách chụp phù hợp, giúp tôn vẻ đẹp trừu tượng đặc trưng riêng của từng sản phẩm.',
		},
		{
			iconSrc: '/assets/images/service4.png',
			title: 'Chụp Ảnh Gia Đình & Couple',
			description:
				'Với bố cảnh đa dạng từ studio, ngoài cảnh đến chụp tại nhà, bạn sẽ có nhiều lựa chọn phù hợp với sở thích và phong cách. Đặc biệt, quá trình hậu kỳ được chỉnh sửa tỉnh tế, mang đến những bức ảnh chân thực nhất.',
		},
	];

	return (
		<>
			{/* Hero Section */}
			<section className='w-full'>
				{/* Desktop Hero */}
				<div className='relative w-full md:block hidden'>
					<div className="w-full h-[600px] md:h-[650px] bg-[url('/assets/images/hero.png')] bg-cover bg-center bg-no-repeat">
						<div className='md:absolute md:top-[180px] md:right-[150px] md:w-[350px] lg:w-[450px] w-full p-4 md:p-0'>
							<div
								className='px-6 py-7 rounded-[20px] bg-cover bg-no-repeat'
								style={{
									backgroundImage: "url('/assets/images/hero-home-orange.png')",
								}}
							>
								<div className='text-center text-[20px] font-bold text-white'>
									Tham gia ngay để nhận ưu đãi khủng
								</div>
								<div className='text-center text-white text-[14px] mt-1'>
									Camnect cam kết rõ ràng, minh bạch về dịch vụ hỗ trợ khách hàng của mình.
								</div>
								<div className='mt-4'>
									<div className='mb-2'>
										<input className='w-full p-2 rounded-md text-sm' placeholder='Họ và tên' />
									</div>
									<div className='flex gap-2 mb-2'>
										<div className='w-1/2'>
											<input className='w-full p-2 rounded-md text-sm' placeholder='Nhập email' />
										</div>
										<div className='w-1/2'>
											<input
												className='w-full p-2 rounded-md text-sm'
												placeholder='Nhập số điện thoại'
											/>
										</div>
									</div>
									<div className='mb-4'>
										<textarea
											className='w-full p-2 rounded-md text-sm'
											rows={3}
											placeholder='Để lại lời nhắn cho chúng tôi'
										></textarea>
									</div>
									<div className='flex justify-center'>
										<button className='bg-[#FFA500] hover:bg-[#FF8C00] text-white font-bold py-2 px-8 rounded-md'>
											Gửi
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mobile Banner */}
			<section className='md:hidden bg-white'>
				<div className='container-lg'>
					<div className='text-center mb-2'>
						<div className='text-gray-500 text-sm'>Nơi khoảnh khắc trở thành kỉ niệm!</div>
						<h2 className='text-[#F07202] text-2xl font-bold mt-1'>KẾT NỐI KHOẢNG KHẮC</h2>
						<h2 className='text-[#F07202] text-2xl font-bold'>LƯU TRỮ KỈ NIỆM</h2>
					</div>
					<p className='text-sm text-center text-gray-600 mb-4'>
						Camnect không chỉ cung cấp hình ảnh đẹp, mà còn là cách để kể câu chuyện của riêng bạn qua những
						khoảnh khắc vô cùng tự nhiên và đầy cảm xúc.
					</p>
					<div className='flex justify-center mb-6'>
						<Link href='/dich-vu' className='bg-[#F07202] text-white py-2 px-8 rounded-full font-medium'>
							Xem Thêm
						</Link>
					</div>

					{/* Mobile Image Showcase */}
					<div className='space-y-4'>
						<div className='rounded-lg overflow-hidden'>
							<Image
								src='/assets/images/hero.png'
								alt='Photographer'
								className='w-full object-cover'
								width={400}
								height={300}
							/>
						</div>
						<div className='grid grid-cols-2 gap-2'>
							<div className='rounded-lg overflow-hidden'>
								<Image
									src='/assets/images/mobile-home-banner1.png'
									alt='Couple'
									className='w-full object-cover'
									width={200}
									height={150}
								/>
							</div>
							<div className='rounded-lg overflow-hidden'>
								<Image
									src='/assets/images/mobile-home-banner2.png'
									alt='Wedding'
									className='w-full object-cover'
									width={200}
									height={150}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Service Section Title (Mobile) */}
			<section className='md:hidden bg-orange-50 py-8'>
				<div className='container mx-auto px-4'>
					<h2 className='text-[#F07202] text-2xl font-bold text-center mb-8'>
						HỆ SINH THÁI NHIẾP ẢNH <br /> VÀ DỊCH VỤ CHUYÊN NGHIỆP
					</h2>
					<p className='text-sm text-center text-gray-600 mb-8'>
						Chất lượng hình ảnh không chỉ đến từ tài năng mà còn từ nhiệt tâm - Camnect giúp bạn có cả hai!
					</p>

					{/* Mobile Service Swiper */}
					<MobileServiceSwiper services={services} />
				</div>
			</section>

			{/* Services Section (Desktop) */}
			<section className='hidden md:block sec-com bg-white'>
				<div className='container-lg'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
						{services.map((service, index) => (
							<div key={index} className='mt-0 md:-mt-12'>
								<Service
									iconSrc={service.iconSrc}
									title={service.title}
									description={service.description}
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Add CSS for Swiper customization */}
			<style jsx global>{`
				.service-swiper {
					padding: 0px 0 50px;
				}

				.service-slide {
					width: auto;
					transition: all 0.3s ease;
				}

				.swiper-pagination-bullet {
					background: #f07202;
					opacity: 0.5;
				}

				.swiper-pagination-bullet-active {
					opacity: 1;
					background: #f07202;
				}
			`}</style>
		</>
	);
}
