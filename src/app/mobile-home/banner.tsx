'use client';
import React from 'react'

export default function HomeBanner() {
    return (
        <div className='mt-5'>
            <div className="w-full h-[322px] bg-contain bg-no-repeat" style={{
                backgroundImage: `url('/assets/images/home-mobile-banner1.png')`
            }}></div>
            <div className="grid grid-cols-2 gap-1 mt-3 px-2">
                <div className="h-[155px] bg-contain bg-no-repeat w-full" style={{
                    backgroundImage: `url('/assets/images/mobile-home-banner1.png')`
                }}></div>
                <div className="h-[155px] bg-contain bg-no-repeat w-full" style={{
                    backgroundImage: `url('/assets/images/mobile-home-banner2.png')`
                }}></div>
            </div>
        </div>
    )
}
