import { Loader2Icon } from "lucide-react";

interface FullscreenLoaderProps {
  label?: string;
};

export const FullscreenLoader = ({ label }: FullscreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center felx justify-center gap-2">
      <Loader2Icon className="size-6 text-muted-foreground animate-spin" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  )
};
