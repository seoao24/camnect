'use client';
import OrgangeButton from "@/components/buttons/OrganeButton";
import Image from "next/image";
import React from "react";

export default function Introduction() {
    return (
        <div className="flex justify-center z-[50] relative mt-[100px]">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-[#777777] container pr-10">
                    <div className="font-bold text-[40px] text-[#F07202]">GIỚI THIỆU VỀ CAMNECT</div>
                    <p className="text-[18px] mt-5">
                        Camnect là nền tảng trực tuyến hàng đầu, chuyên kết nối khách hàng với các nhiếp ảnh gia chuyên nghiệp, đáp ứng mọi nhu cầu chụp ảnh từ sự kiện, chân dung, thời trang đến sản phẩm và bất động sản.
                    </p>
                    <p className="text-[18px] mt-5">
                        Với Camnect, việc tìm kiếm, đặt lịch và sử dụng dịch vụ chụp ảnh trở nên dễ dàng và thuận tiện hơn bao giờ hết. Chỉ cần vài thao tác đơn giản, bạn có thể kết nối ngay với nhiếp ảnh gia phù hợp.
                    </p>
                    <p className="text-[18px] mt-5">
                        Ngoài ra Camnect cung cấp nhiều dịch vụ chụp ảnh đa dạng, từ chân dung cá nhân, sự kiện, kỷ yếu đến sản phẩm và bất động sản, đảm bảo đáp ứng mọi nhu cầu cho cả cá nhân và doanh nghiệp.
                    </p>
                    <p className="text-[18px] mt-5">
                        Cuối cùng, Camnect cam kết mang lại dịch vụ chuyên nghiệp và đáng tin cậy nhờ quy trình chọn lọc nhiếp ảnh gia nghiêm ngặt cùng hệ thống đánh giá minh bạch, giúp khách hàng hoàn toàn an tâm về chất lượng.
                    </p>
                    <div className="mt-10">
                        <OrgangeButton title="Đọc thêm" onClick={() => {}}/>
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="relative h-[70%]">
                        <Image src="/assets/images/intro1.png" alt="intro1" fill className="object-cover border rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 relative w-full h-[30%] mt-4">
                        <div className="relative">
                            <Image src="/assets/images/intro2.png" alt="intro1" fill className="object-cover border rounded-[10px]" />
                        </div>
                        <div className="relative">
                            <Image src="/assets/images/intro3.png" alt="intro1" fill className="object-cover border rounded-[10px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}