'use client';
import React, { useRef } from 'react';
import { Editor } from "@tinymce/tinymce-react";

interface TinymceEditorProps {
    value?: string;
    onChange?: (content: string) => void;
}

export default function AddBlock({ value, onChange }: TinymceEditorProps) {
    const editorRef = useRef<any>(null);
    return (
        <Editor
            apiKey="f2bzt9l4x8lr8fwf81nruooh5xio9abs178o5x6lds0wituv" // Bạn có thể dùng API key miễn phí từ TinyMCE hoặc để trống để dùng bản local
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={value}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                    "image imagetools",
                ],
                toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | image | help",
                // Cấu hình upload ảnh
                images_upload_handler: async (blobInfo) => {
                    const formData = new FormData();
                    formData.append("file", blobInfo.blob());

                    try {
                        const response = await fetch("/api/upload", {
                            method: "POST",
                            body: formData,
                        });

                        const data = await response.json();
                        if (!response.ok) throw new Error(data.message || "Upload failed");

                        return data.url; // Trả về URL của ảnh sau khi upload thành công
                    } catch (error) {
                        console.error("Upload failed:", error);
                        throw new Error("Upload failed");
                    }
                },
            }}
            onEditorChange={(content) => onChange?.(content)}
        />
    )
}
