import Image from 'next/image';
import React from 'react';

export default function Footer() {
	return (
		<div className='bg-[#F47B20] w-full text-white p-6 md:p-8 lg:p-10'>
			<div className='container-lg'>
				<Image src='/assets/images/logo-footer.png' width={255} height={92} alt='logo-footer' />
				<div className='flex flex-col md:flex-row gap-8 justify-between'>
					{/* Logo and Contact Information */}
					<div className='flex flex-col gap-4'>
						<div className='mt-2'>
							<h3 className='text-lg font-semibold mb-2'>Thông tin liên hệ</h3>
							<p className='mb-1'>Số điện thoại: 0912464885</p>
							<p className='mb-1'>Email: webcamnect@gmail.com</p>
							<p className='mb-1'>Địa chỉ: 185 ngõ 192 Lê Trọng</p>
							<p>Tân, Thanh Xuân, Hà Nội</p>
						</div>

						<div className='mt-2'>
							<Image src='/assets/images/bct.png' width={184} height={70} alt='bct' />
						</div>
					</div>

					{/* Quick Links */}
					<div className='flex flex-col gap-2'>
						<h3 className='text-lg font-semibold mb-2'>Liên kết nhanh</h3>
						<a href='#' className='hover:underline'>
							Trang chủ
						</a>
						<a href='#' className='hover:underline'>
							Nhiếp ảnh gia
						</a>
						<a href='#' className='hover:underline'>
							Lịch
						</a>
						<a href='#' className='hover:underline'>
							Tin tức
						</a>
						<a href='#' className='hover:underline'>
							Cộng đồng
						</a>
						<a href='#' className='hover:underline'>
							Dịch vụ
						</a>
					</div>

					{/* Newsletter Signup */}
					<div className='flex flex-col gap-2 md:max-w-xs'>
						<h3 className='text-lg font-semibold mb-2'>Đăng ký để nhận tư vấn</h3>
						<p className='text-sm mb-4'>
							Hãy gửi thông tin của bạn cho chúng tôi để cập nhật ưu đãi mới nhất
						</p>

						<div className='flex'>
							<input
								type='email'
								placeholder='Nhập email'
								className='px-4 py-2 rounded-l-full text-black flex-grow'
							/>
							<button className='bg-black text-white px-6 py-2 rounded-r-full'>Gửi đi</button>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className='border-t border-white/30 my-6'></div>

				{/* Footer Bottom */}
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div></div> {/* Empty div for spacing */}
					<div className='flex gap-4 text-sm'>
						<a href='#' className='hover:underline'>
							Privacy & Policy
						</a>
						<a href='#' className='hover:underline'>
							Terms & Condition
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
