'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Introduction() {
	return (
		<>
			{/* Desktop version - Updated to match the design */}
			<div className='hidden md:block bg-[#f8f8f8] sec-com'>
				<div className='container-lg'>
					<div className='flex flex-wrap items-center'>
						{/* Left content */}
						<div className='w-full lg:w-1/2 pr-0 lg:pr-8'>
							<h2 className='text-[#F07202] text-4xl font-bold mb-8'>GIỚI THIỆU VỀ CAMNECT</h2>

							<div className='text-[#555555] space-y-6'>
								<p className='text-base'>
									Camnect là nền tảng trực tuyến hàng đầu, chuyên kết nối khách hàng với các nhiếp ảnh
									gia chuyên nghiệp, đáp ứng mọi nhu cầu chụp ảnh từ sự kiện, chân dung, thời trang
									đến sản phẩm và bất động sản.
								</p>

								<p className='text-base'>
									Với Camnect, việc tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh trở nên dễ dàng và
									thuận tiện hơn bao giờ hết. Chỉ cần vài thao tác đơn giản, bạn có thể kết nối ngay
									với nhiếp ảnh gia phù hợp.
								</p>

								<p className='text-base'>
									Ngoài ra Camnect cung cấp nhiều dịch vụ chụp ảnh đa dạng, từ chân dung cá nhân, sự
									kiện, kỷ yếu đến sản phẩm và bất động sản, đảm bảo đáp ứng mọi nhu cầu cho cả cá
									nhân và doanh nghiệp.
								</p>

								<p className='text-base'>
									Cuối cùng, Camnect cam kết mang lại dịch vụ chuyên nghiệp và đáng tin cậy nhờ quy
									trình chọn lọc nhiếp ảnh gia nghiêm ngặt cùng hệ thống đánh giá minh bạch, giúp
									khách hàng hoàn toàn an tâm về chất lượng.
								</p>
							</div>

							<div className='mt-8'>
								<Link
									href='#'
									className='inline-flex items-center bg-[#F07202] px-6 py-3 rounded-full text-white font-medium'
								>
									Đọc thêm
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

						{/* Right content with images */}
						<div className='w-full lg:w-1/2 mt-8 lg:mt-0'>
							<div className='grid grid-cols-12 gap-4'>
								{/* Main large image */}
								<div className='col-span-12 mb-4'>
									<div className='relative rounded-tl-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden w-full h-80'>
										<Image
											src='/assets/images/intro01-des.png'
											alt='Camnect intro'
											fill
											className='object-cover'
										/>
									</div>
								</div>

								{/* Two smaller images */}
								<div className='col-span-6'>
									<div className='relative rounded-lg overflow-hidden w-full h-48'>
										<Image
											src='/assets/images/intro02-des.png'
											alt='Camnect services'
											fill
											className='object-cover'
										/>
									</div>
								</div>

								<div className='col-span-6'>
									<div className='relative rounded-lg overflow-hidden w-full h-48'>
										<Image
											src='/assets/images/intro03-des.png'
											alt='Camnect photography'
											fill
											className='object-cover'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile version - Kept exactly the same as provided */}
			<div className='md:hidden bg-[#111111]'>
				{/* Title with orange line */}
				<div className='relative text-center pt-6 mb-6'>
					<div className='inline-block'>
						<div className='flex items-center justify-center'>
							<div className='w-8 h-[2px] bg-[#F07202] mr-2'></div>
							<h2 className='text-white text-xl font-bold'>GIỚI THIỆU VỀ CAMNECT</h2>
						</div>
					</div>
				</div>

				{/* Image gallery */}
				<div className='flex justify-center px-4 mb-6'>
					<div className='grid grid-cols-3 gap-2 w-full'>
						<div className='relative aspect-square overflow-hidden rounded-sm'>
							<Image
								src='/assets/images/mobile-intro1.png'
								alt='Camnect intro'
								fill
								className='object-cover'
							/>
						</div>
						<div className='relative aspect-square overflow-hidden rounded-sm'>
							<Image
								src='/assets/images/mobile-intro2.png'
								alt='Camnect intro'
								fill
								className='object-cover'
							/>
						</div>
						<div className='relative aspect-square overflow-hidden rounded-sm'>
							<Image
								src='/assets/images/mobile-intro3.png'
								alt='Camnect intro'
								fill
								className='object-cover'
							/>
						</div>
					</div>
				</div>

				{/* Text content */}
				<div className='px-4 bg-[#f8f8f8] py-6 text-[#444444] text-sm leading-relaxed'>
					<p className='mb-4'>
						Camnect là nền tảng trực tuyến hàng đầu, chuyên kết nối khách hàng với các nhiếp ảnh gia chuyên
						nghiệp, đáp ứng mọi nhu cầu chụp ảnh từ sự kiện, chân dung, thời trang đến sản phẩm và bất động
						sản.
					</p>
					<p className='mb-4'>
						Với Camnect, việc tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh trở nên dễ dàng và thuận tiện
						hơn bao giờ hết. Chỉ cần vài thao tác đơn giản, bạn có thể kết nối ngay với nhiếp ảnh gia phù
						hợp.
					</p>
					<p className='mb-4'>
						Ngoài ra Camnect cung cấp nhiều dịch vụ chụp ảnh đa dạng, từ chân dung cá nhân, sự kiện, kỷ yếu
						đến sản phẩm và bất động sản, đảm bảo đáp ứng mọi nhu cầu cho cả cá nhân và doanh nghiệp.
					</p>

					{/* Read More Button */}
					<div className='text-right mt-6'>
						<Link
							href='#'
							className='inline-flex items-center justify-center bg-[#F07202] px-5 py-2 text-white font-medium rounded-full text-sm'
						>
							Đọc thêm
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
