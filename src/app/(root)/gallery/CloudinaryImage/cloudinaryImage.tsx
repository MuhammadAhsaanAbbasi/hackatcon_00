"use client"
import React, { Suspense, useState, useTransition } from 'react'
import { CldImage, CldImageProps } from 'next-cloudinary'
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { SetasFavoriteAction } from '../action';
import DropDownMenu from '@/Component/DropDown/dropDown';
import { motion } from "framer-motion"
import { Skeleton } from '@/components/ui/skeleton';

function CloudinaryImage(
    props: {
        imagedata: SearchResult,
        unhearted?: (UnheartResorces: SearchResult) => void
    } & Omit<CldImageProps, "src">
) {
    const scaleTranslate = {
        hidden: { opacity: 0, scale: 0.7, x: -40 },
        visible: { opacity: 1, scale: 1, x: 0 },
    };
    const [isTransition, startTransition] = useTransition()
    const { imagedata, unhearted } = props
    const [IsFavourite, setIsFavourite] = useState(imagedata.tags.includes("favorite"))
    return (
        <>
            <Suspense fallback={<div className='flex justify-center items-center max-w-full h-96'>
            <Skeleton className="w-40 h-20 rounded-full" />
            </div>}>
            <motion.div
                variants={scaleTranslate}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.02 }}
                transition={{
                    delay: 0.2,
                    duration: 1.5,
                    ease: 'easeInOut'
                }}
                className='relative'>
                <CldImage {...props} src={imagedata.public_id} />
                {IsFavourite ?
                    (<ImStarFull
                        size={28}
                        onClick={() => {
                            unhearted?.(imagedata)
                            setIsFavourite(false)
                            startTransition(() => {
                                SetasFavoriteAction(imagedata.public_id, false)
                            })
                        }}
                        className='absolute top-3 left-5 cursor-pointer text-[rgb(252,175,69)]'
                    />)
                    : (
                        <ImStarEmpty
                            size={28}
                            onClick={() => {
                                setIsFavourite(true)
                                startTransition(() => {
                                    SetasFavoriteAction(imagedata.public_id, true)
                                })
                            }}
                            className='absolute top-3 left-5 text-neutral-900 cursor-pointer'
                        />
                    )}
                <div className='absolute top-3 right-5 cursor-pointer'>
                    <DropDownMenu images={imagedata} />
                </div>
            </motion.div>
            </Suspense>
        </>
    )
}

// 81,91,212
export default CloudinaryImage

