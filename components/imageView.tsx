'use client'
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

import {AnimatePresence, motion} from 'motion/react'
import Image from "next/image";
import { useState } from "react";
interface Props{
    images?: Array<{
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
        _key: string;
      }>;
}
const ImageView = ({images = []} : Props) => {
    
    const [active , setActive] = useState(images[0])
    return (
        <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
            
                <motion.div 
                
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5}}
                className="w-full max-h-[550px] min-h-[450px]">
                    <Image 
                    src={urlFor(active).url()} 
                    alt='product'
                    width={700} 
                    height={600} 
                    className="w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md"
                     priority/>
                </motion.div>
            
            <div className="grid grid-cols-6 gap-2 h-auto md:h-auto">
                {images?.map((image)=>(
                    <button 
                    onClick={()=>setActive(image)} 
                    key={image._key} 
                    className={`border rounded-md overflow-hidden ${active?._key === image?._key ? 'ring-1 ring-gray-800': ''} `}>
                        <Image src={urlFor(image).url()} width={100} height={100} className="w-full h-auto object-contain" alt="product"/>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ImageView;