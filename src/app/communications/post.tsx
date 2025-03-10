'use client';
import React, { useState } from 'react'
import CommentModal from '../user/comment-modal';

interface PostProps {
    id: string,
    avatarUrl: string | null,
    fullname: string,
    status: string,
    lastPost: string,
    description: string,
    imageUrls: string[],
    totalLike: number,
    totalComment: number
}
export default function Post(props: PostProps) {
    const [isComment, setIsComment] = useState(false);
    return (
        <div className='card shadow-lg py-5 md:px-10 px-5 my-5 rounded-[20px] w-full'>
            <div className="flex items-center">
                <div className="w-[67px] h-[67px] bg-no-repeat bg-cover rounded-[50%] bg-[#D9D9D9]"
                    style={{
                        backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${props.avatarUrl}')`
                    }}>
                        {props.avatarUrl ? '' : props.fullname.charAt[0]}
                    </div>
                <div className='px-3'>
                    <div className="font-bold text-[16px]">{props.fullname}</div>
                    <div className="flex items-center">
                        <div className="px-2 py-1 text-[#CCAA8C] border-[1px] border-[#CCAA8C] rounded-[5px] text-[12px]">
                            {props.status}
                        </div>
                        <div className="px-2 py-1 text-[#B3B3B3] border-[1px] border-[#B3B3B3] rounded-[5px] mx-3 text-[12px]">
                            {props.lastPost}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3 text-[14px]">
                {props.description}
            </div>
            <div className={`grid ${props.imageUrls.length == 0 ? 'hidden' : props.imageUrls.length == 1 ? 'grid-cols-1' : props.imageUrls.length == 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}>
                {
                    props.imageUrls.map((url, index) => {
                        return (
                            <div key={"image" + index} className="rounded-[10px] bg-cover bg-no-repeat w-full md:h-[500px] h-[152px]"
                                style={{
                                    backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${url}')`
                                }}></div>
                        )
                    })
                }
            </div>
            <div className="flex justify-between mt-10">
                <button className='flex items-center'>
                    <svg
                        height="30px"
                        width="30px"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{ __html: " .st0{fill:#666967;} " }}
                            />{" "}
                            <g>
                                {" "}
                                <path
                                    className="st0"
                                    d="M458.059,98.97c-13.055-16.818-28.248-31.928-45.049-45.065c-43.374-33.75-97.896-53.868-157.043-53.868 C114.854,0.037,0,114.817,0,256.004c0,46.45,12.482,90.113,34.198,127.686c22.528,38.973,55.111,71.547,94.084,94.075 c37.571,21.716,81.228,34.199,127.684,34.199C397.154,511.963,512,397.116,512,256.004C512,196.849,491.892,142.327,458.059,98.97z M255.992,467.039c-116.554,0-211.043-94.498-211.043-211.051c0-116.562,94.489-211.051,211.043-211.051 c116.579,0,211.068,94.49,211.068,211.051C467.06,372.541,372.57,467.039,255.992,467.039z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M235.851,295.59c-1.484-0.605-3.191-0.274-4.327,0.862l-80.391,80.382c-3.348,3.357-5.022,8.032-4.566,12.747 c0.456,4.717,3.108,8.016,6.929,11.629c0,0,12.316,12.905,30.186,20.324c17.879,7.394,35.707,6.971,35.707,6.971 c4.941,0.008,9.466-0.299,13.129-3.316c3.664-3.009,5.786-7.509,5.786-12.25l-0.008-113.678 C238.296,297.654,237.334,296.204,235.851,295.59z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M276.158,216.377c1.475,0.614,3.183,0.282,4.318-0.854l80.391-80.391c3.349-3.348,5.023-8.023,4.584-12.74 c-0.464-4.716-3.124-8.023-6.946-11.629c0,0-12.301-12.914-30.179-20.315c-17.878-7.402-35.707-6.979-35.707-6.979 c-4.94-0.016-9.474,0.306-13.129,3.324c-3.656,3.009-5.778,7.51-5.778,12.242v113.686 C273.712,214.321,274.683,215.772,276.158,216.377z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M216.398,272.598c-0.614-1.475-2.056-2.437-3.663-2.437H99.048c-4.749,0-9.234,2.106-12.242,5.769 c-3.016,3.663-3.472,7.874-3.331,13.137c0,0-0.423,17.821,6.978,35.699c7.41,17.878,20.324,30.186,20.324,30.186 c3.481,3.49,6.904,6.482,11.629,6.938c4.708,0.456,9.39-1.226,12.731-4.575l80.407-80.391 C216.671,275.798,217.011,274.09,216.398,272.598z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M295.611,242.204c0.614,1.475,2.064,2.444,3.663,2.444h113.678c4.75,0,9.25-2.122,12.251-5.776 c3.009-3.664,3.465-7.875,3.324-13.138c0,0,0.423-17.82-6.979-35.698c-7.41-17.879-20.316-30.179-20.316-30.179 c-3.481-3.498-6.912-6.482-11.628-6.938c-4.716-0.456-9.391,1.219-12.756,4.567l-80.382,80.399 C295.329,239.004,294.99,240.712,295.611,242.204z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M86.806,238.872c3.017,3.654,7.494,5.776,12.242,5.776h113.686c1.607,0,3.05-0.969,3.663-2.444 c0.621-1.492,0.282-3.2-0.862-4.327l-80.39-80.391c-3.349-3.357-8.024-5.023-12.74-4.567c-4.725,0.448-8.016,3.108-11.629,6.929 c0,0-12.914,12.308-20.316,30.187c-7.41,17.878-6.987,35.698-6.987,35.698C83.474,230.682,83.789,235.208,86.806,238.872z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M425.203,275.938c-3.009-3.672-7.501-5.778-12.251-5.778H299.266c-1.591,0-3.042,0.962-3.664,2.445 c-0.613,1.484-0.274,3.192,0.862,4.318l80.382,80.391c3.357,3.348,8.032,5.031,12.748,4.575c4.724-0.456,8.023-3.124,11.636-6.945 c0,0,12.906-12.301,20.316-30.179c7.402-17.878,6.979-35.699,6.979-35.699C428.526,284.127,428.212,279.593,425.203,275.938z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M231.524,215.514c1.136,1.136,2.843,1.476,4.327,0.862c1.484-0.614,2.445-2.072,2.445-3.663V99.036 c0.008-4.75-2.122-9.234-5.778-12.251c-3.663-3.025-7.858-3.464-13.129-3.324c0,0-17.828-0.423-35.707,6.979 c-17.87,7.402-30.186,20.307-30.186,20.307c-3.498,3.489-6.474,6.912-6.929,11.637c-0.464,4.724,1.218,9.399,4.566,12.747 L231.524,215.514z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M280.476,296.444c-1.135-1.12-2.843-1.459-4.318-0.854c-1.475,0.614-2.446,2.064-2.446,3.672v113.685 c0,4.734,2.122,9.234,5.778,12.242c3.656,3.017,7.866,3.473,13.129,3.324c0,0,17.829,0.415,35.707-6.978 c17.878-7.419,30.179-20.316,30.179-20.316c3.498-3.489,6.481-6.92,6.946-11.637c0.44-4.716-1.235-9.383-4.584-12.747 L280.476,296.444z"
                                />{" "}
                            </g>{" "}
                        </g>
                    </svg>
                    <div className="ml-2 text-[20px] text-[#666967]">{props.totalLike} like</div>
                </button>
                <button className="flex items-center" onClick={() => setIsComment(true)}>
                    <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#666967"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <defs>
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            ".cls-1{fill:none;stroke:#666967;stroke-miterlimit:10;stroke-width:1.91px;}"
                                    }}
                                />
                            </defs>
                            <path
                                className="cls-1"
                                d="M1.5,5.3v9.54a3.82,3.82,0,0,0,3.82,3.82H7.23v2.86L13,18.66h5.73a3.82,3.82,0,0,0,3.82-3.82V5.3a3.82,3.82,0,0,0-3.82-3.82H5.32A3.82,3.82,0,0,0,1.5,5.3Z"
                            />
                        </g>
                    </svg>
                    <div className="ml-2 text-[20px] text-[#666967]">{props.totalComment} bình luận</div>
                </button>
                <button className="flex items-center">
                    <div className="bg-contain bg-center bg-no-repeat w-[30px] h-[30px]" style={{
                        backgroundImage: `url('/assets/images/check-square.png')`
                    }}></div>
                    <div className="ml-2 text-[20px] text-[#666967]">Đặt lịch</div>
                </button>
            </div>
            <CommentModal isOpen={isComment} onClose={() => setIsComment(false)} id={props.id}/>
        </div>
    )
}
