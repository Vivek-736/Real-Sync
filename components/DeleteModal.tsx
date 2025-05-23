"use client";

import { useState } from "react";
import Image from "next/image";
import { deleteDocument } from "@/lib/actions/room.actions";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

export const DeleteModal = ({ roomId }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteDocumentHandler = async () => {
    setLoading(true);

    try {
      await deleteDocument(roomId);
      setOpen(false);
    } catch (error) {
      console.log("Error notif:", error);
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="min-w-9 rounded-xl bg-transparent p-2 transition-all">
          <Trash className="h-6 w-6 mt-1 text-rose-400" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[400px] rounded-xl border-none bg-[url('/assets/doc.png')] bg-cover px-5 py-7 shadow-xl sm:min-w-[500px]">
        <DialogHeader>
          <div className="text-2xl flex justify-center">
            <Image
            src="/assets/icons/delete-modal.svg"
            alt="delete"
            width={48}
            height={48}
            className="mb-4"
          />
          </div>
          <DialogTitle className="text-center font-semibold text-white text-xl">
            Delete document
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Are you sure you want to delete this document? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-5">
          <DialogClose asChild className="w-full bg-dark-400 text-white">
            Cancel
          </DialogClose>

          <Button
            variant="destructive"
            onClick={deleteDocumentHandler}
            className="bg-gradient-to-t from-red-500 to-red-400 w-full"
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
