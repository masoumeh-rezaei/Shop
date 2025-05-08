
import { motion} from 'motion/react'
import Logo from './Logo';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { headerData } from "@/constants";
import Link from "next/link";
import SocialMedia from './SocialMedia';
import { useOutSideClick } from '@/hooks/useOutSideClick';
interface ISidebar{
    isOpen:boolean;
    onClose:()=>void
}
const SideBar = (props:ISidebar) => {

    const {onClose,isOpen}=props
    const pathname = usePathname()
    const sidebarRed=useOutSideClick<HTMLDivElement>(onClose)
    return (
        <div className={`fixed inset-y-0 left-0 z-50 bg-gray-800/50 shadow-xl  w-full ${isOpen ? 'translate-x-0': '-translate-x-full'}`}>
             <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}
             ref={sidebarRed}
             transition={{duration:0.4,delay:0.3}}  
             
             className='min-w-72 max-w-96 bg-gray-800 text-white/70 h-full p-10 border-r border-r-white flex flex-col gap-6'>
                <div className='flex justify-between items-center'>
               <button onClick={onClose}>
                <Logo  className="font-bold text-white">
                        <div className="flex">
                        Style
                        <small className="text-sm">MoOn</small>
                        </div>
                    </Logo>
               </button>
                <button className='cursor-pointer hover:text-rose-500 text-xl' onClick={onClose}><X/></button>

                </div>
                <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide">
            {
                headerData?.map((item,idx)=>(
                    <Link onClick={onClose} key={idx} href={item?.href} className={`hover:text-white hoverEffect w-32 relative group ${pathname === item?.href && 'text-white'} `}>{item?.title}
                    <span className={`absolute -bottom-0.5 left-0 h-0.5 w-0 bg-white hoverEffect group-hover:w-15 group-hover:left-0 ${pathname == item?.href && 'w-15'}`}/>
                    
                    </Link>
                ))
            }
            <SocialMedia/>
        </div>
             </motion.div>
        </div>
    );
}

export default SideBar;