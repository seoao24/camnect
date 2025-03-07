'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// import QRPay from '../payment-method/qr-pay';
import axiosInstance from '@/api/apiBase';

interface OrderDetail {
    orderDetailId: string;
    serviceId: string;
    imageDefault?: string | null;
    name?: string | null;
    description?: string | null;
    price?: number | null;
    oldPrice?: number | null;
    quantity?: number | null;
    totalQuantity?: number | null;
}
export default function PaymentInformation() {
    const [orders, setOrders] = useState<OrderDetail[]>([]);
    const [paymentAmount, setPaymentAmount] = useState(0);
    const getOrderDetails = async () => {
        try {
            const response = await axiosInstance.get("/OrderService/SearchOrder");
            setOrders(response.data.items);
            console.log(response.data.items)
            response.data.items.forEach((item : OrderDetail )=> {
                setPaymentAmount(paymentAmount + ((item.quantity ?? 0) * (item.price ?? 0)));
            });
        } catch {

        }
    }
    useEffect(() => {
        getOrderDetails();
    }, [])
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
                        Thông tin mua hàng
                    </div>
                    <div className="">
                        <input type="email" name='email' className='border-[1px] border-[#8E8B8B] rounded-[5px] w-full px-2 py-3 outline-none my-2' placeholder='Email(Tùy chọn)'/>
                        <input type="text" name='fullname' className='border-[1px] border-[#8E8B8B] rounded-[5px] w-full px-2 py-3 outline-none my-2' placeholder='Họ và tên*'/>
                        <input type="text" name='phoneNumber' className='border-[1px] border-[#8E8B8B] rounded-[5px] w-full px-2 py-3 outline-none my-2' placeholder='Số điện thoại*'/>
                        <input type="text" name='address' className='border-[1px] border-[#8E8B8B] rounded-[5px] w-full px-2 py-3 outline-none my-2' placeholder='Địa chỉ(Tùy chọn)'/>
                        <textarea name="note" id="" rows={3} placeholder='Ghi chú (Tùy chọn)' className='border-[1px] border-[#8E8B8B] rounded-[5px] w-full px-2 py-3 outline-none my-2'></textarea>
                    </div>

                    <div className="flex justify-between items-center mt-5">
                        <Link href={'/orders'} className='text-[#F07202] text-[15px]'>
                            {`< Giỏ hàng`}
                        </Link>
                        {/* <QRPay /> */}
                        <Link href={'/payment-method'} className="px-4 py-1 text-white bg-[#FF9900] rounded-[20px] text-white">Tiếp tục chọn thanh toán</Link>
                    </div>
                </div>
                <div className="max-w-[700px] w-full">
                    <div className="text-[#777777] text-[30px] text-center py-10 border-[#8E8B8B] border-b-[1px] w-full">Đơn hàng ( {orders.length} sản phẩm )</div>
                    {/* <div className="px-5">
                        <div className="flex items-center py-5 border-[#8E8B8B] border-b-[1px]">
                            <div className="text-[20px] text-[#F07202] border-[#8E8B8B] border-r-[1px] pr-2">Lyn Nguyen</div>
                            <Link href={'/chat'} className='text-[12px] font-bold pl-2'>Chat ngay</Link>
                        </div>
                    </div> */}
                    {
                        orders.map((e, index) => (
                            <div className="flex py-5 px-5" key={e.orderDetailId + "-" + index}>
                                <div className="w-[268px] h-[208px] rounded-[10px] bg-cover bg-no-repeat" style={{
                                    backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${e.imageDefault}')`
                                }}></div>
                                <div className='flex flex-col justify-between px-5'>
                                    <div>
                                        <div className="text-[16px] font-bold">
                                            {e.name}
                                        </div>
                                        <p className="text-[12px]">{e.description}</p>
                                    </div>
                                    <div className="text-[13px]">{e.price?.toLocaleString()}</div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="flex justify-between px-5">
                        <input type="text" className='border-[1px] border-[#6B716E] px-2 py-2 text-[13px] rounded-[5px] w-full mr-5' placeholder='Nhập mã giảm giá' />
                        <button className="w-[126px] h-[52px] rounded-[5px] bg-[#FF9900] text-[13px]">Áp dụng</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
