import React from 'react'
import CollaborativeRoom from '@/components/CollaborativeRoom'
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getDocument } from '@/lib/actions/room.actions';
import { getClerkUsers } from '@/lib/actions/user.actions';

const DocumentIdPage = async (props: SearchParamProps) => {
    const params = await props.params;
    
    const id = params.id;

    const clerkUser = await currentUser();
    if(!clerkUser) redirect('/sign-in');

    const room = await getDocument({
        roomId: id,
        userId: clerkUser.emailAddresses[0].emailAddress,
    })

    if(!room) redirect('/dashboard');

    const userIds = Object.keys(room.usersAccesses);
    const users = await getClerkUsers({ userIds });

    const usersData = users.map((user: User) => ({
        ...user,
        userType: room.usersAccesses[user.email]?.includes('room:write') ? 'editor' : 'viewer'
    }))

    const currentUserType = room.usersAccesses[clerkUser.emailAddresses[0].emailAddress]?.includes('room:write') ? 'editor' : 'viewer';

    return (
        <main className='bg-gradient-to-br min-h-screen from-blue-950 to-slate-900 text-white flex flex-col items-center'>
            <CollaborativeRoom
                roomId={id}
                roomMetadata={room.metadata}
                users={usersData}
                currentUserType={currentUserType}
            />
        </main>
    )
}

export default DocumentIdPage
