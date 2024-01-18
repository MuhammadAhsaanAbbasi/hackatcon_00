"use server"

// import { SearchResult } from "@/app/(root)/gallery/page"
import cloudinary from "cloudinary"

export async function addImageToAlbum(images:SearchResult,albums:string) {
    await cloudinary.v2.api.create_folder(albums)

    let parts = images.public_id.split("/")
    if(parts.length>1){
        parts = parts.splice(1)
    }
    const public_id = parts.join("/")
    await cloudinary.v2.uploader.rename(images.public_id, `${albums}/${public_id}`)
}