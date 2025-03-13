'use client';
import { UserInfo } from '@/layout/app-header';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

export default function UserHero() {
    const [currentUser, setCurrentUser] = useState<UserInfo>();
    const [avatarUrl, setAvatarUrl] = useState("/assets/images/default-image.jpg");
    useEffect(() => {
        const userString = Cookies.get("currentUser");
        const user = JSON.parse(userString);
        setCurrentUser(user);
        setAvatarUrl(`${process.env.NEXT_PUBLIC_API_URL}/${currentUser?.avatarUrl}`)
    }, [])
    return (
        <div className='w-full md:h-[500px] bg-cover bg-center bg-no-repeat md:py-10 py-5'
            style={{
                backgroundImage: `url('/assets/images/user-background.png'')`
            }}>
            <div className='flex justify-center'>
                <label htmlFor="avatar">
                    <div className="md:w-[225px] md:h-[225px] bg-white w-[95px] h-[95px] rounded-[50%] border-[2px] border-white bg-cover bg-no-repeat bg-center"
                        style={{
                            backgroundImage: `url('${avatarUrl}')`
                        }}></div>
                </label>
            </div>
            <div className="md:text-[36px] text-[14px] text-[#F07202] font-bold text-center">{currentUser?.fullname}</div>
            <div className="text-center text-[#F07202] md:text-[24px] text-[12px]">978 người theo dõi</div>
            <div className="flex justify-center">
                <div className="md:w-[150px] md:h-[50px] w-[50px] h-[20px] bg-contain bg-no-repeat"
                    style={{
                        backgroundImage: `url('/assets/images/follow.png')`
                    }}></div>
            </div>
        </div>
    )
}
