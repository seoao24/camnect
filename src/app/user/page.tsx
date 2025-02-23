'use client';
import React, { useState } from 'react'
import UserHero from './user-hero'
import PostFeature from './post';
import FollowFeature from './follow';
import ChatFeature from './chat';
import ProfileFeature from './profile';
import CalendarFeature from './calendar';

const menu = [
  {
    icon: '/assets/images/post-icon.png',
    title: 'Bài đăng',
    link: '/post'
  },
  {
    icon: '/assets/images/follow-icon.png',
    title: 'Theo dõi',
    link: '/follow'
  },
  {
    icon: '/assets/images/chat-icon.png',
    title: 'Tin nhắn',
    link: '/chat'
  },
  {
    icon: '/assets/images/personal-icon.png',
    title: 'Thông tin cá nhân',
    link: '/personal'
  },
  {
    icon: '/assets/images/calendar.png',
    title: 'Lịch',
    link: '/calendar'
  }
]
export default function Personal() {
  const [selectedMenu, setSelectedMenu] = useState(menu[0].link);
  return (
    <div>
      <UserHero />
      {/* <div className="flex justify-center">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <button className="bg-[#F07202] rounded-[10px] flex px-4 py-2 items-center w-[500px]">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ffffff"></path> </g></svg>
                <div className='text-[24px] text-white ml-2'>Tạo bài viết mới!</div>
              </button>
              <button className="flex px-4 py-2 rounded-[10px] bg-[#EAEAEA] my-4">
                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#545353" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#545353" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon> </g> </g> </g> </g></svg>
                <div className="text-[#545353] ml-2">Chỉnh sửa Trang của tôi</div>
              </button>
            </div>
            <div className='flex'>
              <button className='flex items-center py-2 px-4 bg-[#EAEAEA] rounded-[5px] mx-4'>
                <div className="w-[35px] h-[35px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url('/assets/images/foot-icon.png')`
                  }}></div>
                <div className="font-bold text-[#6B716E] text-[24px] ml-2">Dấu chân</div>
              </button>
              <button className='flex items-center py-2 px-4 bg-[#EAEAEA] rounded-[5px]'>
                <div className="w-[35px] h-[35px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url('/assets/images/like-icon.png')`
                  }}></div>
                <div className="font-bold text-[#6B716E] text-[24px] ml-2">97 Like</div>
              </button>
            </div>
          </div>
          <hr className='w-full h-[2px] bg-[#BCBCBC]' />
          <div className="grid grid-cols-5 gap-4 my-10">
            {
              menu.map(e => (
                <div key={e.link} className='shadow-lg rounded-[10px] flex px-4 items-center cursor-pointer'
                  onClick={() => setSelectedMenu(e.link)}>
                  <div className="bg-no-repeat bg-cover w-[35px] h-[35px]"
                    style={{
                      backgroundImage: `url('${e.icon}')`
                    }}></div>
                  <div className={`ml-2 text-[24px] ${selectedMenu == e.link ? 'font-bold' : ''}`}>{e.title}</div>
                </div>
              ))
            }
          </div>
          {
            selectedMenu == menu[0].link ? (
              <PostFeature />
            ) : selectedMenu == menu[1].link ? (
              <FollowFeature />
            ) : selectedMenu == menu[2].link ? (
              <ChatFeature />
            ): selectedMenu == menu[3].link ? (
              <ProfileFeature />
            ) : selectedMenu == menu[4].link ? (
              <CalendarFeature />
            ) : (
              <></>
            )
          }
        </div>
      </div> */}
    </div>
  )
}
