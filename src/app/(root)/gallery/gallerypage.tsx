import cloudinary from "cloudinary"
import GalleryGrid from "@/Component/Grid/GalleryGrid/galleryGrid";
import { Suspense } from "react";
import Loader from "@/Component/loader/loader";
// import Loading from "./loading";


export const revalidate = 300
const GalleryImages = async () => {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(48)
        .execute()) as { resources: SearchResult[] }
    // console.log(results)
    return (
        <GalleryGrid images={results.resources} />
    )
}

export default GalleryImages
