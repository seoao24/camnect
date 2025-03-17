'use client';
import React, { useState } from 'react';

// TextCollapse component for accordion functionality
function TextCollapse({ title, description, isOpen: initialOpen }) {
	const [isOpen, setIsOpen] = useState(initialOpen);

	return (
		<div className='mb-5 overflow-hidden rounded-2xl'>
			<div
				className={`p-6 transition-colors duration-300 ${isOpen ? 'bg-[#F07202] text-white' : 'bg-[#f2f2f2]'}`}
			>
				<div className='flex justify-between items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
					<h3 className='font-medium text-lg'>{title}</h3>
					<button
						className={`flex items-center justify-center w-8 h-8 rounded-full ${
							isOpen ? 'bg-black text-white' : 'bg-white text-[#F07202]'
						}`}
					>
						{isOpen ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='3'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='3'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<line x1='12' y1='5' x2='12' y2='19'></line>
								<line x1='5' y1='12' x2='19' y2='12'></line>
							</svg>
						)}
					</button>
				</div>

				{isOpen && <div className='mt-4 text-base'>{description}</div>}
			</div>
		</div>
	);
}

// Title component
function Title({ content }) {
	return <h1 className='text-center text-[#F07202] text-3xl md:text-4xl font-bold mb-6'>{content}</h1>;
}

// Description component
function Description({ content, classes }) {
	return <p className={`text-center text-gray-700 text-base md:text-lg ${classes}`}>{content}</p>;
}

export default function FAQ() {
	const faqItems = [
		{
			title: 'Tôi cần đặt lịch chụp trước bao lâu?',
			description:
				'Chúng tôi khuyến khích khách hàng đặt lịch trước ít nhất 7 ngày để đảm bảo lịch trình và sự chuẩn bị tốt nhất. Trong trường hợp khẩn cấp, hãy gọi ngay hotline để được hỗ trợ!',
			isOpen: true,
		},
		{
			title: 'Camnect có hỗ trợ tư vấn concept chụp ảnh không?',
			description:
				'Có, Camnect cung cấp dịch vụ tư vấn concept chụp ảnh miễn phí. Các nhiếp ảnh gia của chúng tôi sẽ tư vấn ý tưởng, phong cách, trang phục và địa điểm phù hợp với nhu cầu của bạn để có được những bức ảnh đẹp nhất.',
			isOpen: false,
		},
		{
			title: 'Tôi cần chuẩn bị gì trước buổi chụp ảnh?',
			description:
				'Trước buổi chụp, bạn nên chuẩn bị trang phục phù hợp với concept, đảm bảo nghỉ ngơi đầy đủ để có vẻ ngoài tươi tắn, và mang theo các phụ kiện cần thiết. Chúng tôi sẽ gửi email hướng dẫn chi tiết sau khi bạn đặt lịch.',
			isOpen: false,
		},
		{
			title: 'Dịch vụ của Camnect có bao gồm chỉnh sửa ảnh không?',
			description:
				'Vâng, tất cả các gói dịch vụ của Camnect đều bao gồm dịch vụ chỉnh sửa ảnh cơ bản như điều chỉnh màu sắc, ánh sáng, và xóa các khuyết điểm nhỏ. Đối với các yêu cầu chỉnh sửa nâng cao, chúng tôi có thêm dịch vụ với chi phí bổ sung.',
			isOpen: false,
		},
	];

	return (
		<div className='flex justify-center sec-com bg-[#FEF7F1]'>
			<div className='container-lg'>
				<Title content='CÂU HỎI THƯỜNG GẶP (FQA)-CAMNECT' />

				<div className='flex justify-center mb-12'>
					<div className='max-w-[867px]'>
						<Description
							content='Dưới đây là các câu hỏi thường gặp về dịch vụ của Camnect. Nếu bạn có thêm thắc mắc, đừng ngần ngại liên hệ với chúng tôi qua hotline hoặc email nhé!'
							classes=''
						/>
					</div>
				</div>

				<div className='relative'>
					{/* Background decorative elements */}
					{/* <div className='absolute -top-10 -right-20 w-40 h-40 bg-[#FFE4CA] rounded-full opacity-40 -z-10'></div>
					<div className='absolute -bottom-10 -left-20 w-32 h-32 bg-[#FFE4CA] rounded-full opacity-40 -z-10'></div> */}

					{/* FAQ Accordion */}
					{faqItems.map((item, index) => (
						<TextCollapse
							key={index}
							title={item.title}
							description={item.description}
							isOpen={item.isOpen}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
