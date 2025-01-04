"use client";

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'

export const Editor = () => {
    const editor = useEditor({
        editorProps: {
            attributes: {
                style: "padding-left: 112px; padding-right: 112px;",
                class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-28 pr-0 pb-28 cursor-text",
            },
        },
        extensions: [
            StarterKit,
            TaskItem.configure({
                nested: true,
            }),
            TaskList,
        ],
        content: '<p>Hello World! 🌎️</p>',
    })

    return (
        <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
            <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};