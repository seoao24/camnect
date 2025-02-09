'use client';
import React from 'react'
import OrgangeButton from '../buttons/OrganeButton'

export default function CommonHero() {
    return (
        <div className="w-[100vw] h-[650px] my-[3rem] bg-[url('/assets/images/common-here.png')] bg-cover bg-no-repeat px-0 mx-0 md:relative flex justify-center">
            <div className="container text-white flex flex-cols items-center">
                <div>
                    <div className='text-[24px]'>Camnect –  Kết nối khoảnh khắc, lưu giữ kỷ niệm.</div>
                    <div className="text-[48px] font-bold my-3">Nơi khoảnh khắc trở thành kỷ niệm</div>
                    <OrgangeButton
                        onClick={() => { }}
                        title='Tham gia ngay!'
                    />
                </div>
            </div>
        </div>
    )
}
