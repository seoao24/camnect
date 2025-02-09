'use client';
import React from "react";
import CardText from "./card-text";
import OrgangeButton from "@/components/buttons/OrganeButton";

export default function Reason() {
    return (
        <div className="flex justify-center mt-[5rem]">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] pr-[50px] px-5">
                    <div className="mt-[4rem]">
                        <CardText
                            title="Kết nối nhanh chóng"
                            description="Khách hàng có thể tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh một cách dễ dàng. Không còn phải loay hoay tìm nhiếp ảnh gia phù hợp, Camnect giúp bạn tiết kiệm thời gian và công sức, mang lại sự thuận tiện tối đa."
                            classes="" />
                        <CardText
                            title="Kết nối nhanh chóng"
                            description="Khách hàng có thể tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh một cách dễ dàng. Không còn phải loay hoay tìm nhiếp ảnh gia phù hợp, Camnect giúp bạn tiết kiệm thời gian và công sức, mang lại sự thuận tiện tối đa."
                            classes="mt-5" />
                    </div>
                    <div>
                        <CardText
                            title="Kết nối nhanh chóng"
                            description="Khách hàng có thể tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh một cách dễ dàng. Không còn phải loay hoay tìm nhiếp ảnh gia phù hợp, Camnect giúp bạn tiết kiệm thời gian và công sức, mang lại sự thuận tiện tối đa."
                            classes="bg-[url('/assets/images/reason1.png')]" />
                        <CardText
                            title="Kết nối nhanh chóng"
                            description="Khách hàng có thể tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh một cách dễ dàng. Không còn phải loay hoay tìm nhiếp ảnh gia phù hợp, Camnect giúp bạn tiết kiệm thời gian và công sức, mang lại sự thuận tiện tối đa."
                            classes="mt-5" />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="">
                        <div className="text-[30px] text-[#777777]">Những lý do</div>
                        <div className="text-[#F07202] text-[32px]">Vì sao nên chọn Camnect?</div>
                        <span className="text-[#777777] text-[18px]">Camnect – Nền tảng kết nối nhiếp ảnh chuyên nghiệp
                            Camnect là giải pháp hoàn hảo dành cho những ai đang tìm kiếm dịch vụ chụp ảnh chuyên nghiệp và tiện lợi. Với hệ thống kết nối nhanh chóng, dịch vụ đa dạng và cam kết chất lượng vượt trội.
                        </span>
                        <div className="mt-10">
                            <OrgangeButton title="Đăng ký" onClick={() => { }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}