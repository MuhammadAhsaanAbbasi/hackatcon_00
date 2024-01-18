import React from 'react'
import cloudinary from "cloudinary"
import AlbumGrid from './albumGrid'
import FastRefresh from '@/Component/FastRefresh/fastRefresh'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import SignIn from '@/Component/SignIn/signIn'

type Props = {
    params: {
        albumName: string
    }
}


export const revalidate = 300

const Post = async ({ params: { albumName } }: Props) => {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(50)
        .execute()) as { resources: SearchResult[] }
    // console.log(results)
    return (
        <section>
            <FastRefresh />
            <SignedIn>
                <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between px-4 py-5">
                        <h2 className="text-3xl font-semibold">{albumName}</h2>
                    </div>
                    <AlbumGrid images={results.resources} />
                </div>
            </SignedIn>
            <SignedOut>
                <SignIn />
            </SignedOut>
        </section>
    )
}

export default Post