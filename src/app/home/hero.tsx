'use client';
import CustomButton from "@/components/buttons/CustomButton";
import CustomInput from "@/components/inputs/CustomInput";
import React from "react";
import Service from "./service";

export default function HomeHere() {
    return (
        <div>
            <div className="w-[100vw] h-[calc(100vw/2)] bg-[url('/assets/images/hero.png')] bg-cover bg-no-repeat px-0 mx-0 md:relative">
                <div className="md:absolute top-[200px] right-[150px] md:w-[550px] sm:w-full">
                    <div className="px-10 py-7 rounded-[20px] bg-cover bg-no-repeatS"
                    style={{
                        backgroundImage: "url('/assets/images/hero-home-orange.png')"
                    }}>
                        <div className="text-center text-[20px] font-bold text-white">Tham gia ngay để nhận ưu đãi khủng</div>
                        <div className="text-center text-white text-[16px]">Camnect cam kết rõ ràng, minh bạch về dịch vụ hỗ trợ khách hàng của mình.</div>
                        <div className="mt-4">
                            <CustomInput />
                            <div className="flex justify-between mt-2">
                                <div className="md:col-12 pr-1">
                                    <CustomInput />
                                </div>
                                <div className="md:col-12 pl-1">
                                    <CustomInput />
                                </div>
                            </div>
                            <div className="mt-2">
                                <CustomInput />
                            </div>
                            <div className="mt-4">
                                <CustomButton title="Gửi" onClick={() => { }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center container">
                    <div className="md:col-4 px-3">
                        <Service />
                    </div>
                    <div className="md:col-4 px-3">
                        <Service />
                    </div>
                    <div className="md:col-4 px-3">
                        <Service />
                    </div>
                    <div className="md:col-4 px-3">
                        <Service />
                    </div>
                </div>
            </div>
        </div>
    )
}