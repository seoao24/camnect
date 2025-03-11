'use client';
import axiosInstance from '@/api/apiBase';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

interface QRPayProps {
    paymentMethod: number
}
export default function QRPay(props: QRPayProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [billCode, setBillCode] = useState<string>("");
    const router = useRouter();
    function generateRandomString() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";

        let result = "";

        // Randomly pick 3 letters
        for (let i = 0; i < 3; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        // Randomly pick 3 numbers
        for (let i = 0; i < 3; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        setBillCode(result);
    }
    const submitPayment = async () => {
        try {
            const savedForm = Cookies.get("paymentInfo");
            if (!savedForm) {
                toast.error("Vui lòng điền lại thông tin người đặt hàng");
                router.push("/payment-infomation");
                return;
            }
            const body = JSON.parse(savedForm);
            body.billCode = billCode;
            console.log(body)
            await axiosInstance.post("/OrderService/CheckOut", body);
            Cookies.remove("paymentInfo");
            toast.success("Bạn đã thanh toán đơn hàng thành công");
        } catch {
            toast.error("Thanh toán đơn hàng không thành công, vui lòng kiểm tra lại");
        }
    }
    useEffect(() => {
        generateRandomString();
    }, [])
    return (
        <div className="flex items-center justify-center bg-gray-100">
            {/* Button to open modal */}
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-1 text-white bg-[#FF9900] rounded-[20px] text-white w-[169px]"
            >
                Thanh toán
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold w-full text-center mb-5">Quét mã thanh toán </h2>
                        <div className="flex justify-center">
                            <div className='w-[300px] h-[300px] bg-cover bg-no-repeat' style={{
                                backgroundImage: `url('/assets/images/${props.paymentMethod == 0 ? 'momo-qr' : 'bidv-qr'}.png')`
                            }}>

                            </div>
                        </div>
                        <div className="text-[#FF0000] text-center mt-5">Vui lòng nhập mã thanh toán</div>
                        <h2 className='text-center text-[#FF0000] font-bold'>{billCode}</h2>
                        {/* Close button */}
                        <div className="flex items-center justify-end">
                            <button
                                onClick={() => {
                                    submitPayment();
                                    setIsOpen(false);
                                }}
                                className="mt-4 px-4 py-1 bg-[#FF9900] text-white rounded-[20px]"
                            >
                                Hoàn tất
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
