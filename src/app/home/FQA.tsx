import Description from "@/components/text/description";
import TextCollapse from "@/components/text/TextCollapse";
import Title from "@/components/text/title";
import React from "react";

export default function FQA() {
    return (
        <div className="mt-[5rem] flex justify-center">
            <div className="container">
                <Title content="CÂU HỎI THƯỜNG GẶP (FQA)-CAMNECT"></Title>
                <div className="flex justify-center mb-[3rem]">
                    <div className="max-w-[867px] ">
                        <Description
                            content="Dưới đây là các câu hỏi thường gặp về dịch vụ của Camnect. Nếu bạn có thêm thắc mắc, đừng ngần ngại liên hệ với chúng tôi qua hotline hoặc email nhé!"
                            classes=""
                        />
                    </div>
                </div>
                <TextCollapse
                    isOpen={true}
                    title="Tôi cần đặt lịch chụp trước bao lâu?"
                    description="Chúng tôi khuyến khích khách hàng đặt lịch trước ít nhất 7 ngày để đảm bảo lịch trình và sự chuẩn bị tốt nhất. Trong trường hợp khẩn cấp, hãy gọi ngay hotline để được hỗ trợ!"
                />
                <TextCollapse
                    isOpen={false}
                    title="Camnect có hỗ trợ tư vấn concept chụp ảnh không?"
                    description=""
                />
                <TextCollapse
                    isOpen={false}
                    title="Tôi cần chuẩn bị gì trước buổi chụp ảnh?"
                    description=""
                />
                <TextCollapse
                    isOpen={false}
                    title="Dịch vụ của Camnect có bao gồm chỉnh sửa ảnh không?"
                    description=""
                />
            </div>
        </div>
    )
}