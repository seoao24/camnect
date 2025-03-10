'use client';
import axiosInstance from "@/api/apiBase";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface CommentModalProps {
    id: string,
    isOpen: boolean,
    onClose: () => void
}
interface Comment {
    postId: string;
    commentId: string;
    content: string;
    createdBy?: string;
    createdDate?: Date;
    createdDateAgo?: string;
    userId?: string;
    userAvatarUrl?: string;
}
export default function CommentModal(props: CommentModalProps) {
    if (!props.isOpen) return null;
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>([]);
    const addComment = async () => {
        try {
            if (!comment) {
                toast.error("Bình luận không được để trống!")
            }
            const body = {
                postId: props.id,
                content: comment
            }
            await axiosInstance.post("/Post/Comment", body);
            loadComment();
        } catch {

        }
    }
    const loadComment = async () => {
        try {
            var params = {
                postId: props.id
            }
            const response = await axiosInstance.get("/Post/SearchComment", {
                params: params
            });
            setComments(response.data)
        } catch {

        }
    }
    useEffect(() => {
        if (props.isOpen) {
            loadComment();
        }
    }, [props.isOpen, props.id]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 md:min-w-[800px]">
                <h2 className="text-xl font-bold">Bình luận ({comments.length})</h2>
                <div className="mt-2 text-gray-600">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <textarea
                            id="comment"
                            rows={3}
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Thêm bình luận..."
                            required={true}
                            defaultValue={""}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-[#F07202] rounded hover:bg-red-700"
                        onClick={addComment}
                    >
                        Đăng bình luận
                    </button>
                </div>
                <div className="mt-5 max-h-[500px] overflow-y-auto">
                    {
                        comments.map((e) => (
                            <div key={e.commentId} className="py-2">
                                <div className="flex items-center">
                                    <div className="bg-cover bg-center bg-no-repeat w-[30px] h-[30px] rounded-full bg-[#D9D9D9]"
                                        style={{
                                            backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${e.userAvatarUrl}')`
                                        }}>
                                    </div>
                                    <div className="text-[14px] font-semibold text-black ml-2">{e.createdBy}</div>
                                </div>
                                <div className="text-[16px] ml-[40px]">
                                    {e.content}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-4 flex justify-end">
                    <button onClick={props.onClose} className="px-4 py-2 text-white bg-[#F07202] rounded hover:bg-red-700">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    )
}