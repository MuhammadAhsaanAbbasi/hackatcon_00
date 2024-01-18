import React, { Suspense } from 'react'
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
import Loader from '@/Component/loader/loader'
import { Skeleton } from '@/components/ui/skeleton'

const AlbumCard = ({ folders }: { folders: Folder }) => {
    return (
        <>
            <Suspense fallback={<div className='flex justify-center items-center max-w-full h-96'>
            <Skeleton className="w-40 h-20 rounded-full" />
            </div>}>
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
            </Suspense>
        </>
    )
}

export default AlbumCard