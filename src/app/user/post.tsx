import React from 'react'
import Post from '../communications/post'
import ContactForm from './contact'

export default function PostFeature() {
    return (
        <div>
            <div className="flex my-5">
                <input type="text" className='border-none outline-none bg-[#F3F3F3] w-full' placeholder='Tìm kiếm' />
                <button className='w-[50px] h-[40px] rounded-[5px] bg-[#F07202] flex items-center justify-center ml-1'>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
            </div>
            <div className="flex">
                <div>
                    <div className="font-bold text-[36px]">
                        Bài viết
                    </div>
                    <Post
                        avatarUrl="/assets/images/relative1.png"
                        description="📸 Đây là khoảnh khắc mình chụp được trong một buổi chiều hoàng hôn ở ngoại ô. Ánh sáng tự nhiên hòa quyện với cảm xúc của người mẫu đã tạo nên một khung cảnh vừa chân thực vừa đầy cảm hứng."
                        fullname="Đặng Trung Hiếu"
                        imageUrls={[
                            "/assets/images/post1.png",
                            "/assets/images/post2.png",
                            "/assets/images/post3.png"
                        ]}
                        lastPost="1 giờ trước"
                        status="Thành viên mới"
                    />
                    <Post
                        avatarUrl="/assets/images/relative1.png"
                        description="📸 Đây là khoảnh khắc mình chụp được trong một buổi chiều hoàng hôn ở ngoại ô. Ánh sáng tự nhiên hòa quyện với cảm xúc của người mẫu đã tạo nên một khung cảnh vừa chân thực vừa đầy cảm hứng."
                        fullname="Đặng Trung Hiếu"
                        imageUrls={[
                            "/assets/images/post1.png",
                            "/assets/images/post2.png",
                            "/assets/images/post3.png"
                        ]}
                        lastPost="1 giờ trước"
                        status="Thành viên mới"
                    />
                </div>
                <div className="w-[400px] ml-4">
                    <ContactForm />
                    <div className='w-full h-[200px] rounded-[10px] bg-cover bg-no-repeat mt-4'
                    style={{
                        backgroundImage: "url('/assets/images/google-map.png')"
                    }}>

                    </div>
                </div>
            </div>
        </div>
    )
}
