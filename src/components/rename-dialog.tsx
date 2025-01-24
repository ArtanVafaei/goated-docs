import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle: string;
  children: React.ReactNode;
};

export const RenameDialog = ({ documentId, initialTitle, children }: RenameDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <form>
          <DialogHeader>
            <DialogTitle>
              Rename
            </DialogTitle>
            <DialogDescription>
              Please enter a new name for the item:
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input
              value={initialTitle}
              onChange={() => {}}
            />
          </div>
          <DialogFooter>
            <Button>
              Cancel
            </Button>
            <Button>
              OK
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>

    </Dialog>
  );
};
