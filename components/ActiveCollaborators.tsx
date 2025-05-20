import React from "react";
import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";
/* eslint-disable @typescript-eslint/no-explicit-any */

const ActiveCollaborators = () => {
  const others = useOthers();
  
  const collaborators = others.map((other) => other.info);

  return (
    <ul className="hidden items-center justify-end -space-x-3 overflow-hidden sm:flex">
      {collaborators.map(({ id, avatar, name, color }: any) => (
        <li key={id}>
          <Image
            src={avatar}
            alt={name}
            width={100}
            height={100}
            className="inline-block size-8 rounded-full ring-2 ring-black"
            style={{ border: `4px solid ${color}` }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollaborators;
