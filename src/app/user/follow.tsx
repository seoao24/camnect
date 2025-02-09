import React from 'react'

interface UserFollower {
    avatarUrl: string,
    fullname: string,
    link: string,
    status: string
}
const followers: UserFollower[] = [
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Nguyễn Thùy Linh",
        link: 'link1',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Trần Anh Đức",
        link: 'link2',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Nguyễn Giang",
        link: 'link3',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Trần My Hà",
        link: 'link4',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Lê Hiếu",
        link: 'link5',
        status: "Follow mới"
    },
    //
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Nguyễn Thùy Linh",
        link: 'link6',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Trần Anh Đức",
        link: 'link7',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Nguyễn Giang",
        link: 'link8',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Trần My Hà",
        link: 'link9',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Lê Hiếu",
        link: 'link10',
        status: "Follow mới"
    },
    //
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Nguyễn Thùy Linh",
        link: 'link11',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Trần Anh Đức",
        link: 'link12',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Nguyễn Giang",
        link: 'link13',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Trần My Hà",
        link: 'link14',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Lê Hiếu",
        link: 'link15',
        status: "Follow mới"
    },
    //
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Nguyễn Thùy Linh",
        link: 'link16',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Trần Anh Đức",
        link: 'link17',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Nguyễn Giang",
        link: 'link18',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Trần My Hà",
        link: 'link19',
        status: "Follow mới"
    },
    {
        avatarUrl: '/assets/images/avatar1.png',
        fullname: "Lê Hiếu",
        link: 'link20',
        status: "Follow mới"
    }
]
export default function FollowFeature() {
    return (
        <div>
            <div className="flex justify-between">
                <div className="font-bold text-[32px]">Người theo dõi</div>
                <div className="bg-[#F07202] rounded-[34px] p-1 flex items-center">
                    <input type="text" className='rounded-[34px] bg-white outline-none border-none py-2 px-4' placeholder='Tìm kiếm' />
                    <div className="px-1">
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 -0.5 21 21"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            fill="none"
                        >
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-179.000000, -280.000000)" fill="#FFFFFF">
                                    <g transform="translate(56.000000, 160.000000)">
                                        <path d="M128.93985,132.929 L130.42455,134.343 L124.4847,140 L123,138.586 L128.93985,132.929 Z M136.65,132 C133.75515,132 131.4,129.757 131.4,127 C131.4,124.243 133.75515,122 136.65,122 C139.54485,122 141.9,124.243 141.9,127 C141.9,129.757 139.54485,132 136.65,132 L136.65,132 Z M136.65,120 C132.5907,120 129.3,123.134 129.3,127 C129.3,130.866 132.5907,134 136.65,134 C140.7093,134 144,130.866 144,127 C144,123.134 140.7093,120 136.65,120 L136.65,120 Z" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-10">
                {
                    followers.map(e => (
                        <div key={e.link}>
                            <Followers
                                avatarUrl={e.avatarUrl}
                                fullname={e.fullname}
                                link={e.link}
                                status={e.status}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function Followers(props: UserFollower) {
    return (
        <div className='mt-5'>
            <div className="flex justify-center">
                <div className="w-[80px] h-[80px] rounded-[50%] bg-cover bg-no-repeat bg-[#BBBBBB]"
                    style={{
                        backgroundImage: `url('${props.avatarUrl}')`
                    }}></div>
            </div>
            <div className="text-center text-[24px] font-bold">{props.fullname}</div>
            <div className="text-center text-[16px] font-bold">{props.status}</div>
        </div>
    )
}