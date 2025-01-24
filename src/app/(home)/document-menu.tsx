import { Button } from "@/components/ui/button";
import { MoreVertical, SquareArrowOutUpRightIcon, Trash2Icon } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RemoveDialog } from "@/components/remove-dialog";

interface DocumentMenuProps {
  documentId: Id<"documents">;
  title: string;
  onNewTab: (id: Id<"documents">) => void;
};

export const DocumentMenu = ({ documentId, title, onNewTab }: DocumentMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <RemoveDialog
          documentId={documentId}
          title={title}
        >
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer"
          >
            <Trash2Icon className="size-4 mr-2" />
            Remove
          </DropdownMenuItem>
        </RemoveDialog>
        <DropdownMenuItem
          onClick={() => onNewTab(documentId)}
          className="cursor-pointer"
        >
          <SquareArrowOutUpRightIcon className="size-4 mr-2" />
          Open in new tab
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};
