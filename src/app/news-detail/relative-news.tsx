'use client';
import React, { useEffect, useState } from 'react'
import RelativeCardNews from './relative-card-news'
import { News } from '../news/last-news';
import axiosInstance from '@/api/apiBase';

export default function RelativeNews() {
    const [relativeNews, setRelativeNews] = useState<News[]>([]);
    const getRelativeNews = async () => {
        try {
            const params = {
                top: 6
            }
            const response = await axiosInstance.get("/Blog/Search", {
                params: params
            });
            setRelativeNews(response.data);
        } catch {

        }
    }
    useEffect(() => {
        getRelativeNews();
    }, [])
    return (
        <div>
            <div className='font-bold text-[36px]'>
                Các bài viết cùng chủ đề:
            </div>
            <div className="md:grid grid-cols-3 gap-4 hidden">
                {
                    relativeNews.map(e => (
                        <div key={e.id}>
                            <RelativeCardNews
                                id={e.id}
                                imageUrl={e.imageUrl}
                                title={e.title}
                                views={12}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-1 gap-4 md:hidden">
                {
                    relativeNews.map(e => (
                        <div key={e.id}>
                            <RelativeCardNews
                                id={e.id}
                                imageUrl={e.imageUrl}
                                title={e.title}
                                views={12}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
