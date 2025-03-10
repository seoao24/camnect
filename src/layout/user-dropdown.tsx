'use client';
import { useState } from "react";
import { UserInfo } from "./app-header";
import Link from "next/link";
import Cookies from "js-cookie";

interface UserDropdownProps {
    currentUser: UserInfo
}
export default function UserDropdown(props: UserDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

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
                            >Quản trị</Link>
                        ) : null
                    }
                    <Link
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        href={'/user'}
                    >Trang cá nhân</Link>
                    <Link
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        onClick={() => {
                            Cookies.remove('access-key');
                        }}
                        href={'/sign-in'}
                    >Đăng xuất</Link>
                </div>
            )}
        </div>
    );
}
