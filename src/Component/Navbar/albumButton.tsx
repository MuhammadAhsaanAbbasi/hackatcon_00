import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { IoMdAlbums } from 'react-icons/io'

const AlbumButton = () => {
    return (
        <Link href={"/album"}>
            <Button variant="ghost" className="w-full justify-start flex items-center gap-x-2 text-xl">
                <IoMdAlbums />
                Albums
            </Button>
        </Link>
    )
}

export default AlbumButton