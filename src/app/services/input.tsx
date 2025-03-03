import React from 'react'

export interface SearviceInputText {
    placeholder: string;
    icon: string;
    value: string;
    classes: string | undefined
}
export default function Input(props: SearviceInputText) {
    return (
        <div className={`flex border-[1px] border-[#F07202] rounded-[5px] items-center bg-white py-2 px-2 ${props.classes}`}>
            {/* <Image
                src={props.icon}
                alt='name'
                width={0}
                height={0}
                style={{
                    width: "25px",
                    height: "25px"
                }}
            /> */}
            <div className='w-[25px] h-[25px] bg-contain bg-no-repeat bg-center bg-[#D9D9D9] rounded-[5px]' style={{
                backgroundImage: `url('${props.icon}')`
            }}>

            </div>
            <input type="text" className='border-none outline-none w-full ml-3' placeholder={props.placeholder} />
            <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                        fill="#F07202"
                    />{" "}
                </g>
            </svg>

        </div>
    )
}
