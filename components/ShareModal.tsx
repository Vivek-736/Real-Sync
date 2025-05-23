"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSelf } from "@liveblocks/react/suspense";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Share2Icon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import UserTypeSelector from "./UserTypeSelector";
import Collaborator from "./Collaborator";
import { updateDocumentAccess } from "@/lib/actions/room.actions";

const ShareModal = ({
  roomId,
  collaborators,
  creatorId,
}: ShareDocumentDialogProps) => {
  const user = useSelf();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("viewer");

  const shareDocumentHandler = async () => {
    setLoading(true);
    await updateDocumentAccess({
      roomId,
      email,
      userType: userType as UserType,
      updatedBy: user.info,
    });

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="bg-gradient-to-t from-blue-600 to-blue-500 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-400">
          <Share2Icon className="w-6 h-6 text-white" />
          <p className="mr-1 hidden sm:block">Share</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[400px] rounded-xl border-none bg-[url('/assets/doc.png')] bg-cover px-5 py-7 shadow-xl sm:min-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-white text-center">
            Manage Your Users
          </DialogTitle>
          <DialogDescription className="text-center">
            Select who can view or edit this document
          </DialogDescription>
        </DialogHeader>
        <Label htmlFor="email" className="mt-6 text-blue-100">
          Email Address
        </Label>
        <div className="flex items-center gap-3">
          <div className="flex text-white flex-1 rounded-md bg-slate-950">
            <Input
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 text-white flex-1 border-none bg-slate-950 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <UserTypeSelector userType={userType} setUserType={setUserType} />
          </div>
          <Button
            type="submit"
            onClick={shareDocumentHandler}
            className="bg-gradient-to-t text-white from-blue-600 to-blue-500 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-400 flex h-full gap-1 px-5"
            disabled={loading}
          >
            {loading ? "Sending..." : "Invite"}
          </Button>
        </div>
        <div className="my-2 space-y-2">
          <ul className="flex flex-col text-white">
            {collaborators.map((collaborator) => (
              <Collaborator
                key={collaborator.id}
                roomId={roomId}
                creatorId={creatorId}
                email={collaborator.email}
                collaborator={collaborator}
                user={user.info}
              />
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
