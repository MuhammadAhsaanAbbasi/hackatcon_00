
import React, { Suspense } from 'react'
import MainGrid from '../MainGrid/mainGrid'
// import { SearchResult } from '@/app/(root)/gallery/page'
import CloudinaryImage from '@/app/(root)/gallery/CloudinaryImage/cloudinaryImage'

function GalleryGrid({ images }: { images: SearchResult[] }) {
    return (
        <MainGrid
            images={images}
            getImages={(imagedata: SearchResult) => {
                return (
                        <CloudinaryImage
                        key={imagedata.public_id}
                            className='py-2 px-3'
                            imagedata={imagedata}
                            height={450}
                            width={500}
                            alt='Any Image'
                        />
                )
            }}
        />
    )
}

export default GalleryGrid