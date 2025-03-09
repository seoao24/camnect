'use client';
import React, { useEffect, useState } from 'react';
import AddBlock from './add-block';
import axiosInstance from '@/api/apiBase';

export default function Blog() {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");

    // Khôi phục imageUrl từ localStorage khi component mount
    useEffect(() => {
        const savedImageUrl = localStorage.getItem('imageUrl');
        if (savedImageUrl) {
            setImageUrl(savedImageUrl);
        }
    }, []);

    // Lưu imageUrl vào localStorage khi nó thay đổi
    useEffect(() => {
        if (imageUrl) {
            localStorage.setItem('imageUrl', imageUrl);
        } else {
            localStorage.removeItem('imageUrl');
        }
    }, [imageUrl]);

    const addBlog = async () => {
        console.log("Link ảnh khi bấm button: " + imageUrl);
        const body = {
            image: image
        };
        try {
            await axiosInstance.post("", body);
        } catch (error) {
            console.error("Error adding blog:", error);
        }
    };

    console.log("Link ảnh khi render lại: " + imageUrl);

    return (
        <div>
            <div className='flex justify-between items-center mb-5'>
                <div className='text-[24px] font-semibold uppercase text-[#F07202]'>Thêm Blog mới</div>
                <button
                    onClick={addBlog}
                    className="rounded-[5px] text-white bg-[#FF9900] px-4 py-2">Thêm blog</button>
            </div>
            <div>
                <textarea
                    rows={2}
                    className='w-full outline-none p-4 border-[#FF9900] border-[1px] rounded-[5px] text-[#F07202]'
                    placeholder='Nhập tiêu đề'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div className='my-4'>
                {!imageUrl && (
                    <div>
                        <input
                            type="file"
                            id='title-image'
                            className='hidden'
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    const file = e.target.files[0];
                                    const newImageUrl = URL.createObjectURL(file);
                                    setImage(file);
                                    setImageUrl(newImageUrl);
                                }
                            }}
                        />
                        <label
                            htmlFor="title-image"
                            className='px-4 py-2 bg-[#F07202] rounded-[5px] cursor-pointer text-white text-[20px] font-bold'>
                            Thêm ảnh tiêu đề
                        </label>
                    </div>
                )}
                {imageUrl && (
                    <div className="w-[300px] h-[300px] bg-cover bg-center bg-no-repeat rounded-[5px] mt-4 relative" style={{
                        backgroundImage: `url('${imageUrl}')`
                    }}>
                        <button
                            onClick={() => {
                                setImage(null);
                                setImageUrl(null);
                            }}
                            className="p-1 rounded-full bg-[#F07202] absolute top-4 right-4">
                            <svg
                                width="30px"
                                height="30px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
                                        fill="#fff"
                                    />{" "}
                                </g>
                            </svg>
                        </button>
                    </div>
                )}
            </div>
            <AddBlock value={content} onChange={(e) => setContent(e)} />
        </div>
    );
}