'use client';
import React, { useEffect, useState } from 'react'
import TopNewsCard from './top-news-card'
import { News } from './last-news';
import axiosInstance from '@/api/apiBase';

export default function TopNews() {
    const [topNews, setTopNews] = useState<News[]>([]);
    const getTopNews = async () => {
        try {
            const params = {
                total: 3
            }
            const response = await axiosInstance.get("/Blog/Search", {
                params: params
            });
            setTopNews(response.data);
        } catch {

        }
    }

    useEffect(() => {
        getTopNews();
    }, []);
    return (
        <div className='rounded-[10px] shadow-lg px-4 py-4'>
            <div className="w-full my-5">
                <div className="flex items-center py-2">
                    <div className="w-[30px] h-[30px]"
                        style={{
                            backgroundImage: "url('/assets/images/star.png')"
                        }}></div>
                    <div className="text-[20px] text-[#F07202] font-bold h-full">BÀI VIẾT NỔI BẬT</div>
                </div>
                <div className="bg-none bg-no-repeat w-full h-[2px]" style={{
                    backgroundImage: `url('/assets/images/top-news-line.png')`
                }}>

                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
                {
                    topNews.map(e => (
                        <div key={e.id}>
                            <TopNewsCard
                                id={e.id}
                                content={e.content}
                                postAt={e.postedAt}
                                title={e.title}
                                imageUrl={e.imageUrl}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
