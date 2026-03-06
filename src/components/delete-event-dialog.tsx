"use client";

import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DeleteEventDialogProps {
  eventName: string;
  children: React.ReactNode;
  onDelete?: () => void | Promise<void>;
}

export function DeleteEventDialog({
  eventName,
  children,
  onDelete,
}: DeleteEventDialogProps) {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    await onDelete?.();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="gap-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <div className="text-center">
            <DialogTitle>Delete Event</DialogTitle>
            <DialogDescription className="mt-2">
              Are you sure you want to delete <strong>"{eventName}"</strong>?
              This action cannot be undone.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete Event
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
