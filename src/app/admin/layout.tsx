'use client';
import Link from 'next/link';
import React, { ReactNode, Suspense } from 'react'

interface AdminLayoutProps {
    children: ReactNode;
}
export default function AdminLayout(props: AdminLayoutProps) {
    return (
        <>
            <Suspense>
                <button
                    data-drawer-target="default-sidebar"
                    data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        />
                    </svg>
                </button>
                <aside
                    id="default-sidebar"
                    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                    aria-label="Sidebar"
                >
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link
                                    href="/admin/dashboard"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 21"
                                    >
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ms-3">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/blog"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        version="1.1"
                                        id="_x32_"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 512 512"
                                        xmlSpace="preserve"
                                        fill="#7A808D"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <style
                                                type="text/css"
                                                dangerouslySetInnerHTML={{ __html: " .st0{fill:#7A808D;} " }}
                                            />{" "}
                                            <g>
                                                {" "}
                                                <path
                                                    className="st0"
                                                    d="M0,0.005v511.991h512v-18.07V0.005H0z M475.859,475.855H36.141V111.427h439.718V475.855z"
                                                />{" "}
                                                <rect
                                                    x="295.154"
                                                    y="309.893"
                                                    className="st0"
                                                    width="138.537"
                                                    height="118.967"
                                                />{" "}
                                                <rect
                                                    x="78.308"
                                                    y="311.693"
                                                    className="st0"
                                                    width="162.625"
                                                    height="18.071"
                                                />{" "}
                                                <rect
                                                    x="78.308"
                                                    y="408.99"
                                                    className="st0"
                                                    width="162.625"
                                                    height="18.07"
                                                />{" "}
                                                <rect
                                                    x="78.308"
                                                    y="360.346"
                                                    className="st0"
                                                    width="162.625"
                                                    height="18.07"
                                                />{" "}
                                                <path
                                                    className="st0"
                                                    d="M80.594,268.538h36.415c20.752,0,33.317-9.035,33.317-27.953c0-11.426-6.494-19.341-12.847-21.741v-0.283 c6.353-3.529,11.153-10.023,11.153-20.461c0-15.256-9.742-25.552-30.627-25.552H80.594c-0.838,0-1.403,0.565-1.403,1.411v93.159 C79.19,267.973,79.755,268.538,80.594,268.538z M99.944,190.185c0-0.556,0.264-0.846,0.847-0.846h14.682 c7.897,0,12.555,4.094,12.555,11.144c0,7.067-4.658,11.302-12.555,11.302h-14.682c-0.583,0-0.847-0.282-0.847-0.846V190.185z M99.944,228.576c0-0.556,0.264-0.838,0.847-0.838h15.794c8.489,0,12.997,4.658,12.997,12.009c0,7.473-4.508,12-12.997,12h-15.794 c-0.583,0-0.847-0.291-0.847-0.856V228.576z"
                                                />{" "}
                                                <path
                                                    className="st0"
                                                    d="M178.048,268.538h62.55c0.839,0,1.403-0.565,1.403-1.42v-15.662c0-0.857-0.564-1.412-1.403-1.412h-42.352 c-0.574,0-0.848-0.282-0.848-0.856v-75.229c0-0.846-0.556-1.411-1.411-1.411h-17.939c-0.846,0-1.402,0.565-1.402,1.411v93.159 C176.646,267.973,177.202,268.538,178.048,268.538z"
                                                />{" "}
                                                <path
                                                    className="st0"
                                                    d="M295.127,270.082c16.809,0,30.071-7.756,35.012-23.286c2.118-6.634,2.674-12,2.674-26.258 c0-14.259-0.556-19.624-2.674-26.259c-4.94-15.52-18.202-23.285-35.012-23.285c-16.799,0-30.07,7.765-35.002,23.285 c-2.126,6.635-2.691,12-2.691,26.259c0,14.258,0.565,19.624,2.691,26.258C265.057,262.327,278.328,270.082,295.127,270.082z M280.022,199.926c2.117-6.634,7.208-10.587,15.105-10.587c7.906,0,12.988,3.953,15.106,10.587 c1.129,3.397,1.553,8.039,1.553,20.612c0,12.555-0.424,17.223-1.553,20.603c-2.118,6.644-7.2,10.606-15.106,10.606 c-7.897,0-12.988-3.962-15.105-10.606c-1.121-3.38-1.553-8.048-1.553-20.603C278.469,207.965,278.901,203.323,280.022,199.926z"
                                                />{" "}
                                                <path
                                                    className="st0"
                                                    d="M395.424,270.082c16.932,0,30.203-8.603,35.012-24c1.685-5.214,2.383-13.12,2.383-21.59v-7.915 c0-0.83-0.565-1.403-1.403-1.403h-33.026c-0.857,0-1.421,0.574-1.421,1.403v13.571c0,0.838,0.564,1.402,1.421,1.402h12.979 c0.564,0,0.846,0.292,0.846,0.847c0,4.085-0.424,7.058-1.129,9.467c-1.976,6.345-8.188,9.883-15.388,9.883 c-8.33,0-13.562-3.962-15.68-10.606c-1.12-3.38-1.544-8.048-1.544-20.603c0-12.574,0.424-17.082,1.544-20.47 c2.118-6.636,7.209-10.729,15.406-10.729c7.897,0,12.688,3.388,16.509,9.882c0.282,0.706,0.988,0.988,1.985,0.706l15.097-6.352 c0.839-0.424,0.998-1.27,0.565-2.126c-4.526-11.577-16.235-20.453-34.156-20.453c-17.091,0-30.361,7.765-35.302,23.285 c-2.118,6.635-2.692,12-2.692,26.259c0,14.258,0.574,19.624,2.692,26.258C365.063,262.327,378.333,270.082,395.424,270.082z"
                                                />{" "}
                                            </g>{" "}
                                        </g>
                                    </svg>

                                    <span className="flex-1 ms-3 whitespace-nowrap">Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/chat"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Chat</span>
                                    {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                    3
                                </span> */}
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 18"
                                    >
                                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                        />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Đăng xuất</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="p-4 sm:ml-64">
                    {props.children}
                </div>
            </Suspense>
        </>

    )
}
