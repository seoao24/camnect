'use client';
import { useState } from "react";
import { UserInfo } from "./app-header";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { setIsLogin } from "@/redux/slices/loginSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

interface UserDropdownProps {
    currentUser: UserInfo
}
export default function UserDropdown(props: UserDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const logout = () => {
        Cookies.remove('access-key');
        Cookies.remove('currentUser');
        setIsOpen(false);
        dispatch(setIsLogin())
        router.push("/sign-in");
    }
    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-5 py-2 bg-[#F07202] text-white rounded-[20px]"
            >
                {props.currentUser?.fullname}
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                    {
                        props.currentUser?.role == 2 ? (
                            <Link
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                href={'/admin/dashboard'}
                                onClick={() => setIsOpen(false)}
                            >Quản trị</Link>
                        ) : null
                    }
                    <Link
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        href={'/user'}
                        onClick={() => setIsOpen(false)}
                    >Trang cá nhân</Link>
                    <div
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        onClick={logout}
                    >Đăng xuất</div>
                </div>
            )}
        </div>
    );
}
