'use client';
import React from "react";
import ServiceCart from "./service-cart";

export default function Orders() {
    return (
        <div className="flex justify-center">
            <div className="container my-5">
                <div className="text-[36px] font-bold text-[#F07202]">Camnect - Nơi khoảnh khắc trở thành kỷ niệm</div>
                <div className="text-[30px] font-bold text-black">Giỏ hàng</div>

                <div className="mt-5">
                    <ServiceCart />
                </div>
            </div>
        </div>
    )
}