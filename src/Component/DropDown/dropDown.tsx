import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MdModeEditOutline } from "react-icons/md";
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DialogBox } from "./dialog"
import { SearchResult } from "@/app/(root)/gallery/page";
import { useState } from "react"

const DropDownMenu = ({ images }: { images: SearchResult }) => {
    const [Open, setOpen] = useState(false)
    return (
        <DropdownMenu
        open={Open}
        onOpenChange={(setOpenChange)=>{
            setOpen(setOpenChange)
        }}
        >
            <DropdownMenuTrigger><Menu size={25} className="font-bold text-neutral-900 hover:text-neutral-700" /></DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col items-center justify-start gap-y-2">
                <DropdownMenuItem asChild><DialogBox image={images} onClose={()=>setOpen(false)} /></DropdownMenuItem>
                <DropdownMenuItem asChild className="w-full">
                    <Link href={`edit?publicId=${encodeURIComponent(images.public_id)}`}>
                    <Button variant={"default"} className="flex items-center gap-x-2 w-full">
                    <MdModeEditOutline className="h-5 w-5" /> Edit
                    </Button>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownMenu