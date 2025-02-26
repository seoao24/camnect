import React from 'react'
import FeedbackCard from './feedback-card'

const users = [
    {
        id: "user-1",
        imageUrl: "/assets/images/feedback1.png",
        content: "Sẽ tiếp tục sử dụng dịch vụ trong tương lai! Camnect có đội ngũ nhiếp ảnh gia rất chuyên nghiệp. Tôi đã chụp ảnh sinh nhật cho con gái mình và kết quả thật sự làm tôi hài lòng. ",
        fullname: "Nguyen Thi Mai"
    },
    {
        id: "user-2",
        imageUrl: "/assets/images/feedback1.png",
        content: "Sẽ tiếp tục sử dụng dịch vụ trong tương lai! Camnect có đội ngũ nhiếp ảnh gia rất chuyên nghiệp. Tôi đã chụp ảnh sinh nhật cho con gái mình và kết quả thật sự làm tôi hài lòng. ",
        fullname: "Nguyen Thi Mai"
    }
]
export default function FeedBackMobile() {
    return (
        <div>
            <div className="text-[22px] text-[#F07202] font-bold uppercase text-center">ĐÁNH GIÁ CỦA 1 SỐ KHÁCH HÀNG</div>
            <div className="flex justify-center">
                <div className="max-w-[310px] text-center text-[14px] text-[#6B716E]">Hãy cùng xem xem, những khách hàng thân yêu của Camnect nói gì về trải nghiệm sử dụng dịch vụ của chúng tôi nhé!</div>
            </div>
            <div className="px-5">
                {
                    users.map(e => (
                        <div>
                            <FeedbackCard
                                content={e.content}
                                fullname={e.fullname}
                                imageUrl={e.imageUrl}
                                key={e.id}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
