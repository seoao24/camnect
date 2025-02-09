import React from 'react'
import LastNewsCard from './last-news-card'

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
export default function LastNews() {
  return (
    <div>
      <div className=''>
        <div className='font-bold text-[36px]'>
          Bài viết mới:
        </div>
        <LastNewsCard
          imageUrl='/assets/images/last-news1.png'
          title='Camnect: Dịch Vụ Cho Thuê Nhiếp Ảnh Gia Chụp Ảnh Chuyên Nghiệp'
          content={<LastNews1 />} />
        <LastNewsCard
          imageUrl='/assets/images/last-news2.png'
          title='Camnect: Dịch Vụ Cho Thuê Nhiếp Ảnh Gia Chụp Ảnh Chuyên Nghiệp'
          content={<LastNews1 />} />
        <LastNewsCard
          imageUrl='/assets/images/last-news3.png'
          title='Camnect: Dịch Vụ Cho Thuê Nhiếp Ảnh Gia Chụp Ảnh Chuyên Nghiệp'
          content={<LastNews1 />} />
      </div>
    </div>
  )
}
