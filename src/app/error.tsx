"use client";

import { Button } from "@/components/ui/button";
import { CircleAlertIcon } from "lucide-react";
import Link from "next/link";

const ErrorPage = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-full">
            <CircleAlertIcon className="size-20 text-rose-600" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Oops! Something went wrong.
          </h1>
          <p>
            {error.message}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <Button
          onClick={reset}
          className="font-medium px-6"
        >
          Try again
        </Button>
        <Button
          asChild
          variant="ghost"
          className="font-medium"
        >
          <Link href="/">
            Go home
          </Link>
        </Button>
      </div>
    </div>
  );
}
 
export default ErrorPage;
