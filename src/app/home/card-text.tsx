import React from "react";

interface CardTextProps {
    title: string,
    description: string,
    classes: string | undefined
}
export default function CardText({title, description, classes} : CardTextProps){
    return (
        <div className={`shadow-md rounded-[12px] bg-white px-5 py-5 max-w-[250px] pb-[3rem] ${classes}`}>
            <div className="text-[20px] text-[#6B716E] font-bold">{title}</div>
            <div className="text-[14px] text-[#777777]">{description}</div>
        </div>
    )
}