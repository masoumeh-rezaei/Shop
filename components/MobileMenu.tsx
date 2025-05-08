'use client'
import { AlignLeft } from "lucide-react";
import SideBar from "./SideBar";
import { useState } from "react";

const MobileMenu = () => {
    const [isSideBarOpen,setIsSideBarOpen]=useState(false)
    return (
        <>
            <button onClick={()=> setIsSideBarOpen(!isSideBarOpen)}>
                <AlignLeft className="hover:text-gray-800 md:hidden hoverEffect"/>
            </button>
            <div className="md:hidden">
                <SideBar isOpen={isSideBarOpen}
                onClose={()=>setIsSideBarOpen(false)}
                />
            </div>
            
        </>
    );
}

export default MobileMenu;