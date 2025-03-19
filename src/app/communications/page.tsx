'use client';
import CommonHero from '@/components/heros/CommonHero';
import React, { useEffect, useState } from 'react';
import Post from './post';
import TopUser from './top-user';
import MobileHeader from '@/layout/mobile-header';
import PostFeature from '../user/post';
import axiosInstance from '@/api/apiBase';

const SortTime = ['Tuần', 'Tháng', 'Năm'];

const menuItems = [
	{
		id: 'post',
		title: 'Bài đăng',
	},
	{
		id: 'gioi-thieu',
		title: 'Giới thiệu',
	},
	{
		id: 'bxh',
		title: 'BXH',
	},
];
interface PostResponse {
	id: string;
	description: string;
	createdDateAgo: string;
	totalLike: number;
	totalComment: number;
	createdDate: string; // Hoặc Date nếu bạn muốn xử lý dạng Date trong JS
	imageUrls: string[];
	likedByUser: boolean;
	userFullname: string;
	userAvatar: string | null;
	typeUser: string;
	userId: string;
}
export default function Communications() {
	const [selectedSortTime, setSelectedSortTime] = useState(SortTime[0]);
	const [selectedMenu, setSelectedMenu] = useState(menuItems[0].id);
	const [posts, setPosts] = useState<PostResponse[]>([]);
	const getPosts = async () => {
		const response = await axiosInstance.get('/Post/Search');
		setPosts(response.data);
	};

	useEffect(() => {
		getPosts();
	}, []);
	return (
		<div>
			<div className='md:block hidden'>
				<CommonHero />
				<div className='flex justify-center'>
					<div className='container flex'>
						<div className='w-full'>
							<div className='text-[40px] text-[#F07202] font-bold'>DÒNG THỜI GIAN</div>
							{posts.map((e, index) => (
								<div key={e.id + '-' + index} className='w-full'>
									<Post
										id={e.id}
										avatarUrl={e.userAvatar}
										description={e.description}
										fullname={e.userFullname}
										imageUrls={e.imageUrls}
										lastPost={e.createdDateAgo}
										status={e.typeUser}
										totalComment={e.totalComment}
										totalLike={e.totalLike}
										likedByUser={false}
									/>
								</div>
							))}
						</div>
						<div className='ml-3'>
							<div className='w-[315px] rounded-[20px] shadow-lg px-5 py-5'>
								<div className='text-[16px] font-bold text-[#F07202]'>GIỚI THIỆU</div>
								<div className='text-[12px]'>
									<div className='font-bold'>✨ Chào mừng đến với Group Camnect ✨</div>
									<div>📸 Bạn có thể làm gì trong group Camnect?</div>
									<div className='font-bold'>Đối với nhiếp ảnh gia:</div>
									<ul>
										<li>
											Tự do đăng bài chia sẻ hình ảnh, những tác phẩm tâm đắc, hoặc khoảnh khắc
											đẹp mà bạn ghi lại.
										</li>
										<li>Kể câu chuyện đằng sau mỗi bức ảnh để lan tỏa cảm hứng.</li>
										<li>Tìm kiếm khách hàng mới và nhận feedback từ cộng đồng.</li>
									</ul>
									<div className='font-bold'>Đối với người thuê chụp ảnh:</div>
									<ul>
										<li>
											Dễ dàng khám phá những bức ảnh tuyệt đẹp và phong cách đa dạng từ các nhiếp
											ảnh gia
										</li>
										<li>Like ảnh và để lại bình luận để bày tỏ cảm xúc hoặc đặt câu hỏi.</li>
										<li>Tìm kiếm nhiếp ảnh gia phù hợp cho nhu cầu chụp ảnh của mình.</li>
									</ul>
									<div className='font-bold mt-2'>💬 Quy tắc cộng đồng:</div>
									<ul>
										<li>Tôn trọng và hỗ trợ lẫn nhau.</li>
										<li>Không đăng nội dung không liên quan đến nhiếp ảnh.</li>
										<li>Luôn giữ thái độ tích cực khi bình luận hoặc phản hồi.</li>
									</ul>
									<div className='mt-3'>
										🚀 Hãy cùng nhau lan tỏa niềm đam mê nhiếp ảnh và biến group Camnect thành nơi
										chia sẻ đầy ý nghĩa!
									</div>
									<div className='mt-3'>
										Tham gia ngay để kết nối, khám phá và tạo nên những kỷ niệm khó quên! ❤️
									</div>
								</div>
							</div>
							<div className='w-[315px] rounded-[20px] shadow-lg px-5 py-5'>
								<div className='text-[16px] font-bold text-[#F07202]'>BẢNG XẾP HẠNG</div>
								<div className='flex justify-between items-center mt-5'>
									{SortTime.map((time) => {
										return (
											<div
												key={time}
												className={`px-2 cursor-pointer font-bold ${
													selectedSortTime == time
														? 'text-[#F07202] border-[1px] rounded-[10px] border-[#F07202]'
														: ''
												}`}
												onClick={() => setSelectedSortTime(time)}
											>
												{time}
											</div>
										);
									})}
								</div>
								<div>
									<TopUser
										avatarUrl='/assets/images/last-news1.png'
										fullname='Đặng Trung Hiếu'
										point={1289}
										top={1}
									/>
									<TopUser
										avatarUrl='/assets/images/relative2.png'
										fullname='Trần Gia Bảo'
										point={1289}
										top={2}
									/>
									<TopUser
										avatarUrl='/assets/images/relative2.png'
										fullname='Ly Nguyen'
										point={1289}
										top={3}
									/>
									<TopUser
										avatarUrl='/assets/images/relative2.png'
										fullname='Phạm Hoài Nam'
										point={1289}
										top={4}
									/>
									<TopUser
										avatarUrl='/assets/images/relative2.png'
										fullname='Quảng Thị Nga'
										point={1289}
										top={5}
									/>
									<TopUser
										avatarUrl='/assets/images/relative2.png'
										fullname='Nguyen Trang'
										point={1289}
										top={6}
									/>
									<TopUser
										avatarUrl='/assets/images/relative2.png'
										fullname='Trần Đàm Hiếu'
										point={1289}
										top={7}
									/>
									<TopUser
										avatarUrl='/assets/images/relative2.png'
										fullname='Hoài Lê'
										point={1289}
										top={8}
									/>
									<TopUser
										avatarUrl='/assets/images/relative2.png'
										fullname='Lyn Nguyen'
										point={1289}
										top={9}
									/>
									<TopUser
										avatarUrl='/assets/images/relative2.png'
										fullname='Khánh An'
										point={1289}
										top={10}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='md:hidden'>
				<MobileHeader />
				<div className='px-3'>
					<div className='grid grid-cols-3 gap-4 mt-5'>
						{menuItems.map((e) => (
							<div
								key={e.id}
								className={`text-center py-1 rounded-[10px] ${
									selectedMenu == e.id
										? 'text-white bg-[#F07202]'
										: 'bg-white border-[1px] border-[#B3B3B3]'
								}`}
								onClick={() => setSelectedMenu(e.id)}
							>
								{e.title}
							</div>
						))}
					</div>
				</div>
				{selectedMenu == menuItems[0].id ? (
					<PostFeature />
				) : selectedMenu == menuItems[1].id ? (
					<div className='px-3'>
						<div className='w-full rounded-[20px] shadow-lg px-5 py-5'>
							<div className='text-[16px] font-bold text-[#F07202]'>GIỚI THIỆU</div>
							<div className='text-[12px]'>
								<div className='font-bold'>✨ Chào mừng đến với Group Camnect ✨</div>
								<div>📸 Bạn có thể làm gì trong group Camnect?</div>
								<div className='font-bold'>Đối với nhiếp ảnh gia:</div>
								<ul>
									<li>
										Tự do đăng bài chia sẻ hình ảnh, những tác phẩm tâm đắc, hoặc khoảnh khắc đẹp mà
										bạn ghi lại.
									</li>
									<li>Kể câu chuyện đằng sau mỗi bức ảnh để lan tỏa cảm hứng.</li>
									<li>Tìm kiếm khách hàng mới và nhận feedback từ cộng đồng.</li>
								</ul>
								<div className='font-bold'>Đối với người thuê chụp ảnh:</div>
								<ul>
									<li>
										Dễ dàng khám phá những bức ảnh tuyệt đẹp và phong cách đa dạng từ các nhiếp ảnh
										gia
									</li>
									<li>Like ảnh và để lại bình luận để bày tỏ cảm xúc hoặc đặt câu hỏi.</li>
									<li>Tìm kiếm nhiếp ảnh gia phù hợp cho nhu cầu chụp ảnh của mình.</li>
								</ul>
								<div className='font-bold mt-2'>💬 Quy tắc cộng đồng:</div>
								<ul>
									<li>Tôn trọng và hỗ trợ lẫn nhau.</li>
									<li>Không đăng nội dung không liên quan đến nhiếp ảnh.</li>
									<li>Luôn giữ thái độ tích cực khi bình luận hoặc phản hồi.</li>
								</ul>
								<div className='mt-3'>
									🚀 Hãy cùng nhau lan tỏa niềm đam mê nhiếp ảnh và biến group Camnect thành nơi chia
									sẻ đầy ý nghĩa!
								</div>
								<div className='mt-3'>
									Tham gia ngay để kết nối, khám phá và tạo nên những kỷ niệm khó quên! ❤️
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className='px-3'>
						<div className='w-full rounded-[20px] shadow-lg px-10 py-5'>
							<div className='text-[16px] font-bold text-[#F07202]'>BẢNG XẾP HẠNG</div>
							<div className='flex justify-between items-center mt-5'>
								{SortTime.map((time) => {
									return (
										<div
											key={time}
											className={`px-2 cursor-pointer font-bold ${
												selectedSortTime == time
													? 'text-[#F07202] border-[1px] rounded-[10px] border-[#F07202]'
													: ''
											}`}
											onClick={() => setSelectedSortTime(time)}
										>
											{time}
										</div>
									);
								})}
							</div>
							<div>
								<TopUser
									avatarUrl='/assets/images/last-news1.png'
									fullname='Đặng Trung Hiếu'
									point={1289}
									top={1}
								/>
								<TopUser
									avatarUrl='/assets/images/relative2.png'
									fullname='Trần Gia Bảo'
									point={1289}
									top={2}
								/>
								<TopUser
									avatarUrl='/assets/images/relative2.png'
									fullname='Ly Nguyen'
									point={1289}
									top={3}
								/>
								<TopUser
									avatarUrl='/assets/images/relative2.png'
									fullname='Phạm Hoài Nam'
									point={1289}
									top={4}
								/>
								<TopUser
									avatarUrl='/assets/images/relative2.png'
									fullname='Quảng Thị Nga'
									point={1289}
									top={5}
								/>
								<TopUser
									avatarUrl='/assets/images/relative2.png'
									fullname='Nguyen Trang'
									point={1289}
									top={6}
								/>
								<TopUser
									avatarUrl='/assets/images/relative2.png'
									fullname='Trần Đàm Hiếu'
									point={1289}
									top={7}
								/>
								<TopUser
									avatarUrl='/assets/images/relative2.png'
									fullname='Hoài Lê'
									point={1289}
									top={8}
								/>
								<TopUser
									avatarUrl='/assets/images/relative2.png'
									fullname='Lyn Nguyen'
									point={1289}
									top={9}
								/>
								<TopUser
									avatarUrl='/assets/images/relative2.png'
									fullname='Khánh An'
									point={1289}
									top={10}
								/>
							</div>
						</div>
					</div>
				)}
				{/* <PostFeature/> */}
			</div>
		</div>
	);
}
