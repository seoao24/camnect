'use client';
import axiosInstance from '@/api/apiBase';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

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
    conceptIds: string[]
    imageDefault: ImageDefault | null
}
interface ConceptModel {
    id: string,
    name: string,
    description: string
}
interface ImageDefault {
    imageUrl: string,
    size: number
}
interface ServiceItemProps {
    id: string;
    imageUrl: string;
    name: string;
    type: string;
    address: string;
    rate: number;
    price: number;
    oldPrice: number;
    link: string
}
export default function AddService() {
    const [selectedConcept, setSelectedConcept] = useState(concepts[0].id);
    const [selectedAdditionervice, setSelectedAdditionService] = useState(additionServices[0].id);
    const [isEditTitle, setIsEditTitle] = useState(true);
    const [concept, setConcept] = useState<ConceptModel[]>([]);
    const [userServices, setUserServices] = useState<ServiceItemProps[]>([])
    const [form, setForm] = useState<AddServiceForm>({
        type: '',
        name: '',
        price: 0,
        description: '',
        image: null,
        imageUrl: '/assets/images/default-image.png',
        conceptIds: [],
        imageDefault: null
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "image" && e.target.files) {
            const file = e.target.files[0];
            const newImageUrl = URL.createObjectURL(file);
            setForm(prevForm => ({
                ...prevForm,
                image: file,
                imageUrl: newImageUrl,
                imageDefault: { imageUrl: newImageUrl, size: 0 }
            }));
        } else {
            setForm(prevForm => ({
                ...prevForm,
                [e.target.name]: e.target.value
            }));
        }

    };
    const addService = async () => {
        try {
            const updatedForm = {
                ...form,
                conceptIds: [...form.conceptIds, selectedConcept] // Đảm bảo concept được lưu
            };
            await axiosInstance.post("/Service/Create", updatedForm);
            if (selectedConcept) form.conceptIds.concat(selectedConcept);
            toast.success("Thêm dịch vụ thành công");
            getUserServices();
        } catch (e: unknown) {
            if (axios.isAxiosError(e) && e.response) {
                toast.error(e.response.data);
            } else {
                toast.error("Có lỗi xảy ra, vui lòng thử lại.");
            }
        }
    }
    const getConcepts = async () => {
        try {
            const response = await axiosInstance.get("/Service/SearchConcept");
            setConcept(response.data);
            setSelectedConcept(response.data[0].id)
        } catch {
            // toast.error("Không thể lấy danh sách concept");
        }
    }
    const getUserServices = async () => {
        try {
            const params = {
                getByUser: true
            }
            const response = await axiosInstance.get("/Service/Search", {
                params: params
            });
            setUserServices(response.data?.items);
            console.log(response.data?.items)
        } catch {
            // toast.error("Không thể lấy danh sách concept");
        }
    }
    useEffect(() => {
        getConcepts();
        getUserServices();
    }, [])
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
                                        concept.map(e => (
                                            <button key={`concept-${e.id}`} className={`rounded-[10px] mx-2 px-4 py-1 ${selectedConcept == e.id ? 'bg-[#F07202] text-white' : 'bg-[#DCDCDC]'}`}
                                                onClick={() => setSelectedConcept(e.id)}>
                                                {e.name}
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
                <div className="flex justify-center my-5">
                    <button className='bg-[#F07202] rounded-[10px] text-white py-2 px-5'
                        onClick={addService}>
                        Đăng dịch vụ
                    </button>
                </div>
                <div className="mt-10">
                    <div className="text-[40px] text-[#F07202] uppercase font-bold">CÁC SẢN PHẨM KHÁC CỦA BẠN</div>
                    <div className="grid md:grid-cols-4 grid-col-1 gap-4">
                        {
                            userServices.map(e => (
                                <div className='rounded-[25px] bg-white p-4 md:w-full' key={e.id}>
                                    {/* <Image
                                src={props.imageUrl}
                                alt={props.id}
                                width={0}
                                height={0}
                                style={{
                                    width: "100%",
                                    height: "207px"
                                }}
                                className='rounded-[25px] md:w-full w-[300px]'
                            /> */}
                                    <div className="bg-cover bg-center bg-no-repeat h-[207px]" style={{
                                        backgroundImage: `url('')`
                                    }}></div>
                                    <div className='text-[20px] font-bold'>{e.name}</div>
                                    <div className="text-[18px]">{e.type}</div>
                                    <div className="flex items-center">
                                        <svg
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 64 64"
                                            enableBackground="new 0 0 64 64"
                                            xmlSpace="preserve"
                                            fill="#000000"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    fill="#F07202"
                                                    d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                                                />{" "}
                                            </g>
                                        </svg>
                                        <div className='text-[14px] text-[#606060]'>{e.address}</div>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 64 64"
                                            enableBackground="new 0 0 64 64"
                                            xmlSpace="preserve"
                                            fill="#000000"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    fill="#FF9900"
                                                    d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"
                                                />{" "}
                                            </g>
                                        </svg>
                                        <div className='text-[14px] text-[#606060]'>{e.rate}</div>
                                    </div>
                                    <div className="text-[18px] font-bold text-nowrap">Giá: {e.price}</div>
                                    <div className="text-[14px] font-bold text-nowrap text-[#828282] line-through">Giá: {e.oldPrice}</div>
                                    <div className="flex justify-between">
                                        <button className="text-white bg-[#F07202] rounded-[30px] px-[14px] py-2 font-bold flex items-center">
                                            <div>Thêm vào giỏ hàng</div>
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
                                                        d="M8.7351 14.0181C8.91085 13.6985 9.24662 13.5 9.61132 13.5H16.47C17.22 13.5 17.88 13.09 18.22 12.47L21.6008 6.33041C21.7106 6.13097 21.7448 5.91025 21.7129 5.70131C21.8904 5.52082 22 5.27321 22 5C22 4.44772 21.5523 4 21 4H6C5.96703 4 5.93443 4.0016 5.90228 4.00471L5.7317 3.64435C5.40095 2.94557 4.69708 2.5 3.92398 2.5H2.92004C2.36776 2.5 1.92004 2.94772 1.92004 3.5C1.92004 4.05228 2.36776 4.5 2.92004 4.5H3.14518C3.6184 4.5 4.04931 4.77254 4.25211 5.20011L7.08022 11.1627C7.35632 11.7448 7.33509 12.4243 7.02318 12.988L6.17004 14.53C5.44004 15.87 6.40004 17.5 7.92004 17.5H18.92C19.4723 17.5 19.92 17.0523 19.92 16.5C19.92 15.9477 19.4723 15.5 18.92 15.5H9.61131C8.85071 15.5 8.36855 14.6845 8.7351 14.0181Z"
                                                        fill="#ffffff"
                                                    />{" "}
                                                    <path
                                                        d="M7.92005 18.5C6.82005 18.5 5.93005 19.4 5.93005 20.5C5.93005 21.6 6.82005 22.5 7.92005 22.5C9.02005 22.5 9.92005 21.6 9.92005 20.5C9.92005 19.4 9.02005 18.5 7.92005 18.5Z"
                                                        fill="#ffffff"
                                                    />{" "}
                                                    <path
                                                        d="M17.9201 18.5C16.8201 18.5 15.9301 19.4 15.9301 20.5C15.9301 21.6 16.8201 22.5 17.9201 22.5C19.0201 22.5 19.9201 21.6 19.9201 20.5C19.9201 19.4 19.0201 18.5 17.9201 18.5Z"
                                                        fill="#ffffff"
                                                    />{" "}
                                                </g>
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
