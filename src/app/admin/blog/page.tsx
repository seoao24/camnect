/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';
import axiosInstance from '@/api/apiBase';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { toast } from 'react-toastify';

interface BlogModel {
	id: string;
	title: string;
	imageUrl: string | null;
	content: string;
	createdDate: string;
	updatedDate: string;
	isDeleted: boolean;
}

// Enum cho loại tìm kiếm
enum TypeSearch {
	All = 0,
	ByTitle = 1,
	ByContent = 2,
}

export default function Blog() {
	const [blogs, setBlogs] = useState<BlogModel[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
	const [blogToDelete, setBlogToDelete] = useState<string | null>(null);
	const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

	// State cho tìm kiếm
	const [keyword, setKeyword] = useState<string>('');
	const [typeSearch, setTypeSearch] = useState<TypeSearch>(TypeSearch.All);
	const [totalResults, setTotalResults] = useState<number>(0);
	const [isSearching, setIsSearching] = useState<boolean>(false);

	// Hàm lấy danh sách blog
	const getBlog = async () => {
		try {
			setLoading(true);
			const response = await axiosInstance.get('/Blog/get-list-blog');
			setBlogs(response?.data?.data || []);
			setTotalResults(response?.data?.data?.length || 0);
		} catch (error) {
			console.error('Lỗi khi lấy danh sách blog:', error);
			toast.error('Không thể tải danh sách blog');
		} finally {
			setLoading(false);
		}
	};

	const searchBlogs = async () => {
		if (!keyword.trim() && typeSearch === TypeSearch.All) {
			// Nếu không có từ khóa và loại tìm kiếm là All, lấy tất cả blog
			getBlog();
			return;
		}

		try {
			setIsSearching(true);
			setLoading(true);

			const params = {
				Keyword: keyword.trim(),
				TypeSearch: typeSearch,
				Total: 100, // Số lượng kết quả tối đa
			};

			const response = await axiosInstance.get('/Blog/Search', { params });
			console.log('Search response:', response); // Debug để xem cấu trúc response

			// Kiểm tra cấu trúc dữ liệu response từ API Search
			if (response.data && Array.isArray(response.data)) {
				// Trường hợp 1: API trả về mảng trực tiếp
				setBlogs(response.data);
				setTotalResults(response.data.length);
			} else if (response.data && Array.isArray(response.data.data)) {
				// Trường hợp 2: API trả về object có data là mảng
				setBlogs(response.data.data);
				setTotalResults(response.data.totalRecords || response.data.data.length);
			} else if (response.data && response.data.result && Array.isArray(response.data.result)) {
				// Trường hợp 3: API trả về object có result là mảng
				setBlogs(response.data.result);
				setTotalResults(response.data.totalRecords || response.data.result.length);
			} else {
				// Không tìm thấy dữ liệu phù hợp
				setBlogs([]);
				setTotalResults(0);
				console.error('Không thể xác định cấu trúc dữ liệu từ API Search');
			}
		} catch (error) {
			console.error('Lỗi khi tìm kiếm blog:', error);
			toast.error('Lỗi khi tìm kiếm, vui lòng thử lại');
			setBlogs([]);
			setTotalResults(0);
		} finally {
			setLoading(false);
			setIsSearching(false);
		}
	};

	// Reset tìm kiếm
	const resetSearch = () => {
		setKeyword('');
		setTypeSearch(TypeSearch.All);
		getBlog();
	};

	useEffect(() => {
		getBlog();
	}, []);

	const formatDate = (dateString: string) => {
		try {
			const date = new Date(dateString);
			return format(date, 'dd/MM/yyyy HH:mm', { locale: vi });
		} catch (error) {
			return 'Không có dữ liệu';
		}
	};

	const openDeleteConfirm = (id: string) => {
		setBlogToDelete(id);
		setShowConfirmDialog(true);
	};

	const closeDeleteConfirm = () => {
		setBlogToDelete(null);
		setShowConfirmDialog(false);
	};

	const handleDelete = async () => {
		if (!blogToDelete) return;

		try {
			setConfirmLoading(true);
			await axiosInstance.post(`/Blog/Delete?id=${blogToDelete}`);
			toast.success('Xóa blog thành công');

			// Nếu đang tìm kiếm, cập nhật kết quả tìm kiếm, ngược lại lấy tất cả blog
			if (keyword.trim() && typeSearch !== TypeSearch.All) {
				searchBlogs();
			} else {
				getBlog();
			}

			closeDeleteConfirm();
		} catch (error) {
			console.error('Lỗi khi xóa blog:', error);
			toast.error('Lỗi khi xóa blog, vui lòng thử lại');
		} finally {
			setConfirmLoading(false);
		}
	};

	// Tìm title của blog đang được xóa để hiển thị trong dialog
	const findBlogTitle = () => {
		if (!blogToDelete) return '';
		const blog = blogs.find((b) => b.id === blogToDelete);
		if (!blog) return '';

		// Rút gọn tiêu đề nếu quá dài
		return blog.title.length > 50 ? `${blog.title.substring(0, 50)}...` : blog.title;
	};

	// Handle enter key press trong ô tìm kiếm
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			searchBlogs();
		}
	};

	return (
		<div className='p-6 bg-gray-50 min-h-screen'>
			<div className='flex justify-between items-center mb-6'>
				<div className='text-[28px] font-bold text-[#F07202]'>Danh sách blogs</div>
				<Link
					href={'/admin/blog/create'}
					className='rounded-[5px] px-4 py-2 text-white bg-[#F07202] font-medium hover:bg-[#d86500] transition-colors shadow-md flex items-center'
				>
					<svg className='w-5 h-5 mr-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M12 6v6m0 0v6m0-6h6m-6 0H6'
						/>
					</svg>
					Thêm blog mới
				</Link>
			</div>

			{/* Search Section */}
			<div className='bg-white rounded-lg shadow-md p-4 mb-6'>
				<div className='flex flex-col md:flex-row md:items-center gap-4'>
					<div className='flex-grow'>
						<div className='relative'>
							<input
								type='text'
								value={keyword}
								onChange={(e) => setKeyword(e.target.value)}
								onKeyDown={handleKeyDown}
								placeholder='Tìm kiếm blog...'
								className='w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F07202] focus:border-transparent'
							/>
							<div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
								<svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
									/>
								</svg>
							</div>
						</div>
					</div>

					<div className='flex'>
						<select
							value={typeSearch}
							onChange={(e) => setTypeSearch(parseInt(e.target.value) as TypeSearch)}
							className='border border-gray-300 rounded-lg px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-[#F07202] focus:border-transparent'
						>
							<option value={TypeSearch.All}>Tất cả</option>
							<option value={TypeSearch.ByTitle}>Theo tiêu đề</option>
							<option value={TypeSearch.ByContent}>Theo nội dung</option>
						</select>

						<button
							onClick={searchBlogs}
							disabled={loading || isSearching}
							className='bg-[#F07202] text-white rounded-lg px-4 py-2 hover:bg-[#d86500] transition-colors shadow-sm flex items-center'
						>
							{isSearching ? (
								<>
									<svg
										className='animate-spin h-4 w-4 mr-2'
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
									Đang tìm...
								</>
							) : (
								'Tìm kiếm'
							)}
						</button>

						{(keyword.trim() || typeSearch !== TypeSearch.All) && (
							<button
								onClick={resetSearch}
								className='ml-2 bg-gray-200 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-300 transition-colors shadow-sm'
							>
								Đặt lại
							</button>
						)}
					</div>
				</div>

				{/* Search Results Summary */}
				{blogs.length > 0 && (
					<div className='mt-4 text-sm text-gray-600'>
						Tìm thấy {totalResults} kết quả {keyword.trim() && `cho "${keyword}"`}
					</div>
				)}
			</div>

			{loading ? (
				<div className='flex justify-center items-center p-8'>
					<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F07202]'></div>
				</div>
			) : blogs.length === 0 ? (
				<div className='bg-white p-6 rounded-lg shadow-md text-center'>
					{keyword.trim() ? (
						<div>
							<svg
								className='w-16 h-16 text-gray-400 mx-auto mb-4'
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
							<p className='text-gray-500 text-lg'>
								Không tìm thấy kết quả phù hợp với từ khóa "{keyword}"
							</p>
							<button
								onClick={resetSearch}
								className='mt-4 bg-[#F07202] text-white rounded-lg px-4 py-2 hover:bg-[#d86500] transition-colors'
							>
								Xem tất cả blog
							</button>
						</div>
					) : (
						<p className='text-gray-500 text-lg'>Chưa có bài blog nào. Hãy tạo blog mới!</p>
					)}
				</div>
			) : (
				<div className='overflow-x-auto rounded-lg shadow-md'>
					<table className='min-w-full border-collapse bg-white'>
						<thead>
							<tr className='bg-gradient-to-r from-[#F07202] to-[#FF9900] text-white'>
								<th className='px-6 py-3 text-left text-sm font-medium'>STT</th>
								<th className='px-6 py-3 text-left text-sm font-medium'>Hình ảnh</th>
								<th className='px-6 py-3 text-left text-sm font-medium'>Tiêu đề</th>
								<th className='px-6 py-3 text-left text-sm font-medium'>Ngày cập nhật</th>
								<th className='px-6 py-3 text-left text-sm font-medium'>Hành động</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-200'>
							{blogs.map((blog, index) => (
								<tr key={blog.id} className='hover:bg-gray-50 transition-colors'>
									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{index + 1}</td>
									<td className='px-6 py-4 whitespace-nowrap'>
										{blog.imageUrl ? (
											<div
												className='w-[80px] h-[60px] bg-cover bg-center bg-no-repeat rounded-md shadow-sm border border-gray-200'
												style={{
													backgroundImage: `url('https://api.tapta.online/${blog.imageUrl}')`,
												}}
											></div>
										) : (
											<div className='w-[80px] h-[60px] bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-xs'>
												No Image
											</div>
										)}
									</td>
									<td className='px-6 py-4'>
										<div className='max-w-xs'>
											<p className='text-sm font-medium text-gray-900 truncate'>{blog.title}</p>
										</div>
									</td>
									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
										{formatDate(blog.updatedDate)}
									</td>
									<td className='px-6 py-4 whitespace-nowrap text-sm'>
										<div className='flex space-x-3'>
											<Link
												href={`/admin/blog/update?id=${blog.id}`}
												className='text-blue-600 hover:text-blue-800 transition-colors'
												title='Chỉnh sửa'
											>
												<svg
													width='24px'
													height='24px'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												>
													<path d='M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8' />
													<polygon points='12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8' />
												</svg>
											</Link>
											<button
												onClick={() => openDeleteConfirm(blog.id)}
												className='text-red-600 hover:text-red-800 transition-colors'
												title='Xóa'
											>
												<svg
													width='24px'
													height='24px'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												>
													<path d='M10 11V17' />
													<path d='M14 11V17' />
													<path d='M4 7H20' />
													<path d='M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z' />
													<path d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z' />
												</svg>
											</button>
											<Link
												href={`/admin/blog/${blog.id}`}
												className='text-green-600 hover:text-green-800 transition-colors'
												title='Xem blog'
											>
												<svg
													width='24px'
													height='24px'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												>
													<path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
													<path d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
												</svg>
											</Link>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}

			{/* Custom Confirm Dialog */}
			{showConfirmDialog && (
				<div className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center'>
					<div className='bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden transform transition-all'>
						{/* Header */}
						<div className='bg-red-600 px-6 py-4 flex items-center'>
							<div className='mr-4'>
								<svg
									className='h-8 w-8 text-white'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
									/>
								</svg>
							</div>
							<div>
								<h3 className='text-lg font-medium text-white'>Xác nhận xóa</h3>
							</div>
						</div>

						{/* Content */}
						<div className='px-6 py-4'>
							<p className='text-gray-700 mb-2'>Bạn có chắc chắn muốn xóa blog:</p>
							<p className='font-medium text-gray-900 break-words'>&quot;{findBlogTitle()}&quot;</p>
							<p className='mt-2 text-sm text-gray-500'>Hành động này không thể hoàn tác.</p>
						</div>

						{/* Footer */}
						<div className='bg-gray-50 px-6 py-3 flex justify-end space-x-3'>
							<button
								onClick={closeDeleteConfirm}
								className='px-4 py-2 rounded text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors'
								disabled={confirmLoading}
							>
								Hủy
							</button>
							<button
								onClick={handleDelete}
								className='px-4 py-2 rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors flex items-center'
								disabled={confirmLoading}
							>
								{confirmLoading ? (
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
										Đang xóa...
									</>
								) : (
									'Xóa blog'
								)}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
