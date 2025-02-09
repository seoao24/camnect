'use client';
import { ButtonType } from "@/types/button";
import React from "react";

export default function YellowButton({ title, onClick }: ButtonType) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: "#FFBE27",
                borderRadius: "20px",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                color: "#000",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontWeight: 'bold'
            }}
        >
            {title}
        </button>
    )
}