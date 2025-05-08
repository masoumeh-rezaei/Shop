import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import {motion} from 'motion/react'
const NoProductsAvailable = ({selectedTab,className}:
    {
        selectedTab:string;
        className?:string
    }) => {
    return (
        <div className={cn('flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10 text-gray-700 text-sm',className)}>
            <motion.div 
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            >
            <h2 className='text-2xl font-bold text-gray-800'>No Product Available</h2>
            </motion.div>
            <motion.p className='text-gray-600' 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{delay:0.2,duration:.5}}>
                we&apos;re sorry,but there are no products matching on 
                <span className='text-base font-semibold text-gray-800'> {selectedTab} </span>
                criteria at the momment
            </motion.p>
            <motion.div className='flex items-center space-x-2 text-blue-600'
            animate={{scale:[1,1.1,1]}}
            transition={{repeat:Infinity,duration:1.2}}
            >
                <Loader2 className='w-4 h-4 animate-spin'/><span>we&apos;re restocking shortly </span>
            </motion.div>
            <motion.p className='text-sm' initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.4,duration:0.5  }}
            >
                please check back later or explore out product categories
            </motion.p>
        </div>
    );
}

export default NoProductsAvailable;