'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const CKEditor = dynamic(
    () => import('@ckeditor/ckeditor5-react').then((mod) => mod.CKEditor),
    { ssr: false } // Tắt server-side rendering cho CKEditor
);
const ClassicEditor = dynamic(
    () => import('@ckeditor/ckeditor5-build-classic').then((mod) => mod.default),
    { ssr: false }
);

export default function Blog() {
    return (
        <div>
            <h2>CKEditor in Next.js (TypeScript)</h2>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Start writing...</p>"
                onReady={editor => {
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
            />
        </div>
    )
}
