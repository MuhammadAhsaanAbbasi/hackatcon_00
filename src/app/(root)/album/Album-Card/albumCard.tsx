import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Folder } from '../page'
import Link from 'next/link'

const AlbumCard = ({ folders }: { folders: Folder }) => {
    return (
        <>
            <Card className="">
                <CardHeader>
                    <CardTitle>{folders.name}</CardTitle>
                    <CardDescription>Seen your {folders.name} Images in this-folder.</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                    <Link href={`/album/${folders.path}`}>
                    <Button>See Images</Button>
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default AlbumCard