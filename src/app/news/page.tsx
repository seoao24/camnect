'use client';
import CommonHero from '@/components/heros/CommonHero'
import React, { useEffect, useState } from 'react'
import TopNews from './top-news'
import LastNews, { News } from './last-news'
import NewsCard from './news-card'
import LastNewsCard from '../news-detail/last-news-card'
import RelativeNews from '../news-detail/relative-news'
import axiosInstance from '@/api/apiBase';

export default function NewsPage() {
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [topNews, setTopNews] = useState<News[]>([]);
  const getLatestNews = async () => {
    try {
      const params = {
        total: 7
      }
      const response = await axiosInstance.get("/Blog/Search", {
        params: params
      });
      setLatestNews(response.data);
    } catch {

    }
  }
  const getTopNews = async () => {
    try {
      const params = {
        total: 4
      }
      const response = await axiosInstance.get("/Blog/Search", {
        params: params
      });
      setTopNews(response.data);
    } catch {

    }
  }
  useEffect(() => {
    getLatestNews();
    getTopNews();
  }, [])
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
        <div className="flex justify-center my-10 bg-[#FEF5EC] py-10">
          <div className="md:grid grid-cols-4 gap-4 container hidden">
            {
              topNews.map(e => (
                <div key={e.id}>
                  <NewsCard
                    id={e.id}
                    title={e.title}
                    imageUrl={e.imageUrl}
                    lastPost={e.postedAt}
                  />
                </div>
              ))
            }
          </div>
          <div className="grid grid-cols-3 gap-4 container py-12 md:hidden">
            {
              topNews.map(e => (
                <div key={e.id}>
                  <NewsCard
                    id={e.id}
                    title={e.title}
                    imageUrl={e.imageUrl}
                    lastPost={e.postedAt}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex justify-center">
          <div className='container'>
            <div className='font-bold text-[36px]'>
              Bài viết mới:
            </div>
            {
              latestNews.map(e => (
                <div key={e.id}>
                  <LastNewsCard
                    id={e.id}
                    imageUrl={e.imageUrl}
                    title={e.title}
                    content={<div dangerouslySetInnerHTML={{ __html: e.content }} />} />
                </div>
              ))
            }
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
