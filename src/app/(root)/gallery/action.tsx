"use server"
import cloudinary from "cloudinary"
// import { SearchResult } from "./page";

export async function SetasFavoriteAction(
  publicId:string,
  IsFavourite:boolean
){
  if(IsFavourite){
    await cloudinary.v2.uploader.add_tag("favorite",[publicId])
  }else{
    await cloudinary.v2.uploader.remove_tag("favorite",[publicId])
  }
}