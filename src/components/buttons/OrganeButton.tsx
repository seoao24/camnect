import { ButtonType } from "@/types/button";
import React from "react";

export default function OrgangeButton({title, onClick} : ButtonType){
    return (
        <button
            className="bg-[#F07202] px-[2rem] text-[#F07202] rounded-[20px] py-[10px] text-[16px] font-bold text-white mx-2"
            onClick={onClick}
        >
            {title}
        </button>
    )
}