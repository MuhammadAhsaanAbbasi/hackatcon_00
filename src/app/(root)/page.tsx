import SignIn from "@/Component/SignIn/signIn";
import SignUp from "@/Component/SignUp/signUp";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {

  return (
    <section>
      <div className="min-h-screen w-full flex justify-center items-center bg-[#F6F8FD] dark:bg-[rgb(10,10,10)]">
        <SignedIn>
          <SignUp/>
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
      </div>
    </section>
  );
}
