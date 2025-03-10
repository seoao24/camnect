'use client';
import React, { useEffect, useState } from 'react';
import LastNewsCard from './last-news-card'
import { News } from '../news/last-news';
import axiosInstance from '@/api/apiBase';

export default function LastNews() {
  const [latestNews, setLatestNews] = useState<News[]>([]);
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
  useEffect(() => {
    getLatestNews();
  }, [])
  return (
    <div>
      <div className=''>
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
  )
}
