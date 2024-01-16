"use client"
import React, { useState, useTransition } from 'react'
import { SearchResult } from '@/app/(root)/gallery/page'
import { CldImage, CldImageProps } from 'next-cloudinary'


function NormalImage(
    props: {
        imagedata: string,
    } & Omit<CldImageProps, "src">
) {
    const { imagedata } = props
    return (
        <div className='relative'>
            <CldImage {...props} src={imagedata}/>
        </div>
    )
}

// 81,91,212
export default NormalImage
