"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SearchTag = ({initialState}:{initialState:string}) => {
    const [tagName, setTagName] = useState(initialState??" ")
    const router = useRouter()
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
            router.refresh()
        }} className='px-3'>
            <Label htmlFor='tag-Name'>SearchTag</Label>
            <div className='flex gap-x-2'>
                <Input
                id='tag-Name'
                value={tagName}
                onChange={(e)=>setTagName(e.currentTarget.value)}
                />
                <Button type="submit">Search</Button>
            </div>
        </form>
    )
}

export default SearchTag