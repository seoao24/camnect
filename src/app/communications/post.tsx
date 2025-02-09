import React from 'react'

interface PostProps {
    avatarUrl: string,
    fullname: string,
    status: string,
    lastPost: string,
    description: string,
    imageUrls: string[]
}
export default function Post(props: PostProps) {
    return (
        <div className='card shadow-lg py-5 px-10 my-5 rounded-[20px]'>
            <div className="flex">
                <div className="w-[67px] h-[67px] bg-no-repeat bg-cover rounded-[50%]"
                    style={{
                        backgroundImage: `url('${props.avatarUrl}')`
                    }}></div>
                <div className='px-3'>
                    <div className="font-bold text-[16px]">{props.fullname}</div>
                    <div className="flex">
                        <div className="px-3 py-2 text-[#CCAA8C] border-[1px] border-[#CCAA8C] rounded-[5px] text-[14px]">
                            {props.status}
                        </div>
                        <div className="px-3 py-2 text-[#B3B3B3] border-[1px] border-[#B3B3B3] rounded-[5px] mx-3">
                            {props.lastPost}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3 text-[14px]">
                {props.description}
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    props.imageUrls.map((url, index) => {
                        return (
                            <div key={"image" + index} className="rounded-[10px] bg-cover bg-no-repeat w-full h-[500px]"
                                style={{
                                    backgroundImage: `url('${url}')`
                                }}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
