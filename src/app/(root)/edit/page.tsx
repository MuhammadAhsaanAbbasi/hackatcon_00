"use client"
import FastRefresh from '@/Component/FastRefresh/fastRefresh';
import { Button } from '@/components/ui/button'
import { CldImage } from "next-cloudinary";
import React, { useState } from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type Props = {
    searchParams: {
        publicId: string
    }
}

const Page = ({ searchParams: { publicId } }: Props) => {
    const [transformation, setTransformation] = useState<
        undefined |
        "generative_fill" |
        "blur" |
        "grayscale" |
        "pixelate" |
        "contrast" |
        "improve" |
        "oil_paint">()

    const [pendingPrompt, setPendingPrompt] = useState("")
    const [prompt, setPrompt] = useState("")
    return (
        <section>
            <FastRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between px-4 py-5">
                    <h2 className="text-3xl font-semibold">Edit Images</h2>
                </div>
                <div className='flex px-3 gap-x-2'>
                    <Button onClick={() => setTransformation(undefined)} className='text-wrap'>Original Image</Button>
                    <div className="flex flex-col gap-4">
                        <Button
                            onClick={() => {
                                setTransformation("generative_fill");
                                setPrompt(pendingPrompt);
                            }}
                        >
                            Apply Generative Fill
                        </Button>
                        <Label>Prompt</Label>
                        <Input
                            value={pendingPrompt}
                            onChange={(e) => setPendingPrompt(e.currentTarget.value)}
                        />
                    </div>
                    <Button onClick={() => setTransformation("blur")}>Blur</Button>
                    <Button onClick={() => setTransformation("grayscale")} className='text-wrap'>GrayScale Image</Button>
                    <Button onClick={() => setTransformation("pixelate")}>Pixelate</Button>
                    <Button onClick={() => setTransformation("contrast")}>Contrast</Button>
                    <Button onClick={() => setTransformation("improve")}>Improve</Button>
                </div>

                <div className='px-4 py-3 flex justify-center items-center gap-x-40'>
                    <CldImage
                        src={publicId}
                        alt=''
                        width={250}
                        height={250}
                    />
                    {transformation === undefined && (
                        <CldImage
                            width={250}
                            height={250}
                            src={publicId}
                            sizes="100vw"
                            alt=""
                        />
                    )}
                    {transformation === "generative_fill" && (
                        <CldImage
                            src={publicId}
                            width={250}
                            height={250}
                            alt="some image"
                            crop="pad"
                            fillBackground={{
                                prompt,
                            }}
                        />
                    )}
                    {transformation === "blur" && (
                        <CldImage
                            width={250}
                            height={250}
                            src={publicId}
                            sizes="100vw"
                            effects={[{blur:500}]}
                            alt=""
                        />
                    )}
                    {transformation === "grayscale" && (
                        <CldImage
                            width={250}
                            height={250}
                            src={publicId}
                            sizes="100vw"
                            effects={[{grayscale: true}]}
                            alt=""
                        />
                    )}
                    {transformation === "pixelate" && (
                        <CldImage
                            width={250}
                            height={250}
                            src={publicId}
                            sizes="100vw"
                            effects={[{pixelate: true}]}
                            alt=""
                        />
                    )}
                    {transformation === "contrast" && (
                        <CldImage
                            width={250}
                            height={250}
                            src={publicId}
                            sizes="100vw"
                            effects={[{contrast:'level_40'}]}
                            assetType='_linear'
                            alt=""
                        />
                    )}
                    {transformation === "improve" && (
                        <CldImage
                            width={250}
                            height={250}
                            src={publicId}
                            sizes="100vw"
                            effects={[{improve:100}]}
                            alt=""
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Page