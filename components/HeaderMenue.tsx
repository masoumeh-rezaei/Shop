'use client'

import { CATEGORIES_QUERYResult } from "@/sanity.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenue = ({categories}:{categories:CATEGORIES_QUERYResult}) => {
    const pathname=usePathname()
    return (
        <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold text-gray-500">
            <Link href={'/'}
            className={`hover:text-gray-700 hoverEffect relative group ${pathname === '/' && 'text-gray-800'} `}
            >Home
             <span className={`absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-gray-800 hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname == '/' && 'w-1/2'}`}/>
             <span className={`absolute -bottom-0.5 right-1/2 h-0.5 w-0 bg-gray-800 hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname == '/' && 'w-1/2'}`}/>
            </Link>
            {
                categories?.map((category,idx)=>(
                    <Link key={idx} href={`/category/${category?.slug?.current}`} className={`hover:text-gray-700 hoverEffect relative group ${pathname === `/category/${category?.slug?.current}` && 'text-gray-800'} `}>{category?.title}
                    <span className={`absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-gray-800 hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname == `/category/${category?.slug?.current}` && 'w-1/2'}`}/>
                    <span className={`absolute -bottom-0.5 right-1/2 h-0.5 w-0 bg-gray-800 hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname == `/category/${category?.slug?.current}` && 'w-1/2'}`}/>
                    </Link>
                ))
            }
        </div>
    );
}

export default HeaderMenue;