"use client";

import Image from "next/image"
import Link from "next/link"
import { BoldIcon, FileJsonIcon, FilePlusIcon, FileTextIcon, GlobeIcon, ItalicIcon, PencilLineIcon, PrinterIcon, Redo2Icon, RemoveFormattingIcon, SaveIcon, StrikethroughIcon, TableIcon, TextIcon, Trash2Icon, UnderlineIcon, Undo2Icon } from "lucide-react"
import { BsFilePdf } from "react-icons/bs"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatars } from "./avatars";
import { DocumentInput } from "./document-input"
import { useEditorStore } from "@/store/use-editor-store";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Inbox } from "./inbox";
import { Doc } from "../../../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RenameDialog } from "@/components/rename-dialog";
import { RemoveDialog } from "@/components/remove-dialog";

interface NavbarProps {
  data: Doc<"documents">;
};

export const Navbar = ({ data }: NavbarProps) => {
  const router = useRouter();
  const { editor } = useEditorStore();

  const mutation = useMutation(api.documents.create);

  const onNewDocument = () => {
    mutation({
      title: "Untitled Document",
      initialContent: ""
    })
      .catch(() => toast.error("Something went wrong"))
      .then((id) => {
        toast.success("New document created");
        router.push(`/documents/${id}`);
      });
  }

  const insertTable = ({ rows, cols }: {rows: number, cols: number }) => {
    editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: false }).run()
  };
  
  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  const onSaveText = () => {
    if (!editor) return;

    const content = editor.getText();
    const blob = new Blob([content], {
      type: "text/plain",
    });
    onDownload(blob, `${data.title}.txt`)
  };

  const onSaveHTML = () => {
    if (!editor) return;

    const content = editor.getHTML();
    const blob = new Blob([content], {
      type: "text/html",
    });
    onDownload(blob, `${data.title}.html`)
  };

  const onSaveJSON = () => {
    if (!editor) return;

    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });
    onDownload(blob, `${data.title}.json`)
  };

  return (
    <nav className="flex item-center justify-between" >
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput title={data.title} id={data._id} />
          <div className="flex" >
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto cursor-pointer">
                  File
                </MenubarTrigger>
                <MenubarContent className="print:hidden">
                  <MenubarItem className="cursor-pointer" onClick={onNewDocument}>
                    <FilePlusIcon className="size-4 mr-2" />
                    New document
                  </MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger className="cursor-pointer">
                      <SaveIcon className="size-4 mr-2" />
                      Save as
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={() => window.print()} className="cursor-pointer">
                        <BsFilePdf className="size-4 mr-2" />
                        PDF Document (.pdf)
                      </MenubarItem>
                      <MenubarItem onClick={onSaveText} className="cursor-pointer">
                        <FileTextIcon className="size-4 mr-2" />
                        Plain Text (.txt)
                      </MenubarItem>
                      <MenubarItem onClick={onSaveHTML} className="cursor-pointer">
                        <GlobeIcon className="size-4 mr-2" />
                        Web Page (.html)
                      </MenubarItem>
                      <MenubarItem onClick={onSaveJSON} className="cursor-pointer">
                        <FileJsonIcon className="size-4 mr-2" />
                        JSON (.json)
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <RenameDialog documentId={data._id} initialTitle={data.title}>
                    <MenubarItem
                      className="cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                      onSelect={(e) => e.preventDefault()}
                    >
                      <PencilLineIcon className="size-4 mr-2" />
                      Rename
                    </MenubarItem>
                  </RenameDialog>
                  <RemoveDialog documentId={data._id} title={data.title}>
                    <MenubarItem 
                      className="cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                      onSelect={(e) => e.preventDefault()}
                    >
                      <Trash2Icon className="size-4 mr-2" />
                      Move to trash
                    </MenubarItem>
                  </RemoveDialog>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => window.print()} className="cursor-pointer">
                    <PrinterIcon className="size-4 mr-2" />
                    Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto cursor-pointer">
                  Edit
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={() => editor?.chain().focus().undo().run()} className="cursor-pointer">
                    <Undo2Icon className="size-4 mr-2" />
                    Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => editor?.chain().focus().redo().run()} className="cursor-pointer">
                    <Redo2Icon className="size-4 mr-2" />
                    Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto cursor-pointer">
                  Insert
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger className="cursor-pointer">
                      <TableIcon className="size-4 mr-2" />
                      Table
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1})} className="cursor-pointer">
                        1 x 1
                      </MenubarItem>
                      <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2})} className="cursor-pointer">
                        2 x 2
                      </MenubarItem>
                      <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3})} className="cursor-pointer">
                        3 x 3
                      </MenubarItem>
                      <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4})} className="cursor-pointer">
                        4 x 4
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto cursor-pointer">
                  Format
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger className="cursor-pointer">
                      <TextIcon className="size-4 mr-2" />
                      Text
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()} className="cursor-pointer">
                        <BoldIcon className="size-4 mr-2" />
                        Bold <MenubarShortcut>Ctrl+B</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()} className="cursor-pointer">
                        <ItalicIcon className="size-4 mr-2" />
                        Italic <MenubarShortcut>Ctrl+I</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem onClick={() => editor?.chain().focus().toggleUnderline().run()} className="cursor-pointer">
                        <UnderlineIcon className="size-4 mr-2" />
                        Underline <MenubarShortcut>Ctrl+U</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem onClick={() => editor?.chain().focus().toggleStrike().run()} className="cursor-pointer">
                        <StrikethroughIcon className="size-4 mr-2" />
                        Strikethrough&nbsp;&nbsp;&nbsp; <MenubarShortcut>Alt+Shift+5</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()} className="cursor-pointer">
                    <RemoveFormattingIcon className="size-4 mr-2" />
                    Clear formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center pl-3">
        <Avatars />
        <Inbox />
        <OrganizationSwitcher
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl="/"
          afterSelectPersonalUrl="/"
        />
        <UserButton />
      </div>
    </nav>
  )
}
