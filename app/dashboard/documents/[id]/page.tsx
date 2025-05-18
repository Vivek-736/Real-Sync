import React from 'react'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'

const DocumentIdPage = () => {
    return (
        <div className='bg-gradient-to-br from-blue-950 to-slate-900 text-white'>
            <Header>
                <div className='flex w-fit justify-center items-center gap-2'>
                    <p className='line-clamp-1 border-dark-400 text-base font-semibold leading-[24px] sm:pl-0 sm:text-xl'>
                        This is an untitled document
                    </p>
                </div>
            </Header>
            <Editor />
        </div>
    )
}

export default DocumentIdPage
