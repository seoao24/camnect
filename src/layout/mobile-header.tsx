'use client';
import React from 'react'

export default function MobileHeader() {
    return (
        <div>
            <div className="bg-[#F07202] px-5 py-1 my-1 text-white text-[12px]">Nơi khoảnh khắc trở thành kỉ niệm!</div>
            <div className="mx-5 mt-2">
                <div className="bg-[#EBEBEB] rounded-[20px] flex py-1 px-3 items-center">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#8E8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <input type="text" name="" id="" className="bg-[#EBEBEB] border-none w-[calc(100%-40px)] outline-none px-2" placeholder="Tìm kiếm..." />
                </div>
            </div>
        </div>
    )
}
