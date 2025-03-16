'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Reason() {
	const [hoveredCard, setHoveredCard] = useState(null);

	// Feature cards data
	const featureCards = [
		{
			id: 1,
			title: 'Kết nối nhanh chóng',
			description:
				'Khách hàng có thể tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh một cách dễ dàng. Không còn phải loay hoay tìm nhiếp ảnh gia phù hợp, Camnect giúp bạn tiết kiếm thời gian và công sức, mang lại sự thuận tiện tối đa.',
			image: '/assets/images/mobile-reason1.png',
			position: 'translate-y-16',
			mobileImage: '/assets/images/mobile-reason1.png',
			number: '01',
		},
		{
			id: 2,
			title: 'Chất lượng đảm bảo',
			description:
				'Camnect không chỉ kết nối nhanh chóng mà còn cam kết mang lại dịch vụ chất lượng hàng đầu. Với hệ thống đánh giá minh bạch, khách hàng có thể yên tâm hoàn toàn về sự chuyên nghiệp và đẳng tin cậy của dịch vụ.',
			image: '/assets/images/mobile-reason1.png',
			position: 'translate-y-0',
			mobileImage: '/assets/images/mobile-reason2.png',
			number: '02',
		},
		{
			id: 3,
			title: 'Dịch vụ đa dạng',
			description:
				'Camnect cung cấp một loạt dịch vụ chụp ảnh chuyên nghiệp, bao gồm chân dung, sự kiện, kỷ yếu,sản phẩm và bất động sản. Dù bạn cần gì từ những khoảnh khắc đáng nhớ hay xây dựng hình ảnh thương hiệu, Camnect đều sẵn sàng đáp ứng.',
			image: '/assets/images/mobile-reason1.png',
			position: 'translate-y-16',
			mobileImage: '/assets/images/mobile-reason1.png',
			number: '03',
		},
		{
			id: 4,
			title: 'Giá cả minh bạch',
			description:
				'Hệ thống minh bạch về chi phí giúp khách hàng dễ dàng so sánh và lựa chọn dịch vụ phù hợp nhất mà không phải lo lắng về chi phí phát sinh. Với Camnect, bạn luôn nhận được giá trị xứng đáng với số tiền bỏ ra.',
			image: '/assets/images/mobile-reason1.png',
			position: 'translate-y-0',
			mobileImage: '/assets/images/mobile-reason2.png',
			number: '04',
		},
	];

	return (
		<>
			{/* Desktop version */}
			<div className='hidden md:block bg-[#f9f6f2] py-16 relative overflow-hidden'>
				{/* Background pattern */}
				{/* <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/assets/images/pattern-lines.png')] bg-no-repeat bg-contain opacity-30"></div> */}

				<div className='container-lg mx-auto relative'>
					<div className='flex flex-col lg:flex-row gap-10 items-center lg:items-start'>
						{/* Left section - Staggered Cards */}
						<div className='w-full lg:w-5/12 grid grid-cols-2 gap-6'>
							<div className='space-y-6'>
								{/* Card 1 */}
								<div
									className={`bg-white rounded-lg shadow-sm p-6 transition-all duration-300 ${featureCards[0].position} relative overflow-hidden`}
									onMouseEnter={() => setHoveredCard(1)}
									onMouseLeave={() => setHoveredCard(null)}
								>
									{hoveredCard === 1 && (
										<div className='absolute inset-0 z-0 opacity-80'>
											<Image
												src={featureCards[0].image}
												alt={featureCards[0].title}
												fill
												className='object-cover'
											/>
										</div>
									)}
									<div
										className={`relative z-10 ${
											hoveredCard === 1 ? 'text-white' : 'text-[#555555]'
										}`}
									>
										<h3 className='text-lg font-medium mb-2'>{featureCards[0].title}</h3>
										<p className='text-sm leading-relaxed'>{featureCards[0].description}</p>
									</div>
								</div>

								{/* Card 3 */}
								<div
									className={`bg-white rounded-lg shadow-sm p-6 transition-all duration-300 ${featureCards[2].position} relative overflow-hidden`}
									onMouseEnter={() => setHoveredCard(3)}
									onMouseLeave={() => setHoveredCard(null)}
								>
									{hoveredCard === 3 && (
										<div className='absolute inset-0 z-0 opacity-80'>
											<Image
												src={featureCards[2].image}
												alt={featureCards[2].title}
												fill
												className='object-cover'
											/>
										</div>
									)}
									<div
										className={`relative z-10 ${
											hoveredCard === 3 ? 'text-white' : 'text-[#555555]'
										}`}
									>
										<h3 className='text-lg font-medium mb-2'>{featureCards[2].title}</h3>
										<p className='text-sm leading-relaxed'>{featureCards[2].description}</p>
									</div>
								</div>
							</div>

							<div className='space-y-6'>
								{/* Card 2 */}
								<div
									className={`bg-white rounded-lg shadow-sm p-6 transition-all duration-300 ${featureCards[1].position} relative overflow-hidden`}
									onMouseEnter={() => setHoveredCard(2)}
									onMouseLeave={() => setHoveredCard(null)}
								>
									{hoveredCard === 2 && (
										<div className='absolute inset-0 z-0 opacity-80'>
											<Image
												src={featureCards[1].image}
												alt={featureCards[1].title}
												fill
												className='object-cover'
											/>
										</div>
									)}
									<div
										className={`relative z-10 ${
											hoveredCard === 2 ? 'text-white' : 'text-[#555555]'
										}`}
									>
										<h3 className='text-lg font-medium mb-2'>{featureCards[1].title}</h3>
										<p className='text-sm leading-relaxed'>{featureCards[1].description}</p>
									</div>
								</div>

								{/* Card 4 */}
								<div
									className={`bg-white rounded-lg shadow-sm p-6 transition-all duration-300 ${featureCards[3].position} relative overflow-hidden`}
									onMouseEnter={() => setHoveredCard(4)}
									onMouseLeave={() => setHoveredCard(null)}
								>
									{hoveredCard === 4 && (
										<div className='absolute inset-0 z-0 opacity-80'>
											<Image
												src={featureCards[3].image}
												alt={featureCards[3].title}
												fill
												className='object-cover'
											/>
										</div>
									)}
									<div
										className={`relative z-10 ${
											hoveredCard === 4 ? 'text-white' : 'text-[#555555]'
										}`}
									>
										<h3 className='text-lg font-medium mb-2'>{featureCards[3].title}</h3>
										<p className='text-sm leading-relaxed'>{featureCards[3].description}</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right section - Text */}
						<div className='w-full lg:w-5/12 lg:pl-10'>
							<div className='relative'>
								<h4 className='text-[#777777] text-2xl'>Những lý do</h4>
								<h2 className='text-[#F07202] text-4xl font-bold uppercase mb-6'>
									VÌ SAO NÊN CHỌN CAMNECT?
								</h2>

								<p className='text-[#555555] mb-8'>
									Camnect – Nền tảng kết nối nhiếp ảnh chuyên nghiệp
									<br />
									<br />
									Camnect là giải pháp hoàn hảo dành cho những ai đang tìm kiếm dịch vụ chụp ảnh
									chuyên nghiệp và tiện lợi. Với hệ thống kết nối nhanh chóng, dịch vụ đa dạng và cam
									kết chất lượng vượt trội.
								</p>

								<Link
									href='/sign-up'
									className='inline-flex items-center bg-[#F07202] px-8 py-3 rounded-full text-white font-medium'
								>
									Đăng ký
									<svg
										width='20px'
										height='20px'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='ml-2'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z'
											fill='#ffffff'
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile version - Updated with Swiper */}
			<div className='md:hidden bg-[#fef6ec] p-6'>
				{/* Background pattern */}
				{/* <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('/assets/images/pattern-lines.png')] bg-no-repeat bg-contain opacity-30"></div> */}

				<div className='relative'>
					<h4 className='text-[#777777] text-xl'>Những lý do</h4>
					<h2 className='text-[#F07202] text-3xl font-bold uppercase mb-4'>VÌ SAO NÊN CHỌN CAMNECT?</h2>

					<p className='text-[#555555] text-sm mb-6 font-italic'>
						Camnect – Nền tảng kết nối nhiếp ảnh chuyên nghiệp
					</p>

					<p className='text-[#555555] text-sm mb-6'>
						Camnect là giải pháp hoàn hảo dành cho những ai đang tìm kiếm dịch vụ chụp ảnh chuyên nghiệp và
						tiện lợi. Với hệ thống kết nối nhanh chóng, dịch vụ đa dạng và cam kết chất lượng vượt trội.
					</p>

					<div className='flex justify-center mb-8'>
						<Link
							href='/sign-up'
							className='inline-flex items-center justify-center bg-[#F07202] px-5 py-2 rounded-full text-white font-medium text-sm'
						>
							Đăng ký
						</Link>
					</div>

					{/* Feature cards with Swiper */}
					<div className='mt-10'>
						<Swiper
							slidesPerView={1.2}
							spaceBetween={16}
							centeredSlides={true}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							className='mySwiper'
						>
							{featureCards.map((card) => (
								<SwiperSlide key={card.id}>
									<div className='relative rounded-lg overflow-hidden'>
										<div className='relative h-72'>
											<Image
												src={card.mobileImage}
												alt={card.title}
												fill
												className='object-cover'
											/>
											<div className='absolute inset-0 bg-black bg-opacity-40'></div>
											<div className='absolute inset-0 p-6 flex flex-col justify-between text-white'>
												<h3 className='text-xl font-medium'>{card.title}</h3>
												<p className='text-sm'>{card.description}</p>
												<div className='text-8xl font-bold opacity-50 text-end'>
													{card.number}
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>

			{/* Swiper custom styles */}
			<style jsx global>{`
				.swiper-pagination-bullet {
					background: #f07202;
					opacity: 0.5;
				}
				.swiper-pagination-bullet-active {
					opacity: 1;
					background: #f07202;
				}
				.swiper-slide {
					transition: transform 0.3s;
				}
				.swiper-slide-active {
					transform: scale(1.05);
				}
			`}</style>
		</>
	);
}
