'use client';
import React, { useState } from 'react'

export default function QRPay() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center bg-gray-100">
            {/* Button to open modal */}
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-1 text-white bg-[#FF9900] rounded-[20px] text-white w-[169px]"
            >
                Hoàn tất
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold">Quét mã thanh toán </h2>
                        <div className='w-[300px] h-[300px] bg-cover bg-no-repeat' style={{
                            backgroundImage: `url('/assets/images/momo-qr.png')`
                        }}>

                        </div>

                        {/* Close button */}
                        <div className="flex items-center justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-4 py-1 bg-[#FF9900] text-white rounded-[20px]"
                            >
                                Hoàn tất
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
