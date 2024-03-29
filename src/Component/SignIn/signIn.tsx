"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import { motion } from "framer-motion"
const SignIn = () => {
    const Variants = {
        hidden: { opacity: 0, y: 60, x: -60 },
        visible: { opacity: 1, y: 0, x: 0 },
    };
    const scale = {
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1 },
    };
    return (
        <div className="flex gap-x-40 items-center flex-col-reverse md:flex-row gap-y-5 px-5">
            <motion.div
                className="flex flex-col items-center gap-y-4"
                variants={scale}
                initial="hidden"
                whileInView="visible"
                transition={{
                    delay: 0.2,
                    duration: 1.5,
                    ease: 'easeInOut'
                }}
            >
                <h2 className="font-bold font-['ananda'] text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 from-15% via-purple-500 via-30% to-indigo-500 to-90% h-full ">Maa_Creative_Designs</h2>
                <h2 className='text-xl md:text-2xl font-semibold'>Explore All New Images</h2>
                <SignInButton afterSignInUrl="/gallery">
                    <Button>Login</Button>
                </SignInButton>
            </motion.div>
            <motion.div
                variants={Variants}
                initial="hidden"
                whileInView="visible"
                transition={{
                    delay: 0.2,
                    duration: 1.5,
                    ease: 'easeInOut'
                }}
            >
                <Image
                    src={"/assets/gym.jpg"}
                    alt='Any Image'
                    height={450}
                    width={500}
                    className='h-56 w-56 md:h-full md:w-full'
                />
            </motion.div>
        </div>
    )
}

export default SignIn