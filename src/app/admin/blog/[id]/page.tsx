/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/api/apiBase';
import { useParams, useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import Link from 'next/link';
import { toast } from 'react-toastify';

interface BlogDetailType {
	id: string;
	title: string;
	imageUrl: string | null;
	content: string;
	createdBy: string;
	createdDate: string;
	updatedDate: string;
}

const BlogDetail = () => {
	const [blog, setBlog] = useState<BlogDetailType | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);
	const params = useParams();
	const router = useRouter();
	const blogId = params.id;

	// Hàm lấy thông tin chi tiết blog
	const getBlogDetail = async () => {
		if (!blogId) {
			toast.error('Không tìm thấy ID blog');
			router.push('/blog');
			return;
		}

		setLoading(true);
		try {
			const response = await axiosInstance.get(`/Blog/GetDetail`, {
				params: { id: blogId },
			});
			setBlog(response.data);

			// Lấy các bài blog liên quan
			fetchRelatedBlogs();
		} catch (error) {
			console.error('Error fetching blog detail:', error);
			toast.error('Không thể tải thông tin blog');
			router.push('/blog');
		} finally {
			setLoading(false);
		}
	};

	// Hàm lấy các bài blog liên quan
	const fetchRelatedBlogs = async () => {
		try {
			const response = await axiosInstance.get('/Blog/get-list-blog');
			if (response.data?.data) {
				// Lọc và lấy 3 bài blog khác (không bao gồm blog hiện tại)
				const filtered = response.data.data.filter((item: any) => item.id !== blogId).slice(0, 3);
				setRelatedBlogs(filtered);
			}
		} catch (error) {
			console.error('Error fetching related blogs:', error);
		}
	};

	useEffect(() => {
		getBlogDetail();
	}, [blogId]);

	// Hàm định dạng ngày tháng
	const formatDate = (dateString: string) => {
		try {
			const date = new Date(dateString);
			return format(date, 'dd MMMM, yyyy', { locale: vi });
		} catch (error) {
			return 'Không có dữ liệu';
		}
	};

	// Hiển thị trạng thái loading
	if (loading) {
		return (
			<div className='flex justify-center items-center min-h-screen bg-gray-50'>
				<div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#F07202]'></div>
			</div>
		);
	}

	// Hiển thị thông báo nếu không tìm thấy blog
	if (!blog) {
		return (
			<div className='min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4'>
				<div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center'>
					<svg
						className='w-20 h-20 text-gray-400 mx-auto mb-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					<h1 className='text-2xl font-bold text-gray-700 mb-4'>Không tìm thấy bài viết</h1>
					<p className='text-gray-500 mb-6'>Bài viết này có thể đã bị xóa hoặc không tồn tại.</p>
					<Link
						href='/blog'
						className='inline-block bg-[#F07202] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d86500] transition-colors'
					>
						Quay lại trang Blog
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<div
				className='w-full h-[400px] bg-center bg-cover relative'
				style={{
					backgroundImage: blog.imageUrl
						? `url('${process.env.NEXT_PUBLIC_API_URL}/${blog.imageUrl}')`
						: 'linear-gradient(135deg, #f5a623, #f07202)',
				}}
			>
				<div className='absolute inset-0 bg-black bg-opacity-50'></div>
				<div className='absolute inset-0 flex items-center justify-center px-4'>
					<div className='max-w-3xl mx-auto text-center'>
						<h1 className='text-4xl md:text-5xl font-bold text-white mb-4 leading-tight'>{blog.title}</h1>
						<div className='flex items-center justify-center text-white text-sm md:text-base'>
							<span className='mr-4'>{formatDate(blog.createdDate)}</span>
							<span className='mx-2'>•</span>
							<span>Camnect Blog</span>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className='max-w-4xl mx-auto px-4 py-12'>
				<div className='bg-white rounded-lg shadow-lg p-6 md:p-10'>
					{/* Blog Content */}
					<div className='prose prose-lg max-w-none' dangerouslySetInnerHTML={{ __html: blog.content }} />

					{/* Metadata và Tags */}
					<div className='mt-12 pt-6 border-t border-gray-200'>
						<div className='flex flex-wrap items-center text-sm text-gray-600'>
							<div className='mr-6 mb-2'>
								<span className='font-semibold text-gray-700'>Ngày đăng:</span>{' '}
								{formatDate(blog.createdDate)}
							</div>
							<div className='mr-6 mb-2'>
								<span className='font-semibold text-gray-700'>Cập nhật:</span>{' '}
								{formatDate(blog.updatedDate)}
							</div>
							<div className='flex-grow'></div>
							<div className='flex space-x-2'>
								<button
									className='p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors'
									title='Chia sẻ lên Facebook'
								>
									<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
										<path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' />
									</svg>
								</button>
								<button
									className='p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors'
									title='Chia sẻ lên Twitter'
								>
									<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
										<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.158 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z' />
									</svg>
								</button>
								<button
									className='p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors'
									title='Chia sẻ qua Email'
								>
									<svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Related Posts Section */}
				{relatedBlogs.length > 0 && (
					<div className='mt-12'>
						<h2 className='text-2xl font-bold text-gray-800 mb-6'>Bài viết liên quan</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{relatedBlogs.map((relatedBlog) => (
								<Link key={relatedBlog.id} href={`/admin/blog/${relatedBlog.id}`}>
									<div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
										<div
											className='h-48 bg-cover bg-center'
											style={{
												backgroundImage: relatedBlog.imageUrl
													? `url('${process.env.NEXT_PUBLIC_API_URL}/${relatedBlog.imageUrl}')`
													: 'linear-gradient(135deg, #f5a623, #f07202)',
											}}
										></div>
										<div className='p-4'>
											<h3 className='font-semibold text-lg text-gray-800 mb-2 line-clamp-2'>
												{relatedBlog.title}
											</h3>
											<p className='text-sm text-gray-500'>
												{formatDate(relatedBlog.updatedDate)}
											</p>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				)}

				{/* Back to Blog List Button */}
				<div className='mt-10 text-center'>
					<Link
						href='/admin/blog'
						className='inline-flex items-center px-6 py-3 bg-[#F07202] text-white font-medium rounded-lg hover:bg-[#d86500] transition-colors'
					>
						<svg className='w-5 h-5 mr-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M10 19l-7-7m0 0l7-7m-7 7h18'
							/>
						</svg>
						Trở về trang Blog
					</Link>
				</div>
			</div>

			{/* Footer */}
			<footer className='bg-gray-800 text-gray-300 mt-12 py-10'>
				<div className='max-w-6xl mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div>
							<h3 className='text-white text-lg font-semibold mb-4'>Về Camnect</h3>
							<p className='mb-4'>
								Nền tảng kết nối nhiếp ảnh gia và khách hàng hàng đầu Việt Nam, mang đến những trải
								nghiệm chụp ảnh chuyên nghiệp nhất.
							</p>
						</div>
						<div>
							<h3 className='text-white text-lg font-semibold mb-4'>Liên kết nhanh</h3>
							<ul className='space-y-2'>
								<li>
									<Link href='/' className='hover:text-white transition-colors'>
										Trang chủ
									</Link>
								</li>
								<li>
									<Link href='/blog' className='hover:text-white transition-colors'>
										Blog
									</Link>
								</li>
								<li>
									<Link href='/photographers' className='hover:text-white transition-colors'>
										Nhiếp ảnh gia
									</Link>
								</li>
								<li>
									<Link href='/services' className='hover:text-white transition-colors'>
										Dịch vụ
									</Link>
								</li>
								<li>
									<Link href='/contact' className='hover:text-white transition-colors'>
										Liên hệ
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className='text-white text-lg font-semibold mb-4'>Kết nối với chúng tôi</h3>
							<div className='flex space-x-4 mb-4'>
								<a href='#' className='text-gray-300 hover:text-white transition-colors'>
									<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
										<path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' />
									</svg>
								</a>
								<a href='#' className='text-gray-300 hover:text-white transition-colors'>
									<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
										<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.158 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z' />
									</svg>
								</a>
								<a href='#' className='text-gray-300 hover:text-white transition-colors'>
									<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
										<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
									</svg>
								</a>
							</div>
							<p className='text-sm'>
								Email: info@camnect.com
								<br />
								Điện thoại: +84 123 456 789
							</p>
						</div>
					</div>
					<div className='border-t border-gray-700 mt-8 pt-6 text-sm text-center'>
						<p>&copy; {new Date().getFullYear()} Camnect. Tất cả các quyền được bảo lưu.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default BlogDetail;
