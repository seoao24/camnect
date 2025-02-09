import React from "react";

interface TitleProps {
    content: string
}
export default function Title({content} : TitleProps){
    return (
        <div className="text-center text-[40px] text-[#F07202] font-bold">
            {content}
        </div>
    )
}