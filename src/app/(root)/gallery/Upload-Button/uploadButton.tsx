"use client"
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import React from 'react'

export type UploadResult={
    info:{
        public_id:string
    };
    event:"sucess"
}

const UploadButton = () => {
    const router = useRouter()
    return (
        <Button asChild>
            <CldUploadButton
            onUpload={()=>{
                setTimeout(() => {
                    router.refresh()
                }, 1000);
            }}
            uploadPreset='qntltesp'
            >
                <div className='flex items-center gap-x-2 text-lg font-semibold'>
                <Upload />
                Upload
                </div>
            </CldUploadButton>
        </Button>
    )
}

export default UploadButton