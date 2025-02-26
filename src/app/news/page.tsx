import CommonHero from '@/components/heros/CommonHero'
import React from 'react'
import TopNews from './top-news'
import LastNews from './last-news'
import NewsCard from './news-card'
import LastNewsCard from '../news-detail/last-news-card'
import RelativeNews from '../news-detail/relative-news'

const LastNews1 = () => (
  <div>
    <ul>
      <li>Trong thời đại mạng xã hội và kỷ nguyên số, những bức ảnh đẹp không...</li>
      <li>Camnect là một nền tảng kết nối khách hàng với nhiếp ảnh gia chuyên nghiệp...</li>
      <li>Camnect sở hữu đội ngũ nhiếp ảnh gia đã được chọn lọc kỹ lưỡng. Mỗi người...</li>
      <li>Chúng tôi cung cấp giá cảnh tranh và công khai ngay tại bước đặt dịch vụ. Bạn...</li>
    </ul>
  </div>
)
export default function News() {
  return (
    <div>
      <div className="bg-[#F07202] px-5 py-1 my-1 text-white text-[12px] md:hidden">Nơi khoảnh khắc trở thành kỉ niệm!</div>
      <div className='px-5'>
        <CommonHero />
        <div className="flex justify-center">
          <div className="container grid md:grid-cols-2 gap-4">
            <TopNews />
            <LastNews />
          </div>
        </div>
        <div className="flex justify-center my-10 bg-[#FEF5EC]">
          <div className="grid grid-cols-4 gap-4 container py-12 hidden md:block">
            <NewsCard
              title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
              imageUrl='/assets/images/news11.png'
              lastPost='8 giờ trước'
            />
            <NewsCard
              title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
              imageUrl='/assets/images/news11.png'
              lastPost='8 giờ trước'
            />
            <NewsCard
              title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
              imageUrl='/assets/images/news11.png'
              lastPost='8 giờ trước'
            />
            <NewsCard
              title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
              imageUrl='/assets/images/news11.png'
              lastPost='8 giờ trước'
            />
          </div>
          <div className="grid grid-cols-3 gap-4 container py-12 md:hidden">
            <NewsCard
              title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
              imageUrl='/assets/images/news11.png'
              lastPost='8 giờ trước'
            />
            <NewsCard
              title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
              imageUrl='/assets/images/news11.png'
              lastPost='8 giờ trước'
            />
            <NewsCard
              title='Chụp ảnh trên tuyến tàu siêu đẹp với concept vintage.'
              imageUrl='/assets/images/news11.png'
              lastPost='8 giờ trước'
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className='container'>
            <div className='font-bold text-[36px]'>
              Bài viết mới:
            </div>
            <LastNewsCard
              imageUrl='/assets/images/last-news1.png'
              title='Camnect: Dịch Vụ Cho Thuê Nhiếp Ảnh Gia Chụp Ảnh Chuyên Nghiệp'
              content={<LastNews1 />} />
            <LastNewsCard
              imageUrl='/assets/images/last-news1.png'
              title='Camnect: Dịch Vụ Cho Thuê Nhiếp Ảnh Gia Chụp Ảnh Chuyên Nghiệp'
              content={<LastNews1 />} />
            <LastNewsCard
              imageUrl='/assets/images/last-news1.png'
              title='Camnect: Dịch Vụ Cho Thuê Nhiếp Ảnh Gia Chụp Ảnh Chuyên Nghiệp'
              content={<LastNews1 />} />
            <LastNewsCard
              imageUrl='/assets/images/last-news1.png'
              title='Camnect: Dịch Vụ Cho Thuê Nhiếp Ảnh Gia Chụp Ảnh Chuyên Nghiệp'
              content={<LastNews1 />} />
            <LastNewsCard
              imageUrl='/assets/images/last-news1.png'
              title='Camnect: Dịch Vụ Cho Thuê Nhiếp Ảnh Gia Chụp Ảnh Chuyên Nghiệp'
              content={<LastNews1 />} />
            <LastNewsCard
              imageUrl='/assets/images/last-news1.png'
              title='Camnect: Dịch Vụ Cho Thuê Nhiếp Ảnh Gia Chụp Ảnh Chuyên Nghiệp'
              content={<LastNews1 />} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="container">
            <RelativeNews />
          </div>
        </div>
      </div>
    </div>
  )
}
