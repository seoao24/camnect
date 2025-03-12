'use client';
import React from "react";

interface CardTextProps {
    title: string,
    description: string,
    classes: string | undefined
}
export default function CardText({title, description, classes} : CardTextProps){
    return (
        <div className={`shadow-md rounded-[12px] bg-white px-8 py-5 max-w-[270px] pb-[3rem]text-[#6B716E] ${classes}`}>
            <div className="text-[20px] font-bold">{title}</div>
            <div className="text-[14px] text-justify ">{description}</div>
        </div>
    )
}