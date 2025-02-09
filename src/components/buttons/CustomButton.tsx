import { ButtonType } from "@/types/button";
import React from "react";

export default function CustomButton({ title, onClick }: ButtonType) {
    return (
        <button
            className="bg-[#FFBE27] px-[2rem] text-[#F07202] rounded-[5px] py-[10px] text-[16px] font-bold text-white opacity-[1]"
            onClick={() => onClick}
        >
            {title}
        </button>
    )
}