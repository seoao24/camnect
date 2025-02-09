'use client';
import OrgangeButton from '@/components/buttons/OrganeButton'
import OutlineInput from '@/components/inputs/OutlineInput'
import SelectCustom from '@/components/select'
import React from 'react'

const option1: SelectItem[] = [
    {
        title: "Bạn cần gì?",
        value: "what"
    }
]
const option2: SelectItem[] = [
    {
        title: "Khi nào bạn cần nó?",
        value: "when"
    }
]
export default function ContactForm() {
    return (
        <div className='shadow-lg px-5 py-5'>
            <div className="text-[16px] font-bold text-center">LIÊN HỆ VỚI CAMNECT NGAY!</div>
            <div className="text-[16px] text-[#8E8B8B] text-center">Hãy cho Camnect biết bạn cần hỗ trợ gì?</div>
            <SelectCustom options={option1} />
            <SelectCustom options={option2} />
            <OutlineInput placeholder='Để lại lời nhắn cho chúng tôi' />
            <button
                className="bg-[#F07202] px-[2rem] text-[#F07202] rounded-[10px] py-[10px] text-[16px] font-bold text-white w-full mt-5"
            // onClick={onClick}
            >
                Gửi ngay
            </button>
        </div>
    )
}
