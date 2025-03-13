'use client';
import React, { useState } from 'react'
import UserHero from '../user/user-hero'
import axiosInstance from '@/api/apiBase';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function AddPost() {
    const [images, setImages] = useState<File[]>([])
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [description, setDescription] = useState<string>();
    const router = useRouter();
    const addPost = async () => {
        try {
            const formData = new FormData();
            formData.append("id", description ?? "");
            images.forEach((image) => {
                formData.append(`images`, image);
                formData.append(`description`, description);
            });
            await axiosInstance.post("/Post/Create", formData);
            toast.success("Bài đăng được tạo thành công");
            router.push('/user');
        } catch{
            toast.error("Lỗi khi tạo bài đăng");
        }
    }
    return (
        <div>
            <UserHero/>
            <div className='md:flex justify-center hidden mb-5'>
                <div className="container">
                    <div className="flex justify-between items-center py-5">
                        <button className="bg-[#F07202] rounded-[10px] flex px-4 py-2 items-center"
                        onClick={addPost}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ffffff"></path> </g></svg>
                            <div className='text-[24px] text-white ml-2'>Tạo bài viết mới!</div>
                        </button>
                        <input type="file" name="" id="add-image" className='hidden' onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                const file = e.target.files[0];
                                const newImageUrl = URL.createObjectURL(file);
                                setImages((images) => [...images, file]);
                                setImageUrls((imageUrls) => [...imageUrls, newImageUrl])
                            }
                        }} />
                        <label htmlFor='add-image' className="bg-[#F07202] rounded-[10px] flex px-4 py-2 items-center cursor-pointer">
                            <svg
                                fill="#ffffff"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 36.129 36.129"
                                xmlSpace="preserve"
                                stroke="#ffffff"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <g>
                                        {" "}
                                        <path d="M30.32,7.163H1.811C0.812,7.163,0,7.974,0,8.975V31.15c0,0.998,0.812,1.811,1.811,1.811H30.32c1,0,1.812-0.812,1.812-1.811 V8.974C32.129,7.972,31.32,7.163,30.32,7.163z M28.51,10.784v16.323l-4.141-5.026c-0.152-0.185-0.422-0.218-0.615-0.076 l-4.816,3.517l-8.27-8.045c-0.096-0.094-0.229-0.135-0.358-0.127c-0.134,0.012-0.253,0.083-0.329,0.191l-6.359,9.099V10.784H28.51 L28.51,10.784z M17.65,17.573c0-1.623,1.319-2.943,2.94-2.943c1.623,0,2.941,1.32,2.941,2.943c0,1.619-1.318,2.941-2.941,2.941 C18.969,20.514,17.65,19.191,17.65,17.573z M34.771,26.396c-0.75,0-1.356-0.608-1.356-1.356V5.88H5.206 c-0.75,0-1.357-0.606-1.357-1.356c0-0.749,0.607-1.356,1.357-1.356h29.565c0.75,0,1.357,0.607,1.357,1.356v20.517 C36.129,25.788,35.521,26.396,34.771,26.396z" />{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                            <div className='text-[24px] text-white ml-2'>Thêm ảnh</div>
                        </label>
                    </div>
                    <hr />
                    <textarea
                        name=""
                        id=""
                        rows={3}
                        className='w-full text-center items-center text-[24px] outline-none border-[1px] border-[#F07202] text-[#F07202] rounded-[5px]'
                        placeholder='Bạn đang suy nghĩ điều gì?'
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    <div className={`mt-10 grid grid-cols-${imageUrls.length < 4 ? imageUrls.length : 4} gap-4`}>
                        {
                            imageUrls.length && imageUrls.map((url, index) => (
                            <div className={`relative ${imageUrls.length == 1 ? 'h-[600px]' : imageUrls.length == 2 ? 'h-[400px]' : 'h-[300px]'} bg-center bg-cover bg-no-repeat`}
                                    key={url + index}
                                    style={{
                                        backgroundImage: `url('${url}')`
                                    }}>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
