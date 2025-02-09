'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";

const pages = [
    {
        title: "Trang chủ",
        link: "/"
    },
    {
        title: "Nhiếp Ảnh gia",
        link: "/user"
    },
    {
        title: "Lịch",
        link: "/user"
    },
    {
        title: "Tin tức",
        link: "/news"
    },
    {
        title: "Cộng đồng",
        link: "/communications"
    },
    {
        title: "Dịch vụ",
        link: "/services"
    }
]
export default function HeaderMenu() {
    // const router = useRouter();
    const [activePage, setActivePage] = useState<string>(pages[0].link);
    return (
        <div>
            <div className="flex justify-center items-center py-2">
                {
                    pages.map(e => (
                        <Link
                            key={e.link}
                            href={e.link}
                            onClick={() => setActivePage(e.link)}
                            className={`px-3 text-[16px] ${activePage == e.link ? 'font-bold' : ''}`}
                        >{e.title}</Link>
                    ))
                }
            </div>
            <div className="bg-[#EBEBEB] rounded-[20px] flex py-2 px-4">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#8E8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <input type="text" name="" id="" className="bg-[#EBEBEB] border-none w-[calc(100%-40px)] outline-none px-2" placeholder="Tìm kiếm..." />
            </div>
        </div>
    )
}