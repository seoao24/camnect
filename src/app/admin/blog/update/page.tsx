'use client';
import React, { Suspense, useEffect, useState } from 'react';
import AddBlock from '../add-blog';
import axiosInstance from '@/api/apiBase';
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';

export default function UpdateBlog() {
	const [content, setContent] = useState<string>('');
	const [title, setTitle] = useState<string>('');
	const [image, setImage] = useState<File | null>(null);
	const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null); // URL đầy đủ từ API
	const [displayImageUrl, setDisplayImageUrl] = useState<string | null>(null); // URL để hiển thị
	const [loading, setLoading] = useState<boolean>(true);
	const [submitting, setSubmitting] = useState<boolean>(false);
	const [isImageDeleted, setIsImageDeleted] = useState<boolean>(false);
	const [isImageNew, setIsImageNew] = useState<boolean>(false);

	const searchParams = useSearchParams();
	const router = useRouter();
	const blogId = searchParams.get('id');

	const getBlog = async () => {
		if (!blogId) {
			toast.error('Không tìm thấy ID blog');
			router.push('/admin/blog');
			return;
		}

		setLoading(true);
		const params = { id: blogId };

		try {
			const response = await axiosInstance.get('/Blog/GetDetail', { params });
			setTitle(response.data?.title || '');
			setContent(response.data?.content || '');

			if (response.data?.imageUrl) {
				const fullImageUrl = `https://api.tapta.online/${response.data.imageUrl}`;
				setOriginalImageUrl(response.data.imageUrl); // Lưu URL gốc từ API
				setDisplayImageUrl(fullImageUrl); // URL hiển thị có thêm domain
			} else {
				setOriginalImageUrl(null);
				setDisplayImageUrl(null);
			}
		} catch (error) {
			console.error('Error fetching blog:', error);
			toast.error('Không tìm được blog');
			router.push('/admin/blog');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getBlog();
	}, [blogId]); // Chỉ chạy khi blogId thay đổi

	const updateBlog = async () => {
		if (!title.trim()) {
			toast.error('Vui lòng nhập tiêu đề');
			return;
		}

		if (!content.trim()) {
			toast.error('Vui lòng nhập nội dung');
			return;
		}

		setSubmitting(true);
		const formData = new FormData();

		// Xử lý ảnh
		if (isImageNew && image) {
			// Trường hợp 1: Người dùng đã thêm ảnh mới
			formData.append('image', image);
		} else if (isImageDeleted) {
			// Trường hợp 2: Người dùng đã xóa ảnh (không cần gửi thông tin ảnh)
			formData.append('removeImage', 'true');
		} else if (originalImageUrl) {
			// Trường hợp 3: Giữ nguyên ảnh gốc
			formData.append('keepOriginalImage', 'true');
			formData.append('originalImageUrl', originalImageUrl);
		}

		formData.append('id', blogId || '');
		formData.append('title', title);
		formData.append('content', content);

		try {
			await axiosInstance.post('/Blog/Update', formData);
			toast.success('Cập nhật blog thành công');
			router.push('/admin/blog');
		} catch (error) {
			console.error('Error updating blog:', error);
			toast.error('Lỗi khi cập nhật blog, vui lòng kiểm tra lại');
		} finally {
			setSubmitting(false);
		}
	};

	// Xử lý khi người dùng thêm ảnh mới
	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0];
			const newImageUrl = URL.createObjectURL(file);
			setImage(file);
			setDisplayImageUrl(newImageUrl);
			setIsImageNew(true);
			setIsImageDeleted(false);
		}
	};

	// Xử lý khi người dùng xóa ảnh
	const handleImageDelete = () => {
		setImage(null);
		setDisplayImageUrl(null);
		setIsImageDeleted(true);
		setIsImageNew(false);
	};

	if (loading) {
		return (
			<div className='flex justify-center items-center min-h-[400px]'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F07202]'></div>
			</div>
		);
	}

	return (
		<Suspense>
			<div>
				<div className='flex justify-between items-center mb-5'>
					<div className='text-[24px] font-semibold uppercase text-[#F07202]'>Cập nhật Blog</div>
					<button
						onClick={updateBlog}
						disabled={submitting}
						className='rounded-[5px] text-white bg-[#FF9900] hover:bg-[#e68a00] transition-colors px-4 py-2 flex items-center shadow-md disabled:opacity-70 disabled:cursor-not-allowed'
					>
						{submitting ? (
							<>
								<svg
									className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
								>
									<circle
										className='opacity-25'
										cx='12'
										cy='12'
										r='10'
										stroke='currentColor'
										strokeWidth='4'
									></circle>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
									></path>
								</svg>
								Đang cập nhật...
							</>
						) : (
							<>
								<svg
									className='w-5 h-5 mr-2'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z' />
									<polyline points='17 21 17 13 7 13 7 21' />
									<polyline points='7 3 7 8 15 8' />
								</svg>
								Lưu thay đổi
							</>
						)}
					</button>
				</div>
				<div>
					<textarea
						rows={2}
						className='w-full outline-none p-4 border-[#FF9900] border-[1px] rounded-[5px] text-[#F07202]'
						placeholder='Nhập tiêu đề'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div className='my-4'>
					{!displayImageUrl && (
						<div>
							<input type='file' id='title-image' className='hidden' onChange={handleImageUpload} />
							<label
								htmlFor='title-image'
								className='px-4 py-2 bg-[#F07202] rounded-[5px] cursor-pointer text-white text-[20px] font-bold hover:bg-[#d86500] transition-colors shadow-md flex items-center'
							>
								<svg
									className='w-5 h-5 mr-2'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
									<circle cx='8.5' cy='8.5' r='1.5' />
									<polyline points='21 15 16 10 5 21' />
								</svg>
								Thêm ảnh tiêu đề
							</label>
						</div>
					)}
					{displayImageUrl && (
						<div
							className='w-[300px] h-[300px] bg-cover bg-center bg-no-repeat rounded-[5px] mt-4 relative border border-gray-200 shadow-md'
							style={{
								backgroundImage: `url('${displayImageUrl}')`,
							}}
						>
							<button
								onClick={handleImageDelete}
								className='p-1 rounded-full bg-[#F07202] hover:bg-[#d86500] transition-colors absolute top-4 right-4 shadow-md'
								title='Xóa ảnh'
							>
								<svg
									width='30px'
									height='30px'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g id='SVGRepo_bgCarrier' strokeWidth={0} />
									<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
									<g id='SVGRepo_iconCarrier'>
										{' '}
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z'
											fill='#fff'
										/>{' '}
									</g>
								</svg>
							</button>
							<div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-b-[5px]'>
								{isImageNew ? 'Ảnh mới đã chọn' : 'Ảnh hiện tại'}
							</div>
						</div>
					)}
				</div>
				<div className='mb-5 mt-8'>
					<div className='text-gray-700 font-medium mb-2'>Nội dung blog</div>
					<AddBlock value={content} onChange={(e) => setContent(e)} />
				</div>

				<div className='flex justify-end mt-8 mb-10 space-x-4'>
					<button
						onClick={() => router.push('/admin/blog')}
						className='rounded-[5px] text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 shadow-md'
					>
						Hủy bỏ
					</button>
					<button
						onClick={updateBlog}
						disabled={submitting}
						className='rounded-[5px] text-white bg-[#FF9900] hover:bg-[#e68a00] transition-colors px-4 py-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed'
					>
						{submitting ? 'Đang cập nhật...' : 'Lưu thay đổi'}
					</button>
				</div>
			</div>
		</Suspense>
	);
}
