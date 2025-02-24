import Link from 'next/link'
import React from 'react'
import QRPay from './qr-pay'

export default function PaymentMethod() {
    return (
        <div className='flex justify-center'>
            <div className="container flex border-[#8E8B8B] border-t-[1px] mt-10 px-10">
                <div className="bg-white shadow-r-md px-10 py-10">
                    <div className="max-w-[554px] font-bold text-[36px] text-[#F07202]">Camnect - Nơi khoảnh khắc trở thành kỷ niệm</div>
                    <div className="flex text-[20px] mt-7">
                        <Link className="text-[#F07202]" href={''}>{`Giỏ hàng>`}</Link>
                        <Link className="text-[#F07202]" href={''}>{`Thông tin>`}</Link>
                        <div className=""> Thanh toán/Đặt cọc</div>
                    </div>
                    <div className='text-[30px] font-[600] mt-5 mb-3'>
                        Thanh toán
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div className="bg-[#FF9900] rounded-[5px] shadow-md py-3 px-4 text-white font-[400] cursor-pointer">Thanh toán toàn bộ</div>
                            <div className='text-[13px] text-[#6B716E] py-2'>2.500.000</div>
                        </div>
                        <div>
                            <div className="bg-[#FF9900] rounded-[5px] shadow-md py-3 px-4 text-white font-[400] cursor-pointer">Thanh toán số tiền đặt cọc</div>
                            <div className='text-[13px] text-[#6B716E] py-2'>500.000</div>
                        </div>
                    </div>
                    <div className="rounded-[5px] border-[#8E8B8B] border-[1px] w-full mt-10">
                        <div className="flex py-3 px-3 border-[#8E8B8B] border-b-[1px]">
                            <input type="radio" className='w-[24px] h-[24px] rounded-[50%]' id='vnpay' name='payment-method' />
                            <label htmlFor="vnpay" className='text-[16px] text-[#6B716E] ml-5'>Thanh toán qua VNPAY</label>
                        </div>
                        <div className="flex py-3 px-3 border-[#8E8B8B] border-b-[1px]">
                            <input type="radio" className='w-[24px] h-[24px] rounded-[50%]' id='zalopay' name='payment-method' />
                            <label htmlFor="zalopay" className='text-[16px] text-[#6B716E] ml-5'>Thanh toán qua ZaloPay</label>
                        </div>
                        <div className="flex py-3 px-3 border-[#8E8B8B] border-b-[1px]">
                            <input type="radio" className='w-[24px] h-[24px] rounded-[50%]' id='momo' name='payment-method' />
                            <label htmlFor="momo" className='text-[16px] text-[#6B716E] ml-5'>Thanh toán qua MoMo</label>
                        </div>
                        <div className="flex py-3 px-3 border-[#8E8B8B] border-b-[1px]">
                            <input type="radio" className='w-[24px] h-[24px] rounded-[50%]' id='nganluong' name='payment-method' />
                            <label htmlFor="nganluong" className='text-[16px] text-[#6B716E] ml-5'>Thanh toán qua Ngân lượng</label>
                        </div>
                        <div className="flex py-3 px-3 border-[#8E8B8B] border-b-[1px]">
                            <input type="radio" className='w-[24px] h-[24px] rounded-[50%]' id='webmoney' name='payment-method' />
                            <label htmlFor="webmoney" className='text-[16px] text-[#6B716E] ml-5'>Thanh toán qua WebMoney</label>
                        </div>
                        <div className="flex py-3 px-3 border-[#8E8B8B] border-b-[1px]">
                            <input type="radio" className='w-[24px] h-[24px] rounded-[50%]' id='mocha' name='payment-method' />
                            <label htmlFor="mocha" className='text-[16px] text-[#6B716E] ml-5'>Thanh toán qua Mocha</label>
                        </div>
                        <div className="flex py-3 px-3 border-[#8E8B8B] border-b-[1px]">
                            <input type="radio" className='w-[24px] h-[24px] rounded-[50%] bg-[#FF9900]' id='vtcpay' name='payment-method' />
                            <label htmlFor="vtcpay" className='text-[16px] text-[#6B716E] ml-5'>Thanh toán qua VTC Pay</label>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-5">
                        <Link href={'/'} className='text-[#F07202] text-[15px]'>
                            {`< Thông tin`}
                        </Link>
                        <QRPay />
                    </div>
                </div>
                <div className="max-w-[700px] w-full">
                    <div className="text-[#777777] text-[30px] text-center py-10 border-[#8E8B8B] border-b-[1px] w-full">Đơn hàng ( 1 sản phẩm )</div>
                    <div className="px-5">
                        <div className="flex items-center py-5 border-[#8E8B8B] border-b-[1px]">
                            <div className="text-[20px] text-[#F07202] border-[#8E8B8B] border-r-[1px] pr-2">Lyn Nguyen</div>
                            <Link href={'/chat'} className='text-[12px] font-bold pl-2'>Chat ngay</Link>
                        </div>
                    </div>
                    <div className="flex py-5 px-5">
                        <div className="w-[268px] h-[208px] bg-cover bg-no-repeat" style={{
                            backgroundImage: `url('/assets/images/payment-image.png')`
                        }}></div>
                        <div className='flex flex-col justify-between px-5'>
                            <div>
                                <div className="text-[16px] font-bold">
                                    GÓI CHỤP CÁ NHÂN
                                </div>
                                <p className="text-[12px]">Khám phá vẻ đẹp cá nhân, lưu giữ dấu ấn riêng biệt.</p>
                            </div>
                            <div className="text-[13px]">2.500.000</div>
                        </div>
                    </div>
                    <div className="flex justify-between px-5">
                        <input type="text" className='border-[1px] border-[#6B716E] px-2 py-2 text-[13px] rounded-[5px] w-full mr-5' placeholder='Nhập mã giảm giá'/>
                        <button className="w-[126px] h-[52px] rounded-[5px] bg-[#FF9900] text-[13px]">Áp dụng</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
