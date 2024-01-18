import UploadButton from "../gallery/Upload-Button/uploadButton";
import cloudinary from "cloudinary"
import FavoriteList from "./Favorite-List/favoriteList";
import FastRefresh from "@/Component/FastRefresh/fastRefresh";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignIn from "@/Component/SignIn/signIn";
import { Suspense } from "react";
import Loader from "@/Component/loader/loader";
import FavoriteImage from "./favoritepage";

export const revalidate = 300
const page = async () => {
    const results = (await cloudinary.v2.search
        .expression("resource_type:image AND tags=favorite")
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(32)
        .execute()) as { resources: SearchResult[] }
    // console.log(results)
    return (
        <section>
            <FastRefresh />
            <SignedIn>
                <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between px-4 py-5">
                        <h2 className="text-3xl font-semibold">Favorite</h2>
                        <UploadButton />
                    </div>
                    <Suspense fallback={<div className='flex justify-center items-center max-w-full h-96'>
                        <Loader />
                    </div>}>
                    <FavoriteImage/>
                    </Suspense>
                </div>
            </SignedIn>
            <SignedOut>
                <div className="min-h-screen w-full flex justify-center items-center bg-[#F6F8FD] dark:bg-[rgb(10,10,10)]">
                    <SignIn />
                </div>
            </SignedOut>
        </section>
    )
}

export default page