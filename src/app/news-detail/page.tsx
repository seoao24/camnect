'use client';
import CommonHero from "@/components/heros/CommonHero";
import React, { useEffect, useState } from "react";
import NewsDetail from "./news-detail";
import HintNews from "./hint-news";
import LastNews from "./last-news";
import RelativeNews from "./relative-news";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/api/apiBase";
import { News } from "../news/last-news";
import Link from "next/link";

export default function NewDetai() {
    const [newsDetail, setNewsDetail] = useState<News>();
    const [latestNews, setLatestNews] = useState<News[]>([]);
    const searchParams = useSearchParams();
    const getNewDetail = async () => {
        try {
            const params = {
                id: searchParams.get("id")
            }
            const response = await axiosInstance.get("/Blog/GetDetail", {
                params: params
            });
            setNewsDetail(response.data);
        } catch {

        }
    }
    const getLatestNews = async () => {
        try {
            const parms = {
                total: 9
            }
            const response = await axiosInstance.get("/Blog/Search", {
                params: parms
            });
            setLatestNews(response.data);
        } catch {

        }
    }
    useEffect(() => {
        getNewDetail();
        getLatestNews();
    }, [searchParams.get("id")])
    if (!newsDetail) return null;
    return (
        <div className="">
            <CommonHero />
            <div className="flex justify-center">
                <div className="container md:flex">
                    <NewsDetail
                        author={newsDetail?.author}
                        postedAt={newsDetail?.postedAt}
                        title={newsDetail?.title}
                        content={<div dangerouslySetInnerHTML={{ __html: newsDetail?.content }}></div>} />
                    <div className="px-5 shadow-lg md:w-[380px]">
                        <div className="md:w-[325px] md:h-[234px] w-[217px] h-[146px] relative bg-contain bg-center bg-no-repeat" style={{
                            backgroundImage: `url('/assets/images/news1.png')`
                        }}>
                        </div>
                        <div className="text-[#F07202] text-[30px] font-bold text-center my-2">Có thể bạn quan tâm?</div>
                        {
                            latestNews.map(e => (
                                <Link
                                    href={`/news-detail?id=` + e.id}
                                    key={e.id}>
                                    <HintNews
                                        id={e.id}
                                        imageUrl={e.imageUrl}
                                        author={e.author}
                                        postedAt={e.postedAt}
                                        title={e.title}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="mt-[5rem] flex justify-center">
                <div className="container">
                    <LastNews />
                    <RelativeNews />
                </div>
            </div>
        </div>
    )
}