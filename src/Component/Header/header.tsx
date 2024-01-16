import Image from "next/image"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import ThemeBtn from "../Themebtn/themeBtn"
import { RedirectToSignIn, SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Header = () => {
    return (
        <div>
            <Menubar className="flex justify-between mx-3 my-2 active:bg-transparent py-6 px-6">
                <MenubarMenu>
                    <div className="flex items-center gap-x-3">
                        <Link href={"/"}>
                        <Image
                            className="w-10 h-10 rounded-full"
                            src={"/assets/logo.jpeg"}
                            alt="My Profile"
                            height={200}
                            width={200}
                        />
                        </Link>
                        <h1 className="text-2xl font-bold font-['ananda']">Maa_Crative_Designs</h1>
                    </div>
                </MenubarMenu>
                <MenubarMenu>
                    <div className="flex items-center gap-x-2">
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton afterSignInUrl="/gallery">
                                <Button>Login</Button>
                            </SignInButton>
                        </SignedOut>
                        <ThemeBtn />
                    </div>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}

export default Header