"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const FastRefresh = () => {
    const router = useRouter()
    useEffect(() => {
        router.refresh()
    },[router])
    return (
        <></>
    )
}

export default FastRefresh