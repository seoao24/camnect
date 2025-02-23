'use client';
import React from 'react'

export default function UserHero() {
    return (
        <div className='w-full h-[500px] bg-cover bg-no-repeat my-10 flex justify-center items-center'
            style={{
                backgroundImage: `url('/assets/images/background.png')`
            }}>
            <div>
                <div className="w-[225px] h-[225px] rounded-[50%] border-[2px] border-white bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url('/assets/images/avatar.png')`
                    }}></div>
                <div className="text-[36px] text-white font-bold text-center">Lyn Nguyen</div>
                <div className="text-center text-white text-[24px]">978 người theo dõi</div>
                <div className="flex justify-center">
                    <div className="w-[150px] h-[50px] bg-contain bg-no-repeat"
                        style={{
                            backgroundImage: `url('/assets/images/follow.png')`
                        }}></div>
                </div>
            </div>
        </div>
    )
}
