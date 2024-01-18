import UploadButton from "./Upload-Button/uploadButton";
import cloudinary from "cloudinary"
import GalleryGrid from "@/Component/Grid/GalleryGrid/galleryGrid";
import SearchTag from "./searchTag";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignIn from "@/Component/SignIn/signIn";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import GalleryImages from "./gallerypage";
import Loader from "@/Component/loader/loader";
// import Loading from "./loading";


type Props = {
    searchParams: {
        search: string
    }
}
export const revalidate = 300
const gallery = async ({ searchParams: { search } }: Props) => {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(48)
        .execute()) as { resources: SearchResult[] }
    // console.log(results)
    return (
        <section>
            <SignedIn>
                <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between px-4 py-5">
                        <h2 className="text-3xl font-semibold">Gallery</h2>
                        <UploadButton />
                    </div>
                    <SearchTag initialState={search} />
                    <Suspense fallback={<div className='flex justify-center items-center max-w-full h-96'>
                        <Loader />
                    </div>}>
                        <GalleryImages />
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

export default gallery
