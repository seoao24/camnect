'use client';
import React from 'react'

export default function UserHero() {
    return (
        <div className='w-full md:h-[500px] bg-cover bg-center bg-no-repeat md:py-10 py-5 flex justify-center items-center'
            style={{
                backgroundImage: `url('/assets/images/background.png')`
            }}>
            <div>
                <div className="md:w-[225px] md:h-[225px] w-[95px] h-[95px] rounded-[50%] border-[2px] border-white bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url('/assets/images/avatar.png')`
                    }}></div>
                <div className="md:text-[36px] text-[14px] text-white font-bold text-center">Lyn Nguyen</div>
                <div className="text-center text-white md:text-[24px] text-[12px]">978 người theo dõi</div>
                <div className="flex justify-center">
                    <div className="md:w-[150px] md:h-[50px] w-[50px] h-[20px] bg-contain bg-no-repeat"
                        style={{
                            backgroundImage: `url('/assets/images/follow.png')`
                        }}></div>
                </div>
            </div>
        </div>
    )
}
