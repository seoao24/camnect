'use client';
import React, { useState } from 'react'

const concepts = [
    {
        id: "co-dien",
        title: "Cổ điển"
    },
    {
        id: "sinh-nhat",
        title: "Sinh nhật"
    },
    {
        id: "chan-dung",
        title: "Chân dung"
    },
    {
        id: "ao-dai",
        title: "Áo dài"
    }
]

const additionServices = [
    {
        id: "lam-toc",
        title: "Làm tóc"
    },
    {
        id: "trang-phuc",
        title: "Trang phục"
    },
    {
        id: "make-up",
        title: "Make-up"
    },
]
export default function OptionalService() {
    const [selectedConcept, setSelectedConcept] = useState(concepts[0].id);
    const [selectedAdditionervice, setSelectedAdditionService] = useState(additionServices[0].id);

    return (
        <div className='shadow text-[#606060] py-2 px-4 mt-5'>
            <div className="text-[28px] font-bold">Lọc các tùy chọn dịch vụ:</div>
            <table className='mt-2'>
                <tbody>
                    <tr>
                        <td className='text-[24px] font-bold'>Concept:</td>
                        <td>
                            {
                                concepts.map(e => (
                                    <button key={e.id} className={`rounded-[10px] mx-2 px-4 py-1 ${selectedConcept == e.id ? 'bg-[#F07202] text-white' : 'bg-[#DCDCDC]'}`}
                                        onClick={() => setSelectedConcept(e.id)}>
                                        {e.title}
                                    </button>
                                ))
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='text-[24px] font-bold'>Dịch vụ thêm:</td>
                        <td>
                            {
                                additionServices.map(e => (
                                    <button key={e.id} className={`rounded-[10px] mx-2 px-4 py-1 ${selectedAdditionervice == e.id ? 'bg-[#F07202] text-white' : 'bg-[#DCDCDC]'}`}
                                        onClick={() => setSelectedAdditionService(e.id)}>
                                        {e.title}
                                    </button>
                                ))
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
