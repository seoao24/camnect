'use client';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinymceEditorProps {
	value?: string;
	onChange?: (content: string) => void;
}

export default function AddBlock({ value = '', onChange }: TinymceEditorProps) {
	const editorRef = useRef(null);

	return (
		<Editor
			apiKey='v2d8117tlmkeujy1jt82fk0ilxtctlhcbu96gp4rqocopaxs'
			onInit={(evt, editor) => (editorRef.current = editor)}
			value={value}
			onEditorChange={(content) => onChange?.(content)}
			init={{
				height: 500,
				menubar: false,
				plugins: [
					'advlist',
					'autolink',
					'lists',
					'link',
					'image',
					'charmap',
					'preview',
					'anchor',
					'searchreplace',
					'visualblocks',
					'code',
					'fullscreen',
					'insertdatetime',
					'media',
					'table',
					'help',
					'wordcount',
				],
				toolbar:
					'undo redo | formatselect | bold italic backcolor | ' +
					'alignleft aligncenter alignright alignjustify | ' +
					'bullist numlist outdent indent | removeformat | image | help',
				images_upload_handler: async (blobInfo) => {
					const formData = new FormData();
					formData.append('file', blobInfo.blob());

					try {
						const response = await fetch('/api/upload', {
							method: 'POST',
							body: formData,
						});

						const data = await response.json();
						if (!response.ok) throw new Error(data.message || 'Upload failed');

						return data.url;
					} catch (error) {
						console.error('Upload failed:', error);
						throw new Error('Upload failed');
					}
				},
				// Add content_style for better editor visuals
				content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
			}}
		/>
	);
}
