import React from "react";
import { UserButton } from "@clerk/nextjs";
import Header from "@/components/Header";
import { FileText } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddDocumentBtn from "@/components/AddDocumentBtn";
import { getDocuments } from "@/lib/actions/room.actions";
import Link from "next/link";
import { dateConverter } from "@/lib/utils";
import { DeleteModal } from "@/components/DeleteModal";
import Notifications from "@/components/Notifications";

/* eslint-disable @typescript-eslint/no-explicit-any */

const DashboardPage = async () => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect("/sign-in");

  const roomDocuments = await getDocuments(clerkUser.emailAddresses[0].emailAddress);

  return (
    <main className="flex items-center min-h-screen bg-gradient-to-br from-blue-950 to-slate-900 text-white relative w-full flex-col gap-5 sm:gap-10">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-4 lg:gap-8">
          <Notifications />
          <UserButton />
        </div>
      </Header>
      {roomDocuments.data.length > 0 ? (
        <div className="flex flex-col items-center mb-10 w-full gap-10 px-5">
          <div className="max-w-[730px] items-end flex w-full justify-between">
            <h3 className="font-semibold text-xl">
              All Documents
            </h3>
            <AddDocumentBtn 
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
          <ul className="flex w-full max-w-[730px] flex-col gap-5">
            {roomDocuments.data.map(({ id, metadata, createdAt }: any) => (
              <li key={id} className="flex items-center justify-between gap-4 rounded-lg backdrop-blur-2xl bg-white/10 hover:bg-white/15 hover:transition-colors bg-cover p-5 shadow-xl">
                <Link href={`/dashboard/documents/${id}`} className="flex flex-1 items-center gap-4">
                  <div className="hidden rounded-xl bg-slate-900 p-2 sm:block">
                    <FileText
                      className="text-sky-300"
                      size={48}
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="line-clamp-1 text-lg">
                      {metadata.title}
                    </p>
                    <p className="text-sm font-light text-blue-100">
                      Created {dateConverter(createdAt)}
                    </p>
                  </div>
                </Link>
                <DeleteModal roomId={id} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex w-full max-w-[730px] flex-col items-center justify-center gap-5 rounded-lg bg-dark-200 px-10 py-8">
          <FileText
            className="text-gray-300"
            size={48}
            strokeWidth={1}
            aria-hidden="true"
          />
          <AddDocumentBtn
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  );
};

export default DashboardPage;
