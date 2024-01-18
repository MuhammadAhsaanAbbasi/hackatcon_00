"use client"
import MainGrid from '@/Component/Grid/MainGrid/mainGrid'
import CloudinaryImage from '../../gallery/CloudinaryImage/cloudinaryImage'
import React, { useEffect, useState } from 'react'

const FavoriteList = ({initialResorces}:{initialResorces:SearchResult[]}) => {
    const [Resorces, setResorces] = useState(initialResorces)
    useEffect(()=>{
        setResorces(initialResorces)
    },[initialResorces])
    return (
        <MainGrid
        images={Resorces}
        getImages={(images:SearchResult)=>{
            return(
                <CloudinaryImage
                key={images.public_id}
                className='py-2 px-3 '
                imagedata={images}
                alt=''
                height={450}
                width={500}
                Unhearted={(UnheartedResorces)=>{
                    setResorces((currentResorces)=>
                    currentResorces.filter((resorces)=>resorces.public_id!==UnheartedResorces.public_id)
                    )
                }}
                />
            )
        }}
        />
    )
}

export default FavoriteList