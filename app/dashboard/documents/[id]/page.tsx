import React from 'react'
import CollaborativeRoom from '@/components/CollaborativeRoom'
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getDocument } from '@/lib/actions/room.actions';

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const DocumentIdPage = async ({ params: { id }}: SearchParamProps ) => {
    const clerkUser = await currentUser();
    if(!clerkUser) redirect('/sign-in');

    const room = await getDocument({
        roomId: id,
        userId: clerkUser.emailAddresses[0].emailAddress,
    })

    if(!room) redirect('/dashboard');

    // TODO: Access the permissions of the user to access the document

    return (
        <main className='bg-gradient-to-br min-h-screen from-blue-950 to-slate-900 text-white flex flex-col items-center'>
            <CollaborativeRoom
                roomId={id}
                roomMetadata={room.metadata}
            />
        </main>
    )
}

export default DocumentIdPage
