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
interface AddServiceForm {
    type: string,
    name: string,
    price: number,
    description: string,
    image: File | null,
    imageUrl: string
}
export default function AddService() {
    const [selectedConcept, setSelectedConcept] = useState(concepts[0].id);
    const [selectedAdditionervice, setSelectedAdditionService] = useState(additionServices[0].id);
    const [isEditTitle, setIsEditTitle] = useState(true);
    const [form, setForm] = useState<AddServiceForm>({
        type: '',
        name: '',
        price: 0,
        description: '',
        image: null,
        imageUrl: '/assets/images/default-image.png'
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "image" && e.target.files) {
            const file = e.target.files[0];
            setForm({
                ...form,
                image: file,
                imageUrl: URL.createObjectURL(file)
            });
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        }
    }

    return (
        <div className='flex justify-center'>
            <div className="container">
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
                <div className='shadow-md mt-5'>
                    <div className="w-full border-[1px] border-[#8E8B8B] flex px-4 py-2">
                        <div className="">
                            <div className={`text-[30px] text-[#F07202] font-bold ${isEditTitle ? 'hidden' : ''}`}>{form.type}</div>
                            <input type="text" name='type' className={`px-5 py-1 border-none outline-none ${isEditTitle ? '' : 'hidden'}`} value={form.type} placeholder='Nhập loại dịch vụ' onChange={handleChange} />
                        </div>
                        <div className="flex items-center text-[#606060] text-[24px]">
                            <div className='text-[#B7B7B7] text-[20px] border-l-[1px] border-l-[#B7B7B7] px-5 mx-5 cursor-pointer'
                                onClick={() => setIsEditTitle(!isEditTitle)}>
                                {isEditTitle ? 'Lưu' : 'Chỉnh sửa'}
                            </div>
                        </div>
                    </div>
                    <div className="flex py-5">
                        <div className='shadow-md rounded-[20px] my-2 mx-2'>
                            <input type="file" name="image" id="add-service-file" className='hidden' onChange={handleChange} />
                            <label htmlFor="add-service-file">
                                <div className='w-[400px] h-[325px] bg-cover bg-center bg-no-repeat' style={{
                                    backgroundImage: `url('${form.imageUrl}')`
                                }}>

                                </div>
                            </label>
                        </div>
                        <div className='w-full px-5'>
                            <input name='name' type="text" className='border-[#F07202] border-[1px] outline-none px-3 py-1 rounded-[5px] w-full h-[54px]' placeholder='Tên dịch vụ' onChange={handleChange} />
                            <input name='price' type="number" className='border-[#F07202] border-[1px] outline-none px-3 py-1 rounded-[5px] w-full my-5 h-[54px]' placeholder='Giá' onChange={handleChange} />
                            <input name='description' className='border-[#F07202] border-[1px] outline-none px-3 py-1 rounded-[5px] w-full' placeholder='Miêu tả sản phẩm' onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <button className='bg-[#F07202] rounded-[10px] text-white py-2 px-5'>
                        Đăng dịch vụ
                    </button>
                </div>
            </div>
        </div>
    )
}
