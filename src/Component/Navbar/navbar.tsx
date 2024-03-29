import { Button } from "@/components/ui/button"
import { BookImage } from "lucide-react"
import { Star } from "lucide-react";
import cloudinary from "cloudinary"
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Folder } from "@/app/(root)/album/page";
import AlbumButton from "./albumButton";

const Navbar = async () => {
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: Folder[]
    }
    return (
        <div className="pb-12">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 md:text-2xl font-semibold tracking-tight text-xl">
                        Explore Image
                    </h2>
                    <div className="space-y-3 my-3 text-lg md:text-xl">
                        <Link href={"/gallery"}>
                            <Button variant="secondary" className="w-full justify-start flex items-center gap-x-2 text-xl">
                                <BookImage />
                                Gallery
                            </Button>
                        </Link>
                        <AlbumButton />
                        <Link href={"/favorite"}>
                            <Button variant="ghost" className="w-full justify-start flex items-center gap-x-2 text-xl">
                                <Star />
                                Favorite
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

