"use client";
import React from "react";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import Header from "./Header";
import { UserButton } from "@clerk/nextjs";
import { Editor } from "./editor/Editor";
import Loader from "./Loader";
import ActiveCollaborators from "./ActiveCollaborators";

declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

declare type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};

declare type UserType = "creator" | "editor" | "viewer";

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: User[];
  currentUserType: UserType;
};

const CollaborativeRoom = ({ roomId, roomMetadata }: CollaborativeRoomProps) => {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="flex size-full max-h-screen flex-1 flex-col items-center overflow-hidden">
          <Header>
            <div className="flex w-fit justify-center items-center gap-2">
              <p className="line-clamp-1 border-dark-400 text-base font-semibold leading-[24px] sm:pl-0 sm:text-xl">
                Share
              </p>
            </div>
            <div className="flex w-full justify-end flex-1 gap-2 sm:gap-3">
              <ActiveCollaborators />
              <UserButton />
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
