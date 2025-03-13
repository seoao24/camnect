'use client';
import axiosInstance from '@/api/apiBase';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

interface Order {
    id: string;
    orderDate?: string; // Dấu ? cho phép thuộc tính này là null hoặc undefined
    customerName: string;
    billCode?: string; // Dấu ? cho phép thuộc tính này là null hoặc undefined
    totalAmount: number;
}
export default function RequestPayment() {
    const [orders, setOrders] = useState<Order[]>([]);
    const getOrders = async () => {
        try {
            const response = await axiosInstance.get("/OrderService/PaymentConfirm");
            setOrders(response.data);
        } catch {

        }
    }
    const paymentConfirm = async (id: string, billCode: string) => {
        try {
            const body = {
                orderIds: [id]
            }
            await axiosInstance.post("/OrderService/PaymentConfirm", body);
            toast.success("Thanh toán thành công cho đơn hàng " + billCode);
        } catch {
            toast.error("Xác nhận thanh toán thất bại");
        }
    }
    useEffect(() => {
        getOrders();
    }, [])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Danh sách khách hàng thanh toán chờ xác nhận
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Tên khách hàng
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ngày đặt hàng
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mã đơn hàng
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Thành tiền
                        </th>
                        <th scope="col text-center" className="px-6 py-3">
                            Xác nhận
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((e, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={e.id + "-" + index}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {e.customerName}
                                </th>
                                <td className="px-6 py-4">{e.orderDate}</td>
                                <td className="px-6 py-4">{e.billCode}</td>
                                <td className="px-6 py-4">{e.totalAmount}</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center">
                                        {/* <Link
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            <svg
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                <g id="SVGRepo_iconCarrier">
                                                    {" "}
                                                    <path
                                                        fill="#F07202"
                                                        fillRule="evenodd"
                                                        d="M15.747 2.97a.864.864 0 011.177 1.265l-7.904 7.37-1.516.194.653-1.785 7.59-7.044zm2.639-1.366a2.864 2.864 0 00-4-.1L6.62 8.71a1 1 0 00-.26.39l-1.3 3.556a1 1 0 001.067 1.335l3.467-.445a1 1 0 00.555-.26l8.139-7.59a2.864 2.864 0 00.098-4.093zM3.1 3.007c0-.001 0-.003.002-.005A.013.013 0 013.106 3H8a1 1 0 100-2H3.108a2.009 2.009 0 00-2 2.19C1.256 4.814 1.5 7.848 1.5 10c0 2.153-.245 5.187-.391 6.81A2.009 2.009 0 003.108 19H17c1.103 0 2-.892 2-1.999V12a1 1 0 10-2 0v5H3.106l-.003-.002a.012.012 0 01-.002-.005v-.004c.146-1.62.399-4.735.399-6.989 0-2.254-.253-5.37-.4-6.99v-.003zM17 17c-.001 0 0 0 0 0zm0 0z"
                                                    />{" "}
                                                </g>
                                            </svg>

                                        </Link> */}
                                        <div className="flex items-center mx-4 cursor-pointer"
                                            onClick={() => paymentConfirm(e.id, e.billCode)}
                                        >
                                            <svg
                                                width="30px"
                                                height="30px"
                                                viewBox="0 0 512 512"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                fill="#000000"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                <g id="SVGRepo_iconCarrier">
                                                    {" "}
                                                    <title>success</title>{" "}
                                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                        {" "}
                                                        <g
                                                            id="add-copy"
                                                            fill="#008000 "
                                                            transform="translate(42.666667, 42.666667)"
                                                        >
                                                            {" "}
                                                            <path
                                                                d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.43872,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.438933,384 213.333333,384 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z"
                                                                id="Shape"
                                                            >
                                                                {" "}
                                                            </path>{" "}
                                                        </g>{" "}
                                                    </g>{" "}
                                                </g>
                                            </svg>

                                        </div>
                                        {/* <div className='cursor-pointer'>
                                            <svg
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                <g id="SVGRepo_iconCarrier">
                                                    {" "}
                                                    <path
                                                        d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                                                        stroke="#ff0000"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />{" "}
                                                </g>
                                            </svg>
                                        </div> */}
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
