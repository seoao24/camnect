import { ButtonType } from "@/types/button";
import React from "react";

export default function OutlineButton({title, onClick} : ButtonType){
    return (
        <button
            className="bg-none border-[#F07202] border-[1px] px-[2rem] text-[#F07202] rounded-[20px] py-[10px] text-[16px] font-bold mx-2"
            onClick={onClick}
        >
            {title}
        </button>
    )
}