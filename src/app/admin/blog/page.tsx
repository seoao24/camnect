'use client';
import axiosInstance from '@/api/apiBase';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface BlogModel {
    id: string;
    title: string;
    imageUrl?: string | null;
    content: string;
    postedAt: string;
}

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogModel[]>([]);
    const getBlog = async () => {
        try {
            const response = await axiosInstance.get("/Blog/Search");
            setBlogs(response.data);
        } catch {

        }
    }
    useEffect(() => {
        getBlog();
    }, [])
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="text-[24px] font-bold text-[#F07202]">Danh sách các blogs đã đăng</div>
                <Link
                    href={'/admin/blog/create'}
                    className="rounded-[5px] px-3 py-1 text-white bg-[#F07202]">Thêm blog mới</Link>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-4 py-2 text-left font-semibold text-gray-600">STT</th>
                            <th className="px-4 py-2 text-left font-semibold text-gray-600">Hình ảnh</th>
                            <th className="px-4 py-2 text-left font-semibold text-gray-600">Tiêu đề</th>
                            <th className="px-4 py-2 text-left font-semibold text-gray-600">Ngày đăng</th>
                            <th className="px-4 py-2 text-left font-semibold text-gray-600">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map((e, index) => (
                                <tr className="border-b hover:bg-gray-50" key={e.id + "-" + index}>
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">
                                        <div className="w-[60px] h-[60px] bg-cover bg-center bg-no-repeat rounded-[5px]" style={{
                                            backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${e.imageUrl}')`
                                        }}></div>
                                    </td>
                                    <td className="px-4 py-2">
                                        {e.title}
                                    </td>
                                    <td className="px-4 py-2">
                                        {e.postedAt}
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="flex">
                                            <Link
                                                className='mx-2'
                                                href={'/admin/blog/update?id=' + e.id}
                                            >
                                                <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#000000"
                                                >
                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                    <g id="SVGRepo_iconCarrier">
                                                        {" "}
                                                        <title />{" "}
                                                        <g id="Complete">
                                                            {" "}
                                                            <g id="edit">
                                                                {" "}
                                                                <g>
                                                                    {" "}
                                                                    <path
                                                                        d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                                                                        fill="none"
                                                                        stroke="#F07202"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                    />{" "}
                                                                    <polygon
                                                                        fill="none"
                                                                        points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                                                                        stroke="#F07202"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                    />{" "}
                                                                </g>{" "}
                                                            </g>{" "}
                                                        </g>{" "}
                                                    </g>
                                                </svg>
                                            </Link>
                                            <button className="mx-2">
                                                <svg
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                    <g id="SVGRepo_iconCarrier">
                                                        {" "}
                                                        <path
                                                            d="M10 11V17"
                                                            stroke="#BBBBBB"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />{" "}
                                                        <path
                                                            d="M14 11V17"
                                                            stroke="#BBBBBB"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />{" "}
                                                        <path
                                                            d="M4 7H20"
                                                            stroke="#BBBBBB"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />{" "}
                                                        <path
                                                            d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                                                            stroke="#BBBBBB"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />{" "}
                                                        <path
                                                            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                                            stroke="#BBBBBB"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />{" "}
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}