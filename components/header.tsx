import { currentUser } from "@clerk/nextjs/server";
import CartIcon from "./CartIcon";
import Container from "./container";
import HeaderMenue from "./HeaderMenue";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ListOrdered } from "lucide-react";
import { getAllCategories } from "@/sanity/helpers/query";

const Header = async() => {
    const categories = await getAllCategories()
    const user =await currentUser()
    
    return (
       <>
       <header className=" border-b border-b-gray-400 py-5 fixed z-50 bg-white w-full h-auto ">
       <Container className="flex items-center justify-between gap-7">
        
                {/*LeftBar */}
                <HeaderMenue categories={categories}/>
                {/*Logo */}
                <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
                <MobileMenu/>
                <Logo className="font-bold">
                    <div className="flex">
                    Style
                    <small className="text-sm">MoOn</small>
                    </div>
                </Logo>
                
                </div>
                {/**rightBar */}
                <div className="w-auto md:w-1/3 flex items-center justify-end gap-5 ">
                    <SearchBar/>
                    <CartIcon/>
                    <ClerkLoaded>
                        <SignedIn>
                        <Link href={'/orders'} className='group relative'>
                            <ListOrdered className="w-5 h-5 group-hover:text-gray-800 hoverEffect "/>
                            <span className="absolute -top-1 -right-1 bg-gray-800 text-white font-semibold flex items-center justify-center textxs h-3.5 w-3.5 rounded-full">0</span>
                         </Link>
                         <UserButton/>
                        </SignedIn>
                        {!user && (
                        <SignInButton mode='modal'>
                            
                            <button className="text-sm font-semibold hover:text-gray-800 hoverEffect">LogIn</button>
                        
                        </SignInButton>
                    )}
                    </ClerkLoaded>

                  
                </div>
            
       </Container>
       </header>
       </>
    );
}

export default Header;