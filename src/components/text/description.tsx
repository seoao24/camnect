import React from "react";

interface DescriptionProps {
    content: string,
    classes: string
}
export default function Description(props: DescriptionProps){
    return (
        <div className={`text-center ${props.classes}`}>{props.content}</div>
    )
}