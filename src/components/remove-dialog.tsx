import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { toast } from "sonner";

interface RemoveDialogProps {
  documentId: Id<"documents">;
  title: string;
  children: React.ReactNode;
};

export const RemoveDialog = ({ documentId, title, children }: RemoveDialogProps) => {
  const remove = useMutation(api.documents.removeById);
  const [isRemoving, setIsRemoving] = useState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you want to delete &quot;{title}&quot;?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This item will be deleted immediately. You can&apos;t undo this action.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isRemoving}
            onClick={(e) => e.stopPropagation()}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isRemoving}
            onClick={(e) => {
              e.stopPropagation();
              setIsRemoving(true);
              remove({ id: documentId })
                .catch(() => toast.error("Something went wrong"))
                .then(() => toast.success("Document deleted"))
                .finally(() => setIsRemoving(false));
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
