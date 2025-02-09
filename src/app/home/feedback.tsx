import Description from '@/components/text/description'
import Title from '@/components/text/title'
import React from 'react'
import CardFeedback from './card-feedback'

export default function Feedback() {
    return (
        <div className="mt-[5rem] flex justify-center">
            <div className="container">
                <Title content="ĐÁNH GIÁ CỦA MỘT SỐ KHÁCH HÀNG"></Title>
                <div className="flex justify-center mb-[3rem]">
                    <div className="max-w-[867px] ">
                        <Description
                            content="Hãy cùng xem xem, những khách hàng thân yêu của Camnect nói gì về trải nghiệm sử dụng dịch vụ của chúng tôi nhé!"
                            classes=""
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <CardFeedback
                        content='Sẽ tiếp tục sử dụng dịch vụ trong tương lai! Camnect có đội ngũ nhiếp ảnh gia rất chuyên nghiệp. Tôi đã chụp ảnh sinh nhật cho con gái mình và kết quả thật sự làm tôi hài lòng. '
                        fullname='Nguyen Thi Mai'
                        imageUrl='/assets/images/feedback1.png'
                        rate={4.5}
                    />
                    <CardFeedback
                        content='Chị Mỹ Hạnh chụp ảnh rất chuyên nghiệp, bắt được những khoảnh khắc tự nhiên và vui vẻ trong ngày kỷ yếu của lớp em. Cách làm việc thân thiện và nhiệt tình.'
                        fullname='Ninh Anh Đào'
                        imageUrl='/assets/images/feedback2.png'
                        rate={4.5}
                    />
                    <CardFeedback
                        content='Anh Khải là người chụp ảnh sinh nhật cho con gái tôi, anh ấy rất dễ mến và kiên nhẫn. Những bức ảnh ghi lại những khoảnh khắc đẹp nhất của buổi tiệc.'
                        fullname='Khánh Vy'
                        imageUrl='/assets/images/feedback3.png'
                        rate={4.5}
                    />
                    <CardFeedback
                        content='Sẽ tiếp tục sử dụng dịch vụ trong tương lai! Camnect có đội ngũ nhiếp ảnh gia rất chuyên nghiệp. Tôi đã chụp ảnh sinh nhật cho con gái mình và kết quả thật sự làm tôi hài lòng. '
                        fullname='Minh Anh Nguyễn'
                        imageUrl='/assets/images/feedback4.png'
                        rate={4.5}
                    />
                </div>
            </div>
        </div>
    )
}
