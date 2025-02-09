'use client';
import OrgangeButton from "@/components/buttons/OrganeButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import React from "react";
import CardPhotographers from "./card-photographer";

export default function SearchPhotographers() {
    return (
        <div className="flex justify-center">
            <div className="container">
                <div className="text-center text-[40px] text-[#F07202] font-bold">TÌM KIẾM NHIẾP ẢNH GIA</div>
                <div className="flex justify-center">
                    <div className="text-center max-w-[827px]">Camnect cung cấp công cụ tìm kiếm thông minh, cho phép khách hàng lọc nhiếp ảnh gia theo loại hình chụp ảnh, phong cách, địa điểm, và mức giá.</div>
                </div>
                <div className="flex items-center justify-between">
                    <hr className="w-[80%]" />
                    <OrgangeButton title="Gần nhất" onClick={() => { }} />
                    <OutlineButton title="Giá" onClick={() => { }} />
                </div>

                <div>
                    <CardPhotographers 
                    avatarUrl="/assets/images/search1.png" 
                    experience="Hơn 3 năm trong lĩnh vực nhiếp ảnh, đặc biệt là chụp ảnh thời trang và chân dung." 
                    fullname="Quỳnh Trang" 
                    minPrice={500000}
                    maxPrice={1000000}
                    outstandingConcert="Thường chụp ảnh kỷ yếu với phong cách trẻ trung và năng động, ghi lại những khoảnh khắc vui vẻ của học sinh, sinh viên. Bên cạnh đó, tôi cũng chụp chân dung cá nhân với ánh sáng tự nhiên và tạo dáng thoải mái để tôn lên vẻ đẹp tự nhiên của mỗi người."
                    rate={5}
                    services={[
                        "Chụp ảnh thời trang cá nhân và thương mại",
                        "Chụp ảnh chân dung chuyên nghiệp",
                        "Chụp ảnh sản phẩm cho thương hiệu"
                    ]}/>
                </div>
            </div>
        </div>
    )
}