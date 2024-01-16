import React from 'react'
import cloudinary from "cloudinary"
import AlbumCard from './Album-Card/albumCard'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import SignIn from '@/Component/SignIn/signIn'

export type Folder = {
    name: string,
    path: string
}


export const revalidate = 300
const Album = async () => {
    const { folders } = (await cloudinary.v2.api.root_folders()) as { folders: Folder[] }
    // console.log(folders)
    return (
        <section>
            <SignedIn>
                <div className='flex flex-col gap-8'>
                    <div className="flex items-center justify-between px-4 py-5">
                        <h2 className="text-3xl font-semibold">Albums</h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-4 py-2'>
                        {folders.map((folder) => (
                            <AlbumCard key={folder.path} folders={folder} />
                        ))}
                    </div>
                </div>
            </SignedIn>
            <SignedOut>
                <div className="min-h-screen w-full flex justify-center items-center bg-[#F6F8FD] dark:bg-[rgb(10,10,10)]">
                    <SignIn />
                </div>
            </SignedOut>
        </section>
    )
}

export default Album