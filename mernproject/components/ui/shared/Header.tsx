import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../button"
import NavItems from "./NavItems"

const Header = () => {
  return (
   
   <header className="w-full border-b">
    <div className="wrapper flex items-center justify-between"></div>
    <Link href="/" className="w-36">
         <Image src="/assets/images/logo.svg" width={128} height={38}
         alt="EventZen logo"/>
    </Link>
     <SignedIn>
        <nav className="md:flex-between hidden w-full max-w-xs">
        <NavItems/>
        </nav>
     </SignedIn>
     <div className="flex w-32 justify-end gap-3">
        <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            
        </SignedIn>
        <SignedOut>
            <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in"></Link>
            </Button>
        </SignedOut>
     </div>

   </header>
  )
}

export default Header
