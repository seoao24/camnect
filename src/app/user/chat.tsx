'use client';
import React from 'react'

interface ChatUsers {
    avatarUrl: string,
    id: string,
    onlineStatusText: string,
    isOnline: boolean,
    fullname: string
}

const chatUsers: ChatUsers[] = [
    {
        id: "1",
        avatarUrl: "/assets/images/chat1.png",
        fullname: "Han Nguyen",
        isOnline: false,
        onlineStatusText: "7 phút trước"
    },
    {
        id: "2",
        avatarUrl: "/assets/images/chat2.png",
        fullname: "Trang Trang",
        isOnline: true,
        onlineStatusText: "Đang hoạt động"
    },
    {
        id: "3",
        avatarUrl: "/assets/images/chat3.png",
        fullname: "Thu Thao",
        isOnline: true,
        onlineStatusText: "Đang hoạt động"
    },
    {
        id: "4",
        avatarUrl: "/assets/images/chat4.png",
        fullname: "Anh Hang",
        isOnline: true,
        onlineStatusText: "Đang hoạt động"
    },
    {
        id: "5",
        avatarUrl: "/assets/images/chat5.png",
        fullname: "Le Thi Huong",
        isOnline: true,
        onlineStatusText: "Đang hoạt động"
    }
]
export default function ChatFeature() {
    return (
        <div className='rouned-[20px] shadow-lg border-l-[#EAEAEA] border-l-[2px] flex'>
            <div className='w-[350px] border-r-[#D9D9D9] border-r-[2px]'>
                <div className="flex p-4">
                    <button className='w-[50px] h-[40px] rounded-[5px] bg-[#BBB9B9] flex items-center justify-center mr-1'>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                    <input type="text" className='rounded-[5px] border-[#BCBCBC] border-[1px] p-2 outline-none' placeholder='Tìm kiếm' />
                </div>
                <div className="p-4">
                    {
                        chatUsers.map(e => (
                            <div key={e.id}>
                                <ChatUserItem
                                    avatarUrl={e.avatarUrl}
                                    fullname={e.fullname}
                                    id={e.id}
                                    isOnline={false}
                                    onlineStatusText={e.onlineStatusText}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full relative">
                <div className="">
                    <div className='flex items-center py-4 px-5 border-b-[1px] border-b-[#D9D9D9]'>
                        <div className="w-[65px] h-[65px] rounded-[50%] border-[#EAEAEA] bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url('${chatUsers[1].avatarUrl}')`
                            }}></div>
                        <div className='ml-4'>
                            <div className="text-[24px] font-bold">{chatUsers[1].fullname}</div>
                            <div className="flex items-center">
                                {
                                    chatUsers[1].isOnline ? (
                                        <div className='w-[16px] h-[16px] rounded-[50%] bg-[#FF8A8A]'></div>
                                    ) : (
                                        <div className='w-[16px] h-[16px] rounded-[50%] bg-[#9ADFA9]'></div>
                                    )
                                }
                                <div className="italic text-[20px] ml-2">{chatUsers[1].onlineStatusText}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 flex w-full px-10">
                    <button className='rounded-[5px] bg-[#D9D9D9] w-[55px] h-[40px] flex justify-center items-center mr-1'>
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
                                stroke="#666967"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <input type="text" className='rounded-[5px] border-[#BCBCBC] border-[1px] p-2 outline-none w-full' placeholder='Soạn tin nhắn...' />
                </div>
            </div>
        </div>
    )
}

function ChatUserItem(props: ChatUsers) {
    return (
        <div className='flex items-center my-4'>
            <div className="w-[75px] h-[75px] rounded-[50%] border-[#EAEAEA] bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('${props.avatarUrl}')`
                }}></div>
            <div className='ml-4'>
                <div className="text-[24px] font-bold">{props.fullname}</div>
                <div className="flex items-center">
                    {
                        props.isOnline ? (
                            <div className='w-[16px] h-[16px] rounded-[50%] bg-[#FF8A8A]'></div>
                        ) : (
                            <div className='w-[16px] h-[16px] rounded-[50%] bg-[#9ADFA9]'></div>
                        )
                    }
                    <div className="italic text-[20px] ml-2">{props.onlineStatusText}</div>
                </div>
            </div>
        </div>
    )
}