import React from "react";
import { UserButton } from "@clerk/nextjs";
import Header from "@/components/Header";
import { Bell, FileText } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddDocumentBtn from "@/components/AddDocumentBtn";

const DashboardPage = async () => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect("/sign-in");

  const documents = [];

  return (
    <main className="flex items-center min-h-screen bg-gradient-to-br from-blue-950 to-slate-900 text-white relative w-full flex-col gap-5 sm:gap-10">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-4 lg:gap-8">
          <Bell className="h-6 w-6 cursor-pointer hover:text-slate-200" />
          <UserButton />
        </div>
      </Header>
      {documents.length > 0 ? (
        <div></div>
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
