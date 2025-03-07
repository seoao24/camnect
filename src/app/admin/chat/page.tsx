'use client';
import React, { useEffect, useState } from 'react';
import { Send, PhoneCall, Video, Info } from "lucide-react";
import axiosInstance from '@/api/apiBase';
import { connectSignalR, sendMessage } from '@/api/signalR';

export interface User {
    userId: string;
    fullname: string;
    avatarUrl?: string | null;
    onlineStatus?: string | null;
}
interface MessageModel {
    Id?: string;
    ReceiverId: string;
    Message: string;
    Time?: Date | null;
}
export default function Chat() {
    const [messages, setMessages] = useState<MessageModel[]>([]);
    const [newMessage, setNewMessage] = useState("");

    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User>(users[0]);
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    // const sendMessage = () => {
    //     if (newMessage.trim() === "") return;
    //     setMessages([...messages, { id: Date.now(), text: newMessage, sender: "You", time: "Now", avatar: "https://via.placeholder.com/40" }]);
    //     setNewMessage("");
    // };

    const getUsers = async () => {
        try {
            var response = await axiosInstance.get(`/Authentication/ChatUsers?keyword=${searchKeyword}`);
            setUsers(response.data);
        } catch {

        }
    }

    const getConnectedSignalR = () => {
        connectSignalR((user: string, message: string) => {
            const newMessage: MessageModel = {
                Message: message,
                ReceiverId: user,
            }
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
    }
    const handleSendMessage = async () => {
        if (selectedUser?.userId.trim() && newMessage.trim()) {
            await sendMessage(selectedUser?.userId.trim(), newMessage.trim());
            setNewMessage("");
            console.log("sent message")
        }
    };
    useEffect(() => {
        getUsers();
        getConnectedSignalR();
    }, [])
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/4 bg-white shadow p-4 border-r">
                <input type="text" placeholder="Search for messages or contacts" className="w-full p-2 border rounded-lg mb-4 outline-none" onChange={(e) => {
                    setSearchKeyword(e.target.value);
                    getUsers();
                }} />
                <div className="space-y-4 overflow-y-auto scrollbar-hide max-h-[600px]">
                    {
                        users.map((e, index) => (
                            <div className="flex items-center space-x-3 cursor-pointer" key={e.userId + "-" + index} onClick={() => {
                                setSelectedUser(e);
                            }}>
                                <div className="w-[40px] h-[40px] rounded-full bg-cover bg-center bg-no-repeat bg-[#D9D9D9] text-center leading-[40px] font-semibold text-[#F07202]" style={{
                                    backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${e.avatarUrl}')`
                                }}>
                                    {e.avatarUrl ? '' : e.fullname[0].toUpperCase()}
                                </div>
                                <div>
                                    <p className="font-semibold text-[#F07202] text-[16px]">{e.fullname}</p>
                                    <p className="text-sm text-gray-500 text-[14px] italic">{e.onlineStatus}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-white shadow">
                    <div className="flex items-center space-x-3">
                        <div className="w-[40px] h-[40px] rounded-full bg-cover bg-center bg-no-repeat bg-[#D9D9D9] text-center leading-[40px] font-semibold text-[#F07202]" style={{
                            backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${selectedUser?.avatarUrl}')`
                        }}>
                            {selectedUser?.avatarUrl ? '' : selectedUser?.fullname[0].toUpperCase()}
                        </div>
                        <div>
                            <p className="font-semibold">{selectedUser?.fullname}</p>
                            <p className="text-sm text-green-500">{selectedUser?.onlineStatus}</p>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <PhoneCall className="cursor-pointer" />
                        <Video className="cursor-pointer" />
                        <Info className="cursor-pointer" />
                    </div>
                </div>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    {messages.map((msg, index) => (
                        <div key={msg.Id + "-message-" + index} className="mb-4 flex items-end space-x-3">
                            <div className="w-[30px] h-[30px] rounded-full bg-cover bg-center bg-no-repeat bg-[#D9D9D9] text-center leading-[40px] font-semibold text-[#F07202]" style={{
                                backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${selectedUser?.avatarUrl}')`
                            }}>
                                {selectedUser?.avatarUrl ? '' : selectedUser?.fullname[0].toUpperCase()}
                            </div>
                            <div>
                                <p className="text-sm font-semibold">{selectedUser.fullname} <span className="text-xs text-gray-500">{(msg.Time ?? "").toString()}</span></p>
                                <p className="bg-white p-2 rounded-lg shadow text-gray-800">{msg.Message}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Input Field */}
                <div className="flex items-center p-4 bg-white border-t">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 p-2 border rounded-lg"
                    />
                    <button onClick={() => handleSendMessage()} className="bg-blue-500 text-white p-2 rounded-lg ml-2">
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
