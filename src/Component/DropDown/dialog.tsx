// import { SearchResult } from "@/app/(root)/gallery/page";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyPlus } from "lucide-react";
import { useState } from "react";
import { addImageToAlbum } from "./action";

export function DialogBox({
    image,
    onClose
}: {
    image: SearchResult;
    onClose:()=>void
}) {
    const [Open, setOpen] = useState(false)
    const [AlbumName, setAlbumName] = useState("")
    return (
        <Dialog
        open={Open}
        onOpenChange={(setOpenChange)=>{
            setOpen(setOpenChange)
            if(!setOpenChange){
                onClose()
            }
        }}
        >
            <DialogTrigger>
                <Button variant="ghost">
                    <CopyPlus className="mr-2 h-5 w-5" />
                    <span>Add to Album</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add to Album</DialogTitle>
                    <DialogDescription>
                        Type an album you want to move this image into
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Album
                        </Label>
                        <Input
                            id="album-name"
                            value={AlbumName}
                            onChange={(e)=>setAlbumName(e.currentTarget.value)}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type="submit"
                        onClick={async()=>{
                            setOpen(false)
                            await addImageToAlbum(image,AlbumName)
                        }}
                    >
                        Add to Album
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}