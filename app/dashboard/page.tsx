import React from 'react'
import { UserButton } from '@clerk/nextjs'

const DashboardPage = () => {
    return (
        <div className='flex items-center justify-center gap-6 min-h-screen bg-gradient-to-br from-blue-950 to-slate-900 text-white'>
            Dashboard Page
            <UserButton />
        </div>
    )
}

export default DashboardPage
