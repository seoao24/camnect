'use client';
import React, { useRef } from 'react';
import { Editor } from "@tinymce/tinymce-react";

interface TinymceEditorProps {
    value?: string;
    onChange?: (content: string) => void;
}

export default function AddBlock({ value = "", onChange }: TinymceEditorProps) {
    const editorRef = useRef(null);

    return (
        <Editor
            key={value}
            apiKey="v2d8117tlmkeujy1jt82fk0ilxtctlhcbu96gp4rqocopaxs"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={value} // Sử dụng `value` thay vì `initialValue`
            onEditorChange={(content) => onChange?.(content)}
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

                        return data.url;
                    } catch (error) {
                        console.error("Upload failed:", error);
                        throw new Error("Upload failed");
                    }
                },
            }}
        />
    );
}
