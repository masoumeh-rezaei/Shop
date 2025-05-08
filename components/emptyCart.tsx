'use client'
import emptyCart from '@/images/empty-cart.png'
import React from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'


const EmptyCart = () => {
  return (
    <div className='py-10 md:py-20 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4 '>

      <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      className=' mt-[80px] bg-white rounded-2xl shadow-xl p-8 max-w-md w-full  space-y-8 '>
        <motion.div 
        animate={{scale:[1,1.1,1],rotate:[0,5,-5]}}
        transition={{repeat:Infinity,duration:5,ease:'easeInOut'}}
        className='w-48 h-48 mx-auto relative border rounded-tl-4xl rounded-br-4xl'
        >
            <Image 
            src={emptyCart}
             alt='emptyCart' 
             className='drop-shadow-lg object-contain '
           />
           <motion.div className='absolute -top-4 -right-4 bg-blue-500  rounded-full p-2 '
            animate={{x:[0,-10,-10,0] , y:[0,5,-5,0]}}
            transition={{repeat:Infinity,duration:3,ease:'linear'}}
           >
                <ShoppingCart size={24} className='text-white'/>
           </motion.div>
        </motion.div>
        <motion.div>
            <div className='text-center space-y-4'>
                <h2>Your cart is feeling lonely </h2>
                <p className='text-gray-600'>looks like you haven&apos;t added anything to your cart yet. let&apos;s find amazing products</p>
            </div>
            <Link href={'/'} className='block bg-gray-800/5 border border-gray-800/20 text-center py-2.5 rounded-full text-sm font-semibold tracking-wide hover:text-white hover:border-gray-800 hover:bg-gray-800 hoverEffect mt-5'>Discover Products</Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EmptyCart