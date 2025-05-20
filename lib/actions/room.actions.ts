'use server';

import { nanoid } from "nanoid";
import liveblocks from "../liveblocks";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type AccessType = ["room:write"] | ["room:read", "room:presence:write"];

declare type RoomAccesses = Record<string, AccessType>;

export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomId = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      email,
      title: "Untitled",
    };

    const usersAccesses: RoomAccesses = {
        [email]: ["room:write"]
    }

    const room = await liveblocks.createRoom(roomId, {
        metadata,
        usersAccesses,
        defaultAccesses: []
    });

    revalidatePath("/");
    
    return parseStringify(room);
  } catch (error) {
    console.log(`Error creating room: ${error}`);
  }
};