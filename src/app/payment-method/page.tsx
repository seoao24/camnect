'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import QRPay from '../payment-method/qr-pay';
import axiosInstance from '@/api/apiBase';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

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
export default function PaymentMethod() {
    const [orders, setOrders] = useState<OrderDetail[]>([]);
    const [paymentAmount, setPaymentAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [voucherCode, setVoucherCode] = useState<string>("");
    const router = useRouter();
    const getOrderDetails = async () => {
        try {
            const response = await axiosInstance.get("/OrderService/SearchOrder");
            setOrders(response.data.items);
            console.log(response.data.items)
            response.data.items.forEach((item: OrderDetail) => {
                setPaymentAmount(paymentAmount + ((item.quantity ?? 0) * (item.price ?? 0)));
            });
        } catch {

        }
    }

    const handleVoucher = () => {
        const savedForm = Cookies.get("paymentInfo");
        if (!savedForm) {
            toast.error("Vui lòng điền lại thông tin người đặt hàng");
            router.push("/payment-infomation");
            return;
        }
        const body = JSON.parse(savedForm);
        body.voucherCode = voucherCode;
        Cookies.set("paymentInfo", JSON.stringify(body), { expires: 7 });
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
                        Thanh toán
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div className="bg-[#FF9900] rounded-[5px] shadow-md py-3 px-4 text-white font-[400] cursor-pointer">Thanh toán toàn bộ</div>
                            <div className='text-[13px] text-[#6B716E] py-2'>{paymentAmount.toLocaleString()} VND</div>
                        </div>
                        <div>
                            <div className="bg-[#FF9900] rounded-[5px] shadow-md py-3 px-4 text-white font-[400] cursor-pointer">Thanh toán số tiền đặt cọc</div>
                            <div className='text-[13px] text-[#6B716E] py-2'>0</div>
                        </div>
                    </div>
                    <div className="rounded-[5px] border-[#8E8B8B] border-[1px] w-full mt-10">
                        <div className="flex py-3 px-3 border-[#8E8B8B] border-b-[1px]">
                            <input type="radio" className='w-[24px] h-[24px] rounded-[50%]' id='momo' name='payment-method' value={0} onChange={() => setPaymentMethod(0)} />
                            <label htmlFor="momo" className='text-[16px] text-[#6B716E] ml-5'>Thanh toán qua MoMo</label>
                        </div>
                        <div className="flex py-3 px-3 border-[#8E8B8B] border-b-[1px]">
                            <input type="radio" className='w-[24px] h-[24px] rounded-[50%]' id='nganluong' name='payment-method' value={1} onChange={() => setPaymentMethod(1)} />
                            <label htmlFor="nganluong" className='text-[16px] text-[#6B716E] ml-5'>Thanh toán qua Ngân hàng BIDV</label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <Link href={'/payment-infomation'} className='text-[#F07202] text-[15px]'>
                            {`< Thông tin`}
                        </Link>
                        {
                            orders.length ? (
                                <QRPay paymentMethod={paymentMethod} />
                            ) : null
                        }
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
                    {
                        orders.length ? (
                            <div className="flex justify-between px-5">
                                <input type="text" className='border-[1px] border-[#6B716E] px-2 py-2 text-[13px] rounded-[5px] w-full mr-5' placeholder='Nhập mã giảm giá' value={voucherCode} onChange={(e) => setVoucherCode(e.target.value)} />
                                <button className="w-[126px] h-[52px] rounded-[5px] bg-[#FF9900] text-[13px]" onClick={handleVoucher}>Áp dụng</button>
                            </div>
                        ) : null
                    }
                </div>
            </div>

        </div>
    )
}
