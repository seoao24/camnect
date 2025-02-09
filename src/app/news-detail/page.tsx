'use client';
import CommonHero from "@/components/heros/CommonHero";
import React from "react";
import NewsDetail from "./news-detail";
import Image from "next/image";
import HintNews from "./hint-news";
import LastNews from "./last-news";
import RelativeNews from "./relative-news";

const Content = () => (
    <>
        <p className="my-4">Chụp ảnh không chỉ là một phương tiện ghi lại những khoảnh khắc đẹp trong cuộc sống, mà còn là một hình thức nghệ thuật giúp chúng ta trải nghiệm và kết nối sâu sắc hơn với thế giới xung quanh. Từ những bức ảnh ghi lại ký ức gia đình đến những tác phẩm nghệ thuật tinh tế, nhiếp ảnh mang lại những giá trị vững bên trong và ngòi ngoài của bức tranh cuộc sống.</p>
        <div className="flex justify-center">
            <div className="w-[90%] relative h-[700px]">
                <Image src="/assets/images/news-main.png" alt="news main" fill />
            </div>
        </div>
        <p className="my-4">Những bức ảnh giúp chúng ta lưu giữ những ký ức đẹp nhất. Dù là nụ cười hồn nhiên của trẻ nhỏ, một buổi họp gia đình đầm ấm, hay chuyến du lịch đáng nhớ, mỗi bức ảnh đều gỏi nhớ lại những khoảnh khắc đã qua. Hình ảnh như một ngôn ngữ kỳ diệu, kể lại những câu chuyện của thời gian và cảm xúc. Qua đó, người xem có thể dễ dàng kết nối với những ký ức cá nhân hoặc tập thể mà không cần nhiều lời giải thích.</p>
        <p className="my-4">Chụp ảnh còn là một nghệ thuật mang lại sự tự do sáng tạo. Từ việc tìm kiếm góc chụp, sắp đặt bố cục đến sử dụng ánh sáng, chọn bảng màu hay phong cách, nhiếp ảnh giúp người chụp thể hiện tầm hồn, cá tính và những câu chuyện độc đáo của riêng họ. Sự sáng tạo này còn giúp mỗi người nhận thấy và trân trọng hơn vẻ vẻ đẹp trong những điều bình dị thường.</p>
        <p className="my-4">Ngoài việc ghi lại những ký ức, chụp ảnh còn mang tính địa chỉ văn hóa và lịch sử. Những hình ảnh từ quá khứ cho ta thấy cuộc sống và phong tục của người xưa, từ đó giúp hiểu hơn về bối cảnh lịch sử và phát triển hiện đại. Chỉ cần một bức ảnh cũ, ta đã có thể hiểu hơn về những khoảnh khắc, những con người đã sống trong quá khứ. Hình ảnh còn là tài liệu quan trọng trong việc nghiên cứu lịch sử và giáo dục cho các thế hệ mai sau.</p>
        <p className="my-4">Quan trọng hơn, nhiếp ảnh giúp chúng ta trân trọng thời gian và những khoảnh khắc tốt đẹp trong cuộc sống. Mỗi bức ảnh là một khoảnh khắc dừng lại giữa nhị nhông, cho phép chúng ta suy ngẫu về những giá trị định hình trong cuộc đời. Việc ghi lại khoảnh khắc qua hình ảnh giúp ta nhìn thấy những điều đỉ thường, nhưng lại đầy ý nghĩa khi nhìn lại trong tương lai.</p>
        <p className="my-4">Chụp ảnh vì thế không chỉ là một thứ vui, mà còn là một cách thể hiện tâm hồn, kết nối với thế giới, và truyền tải những giá trị sâu xa trong cuộc sống. Hãy cầm máy ảnh lên, khám phá và tạo nên những câu chuyện của riêng bạn!</p>
    </>
);
export default function News() {
    return (
        <div className="">
            <CommonHero />
            <div className="flex justify-center">
                <div className="container flex">
                    <NewsDetail
                        author="Thu Hoài"
                        postedAt="06/01/2025"
                        title="Nghệ Thuật Lưu Giữ Thời Gian"
                        content={<Content />} />
                    <div className="px-5 shadow-lg">
                        <div className="w-[325px] h-[234px] relative">
                            <Image src="/assets/images/news1.png" alt="news 1" fill />
                        </div>
                        <div className="text-[#F07202] text-[30px] font-bold text-center my-2">Có thể bạn quan tâm?</div>
                        <HintNews
                            imageUrl="/assets/images/hint-news1.png"
                            author="Tam Nguyen"
                            postedAt="06/01/2025"
                            title="Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và ..."
                        />
                        <HintNews
                            imageUrl="/assets/images/hint-news2.png"
                            author="Tam Nguyen"
                            postedAt="06/01/2025"
                            title="Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và ..."
                        />
                        <HintNews
                            imageUrl="/assets/images/hint-news3.png"
                            author="Tam Nguyen"
                            postedAt="06/01/2025"
                            title="Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và ..."
                        />
                        <HintNews
                            imageUrl="/assets/images/hint-news4.png"
                            author="Tam Nguyen"
                            postedAt="06/01/2025"
                            title="Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và ..."
                        />
                        <HintNews
                            imageUrl="/assets/images/hint-news5.png"
                            author="Tam Nguyen"
                            postedAt="06/01/2025"
                            title="Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và ..."
                        />
                        <HintNews
                            imageUrl="/assets/images/hint-news6.png"
                            author="Tam Nguyen"
                            postedAt="06/01/2025"
                            title="Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và ..."
                        />
                        <HintNews
                            imageUrl="/assets/images/hint-news7.png"
                            author="Tam Nguyen"
                            postedAt="06/01/2025"
                            title="Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và ..."
                        />
                        <HintNews
                            imageUrl="/assets/images/hint-news8.png"
                            author="Tam Nguyen"
                            postedAt="06/01/2025"
                            title="Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và ..."
                        />
                        <HintNews
                            imageUrl="/assets/images/hint-news9.png"
                            author="Tam Nguyen"
                            postedAt="06/01/2025"
                            title="Concept  chụp ảnh với áo dài luôn là một trong những concept rất đẹp và ..."
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[5rem] flex justify-center">
                <div className="container">
                    <LastNews />
                    <RelativeNews/>
                </div>
            </div>
        </div>
    )
}