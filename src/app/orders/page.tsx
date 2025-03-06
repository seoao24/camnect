'use client';
import React, { useEffect, useState } from "react";
import ServiceCart from "./service-cart";
import axiosInstance from "@/api/apiBase";

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

export default function Orders() {
    const [orders, setOrders] = useState<OrderDetail[]>([]);
    const getOrderDetails = async () => {
        try {
            const response = await axiosInstance.get("/OrderService/SearchOrder");
            setOrders(response.data.items);
        } catch {

        }
    }
    useEffect(() => {
        getOrderDetails();
    }, [])
    return (
        <div className="flex justify-center">
            <div className="container my-5">
                <div className="text-[36px] font-bold text-[#F07202]">Camnect - Nơi khoảnh khắc trở thành kỷ niệm</div>
                <div className="text-[30px] font-bold text-black">Giỏ hàng</div>

                <div className="mt-5">
                    {
                        orders.map((e, index) => (
                            <div key={e.orderDetailId + "-" + index}>
                                <ServiceCart orderDetailId={e.orderDetailId} serviceId={e.serviceId} description={e.description} imageDefault={e.imageDefault} name={e.name} price={e.price} oldPrice={e.oldPrice}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}