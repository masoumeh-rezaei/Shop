'use client'
import { CATEGORIES_QUERYResult, Product } from '@/sanity.types'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { client } from '@/sanity/lib/client';
import ProductCard from './productCard';
import NoProductsAvailable from './noProductsAvailable';
import {AnimatePresence, motion} from 'motion/react'
import { Loader2 } from 'lucide-react';
interface ICategory{
    categories:CATEGORIES_QUERYResult;
    slug:string
}

const CategoryProduct = (props:ICategory) => {
    const {categories,slug}=props
    const [currentSlug,setCurrentSlug] = useState(slug)
    const [products,setProducts] = useState([])
    const [loading , setLoading] = useState(false)
    const fetchProduct=async(categorySlug:string)=>{
        try{
            setLoading(true)
            const query = `*[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug][0]._id)] | order(name asc)`

            const data = await client.fetch(query,{categorySlug})
            setProducts(data)

        }catch(err){
            console.log('error fetching products:',err)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchProduct(currentSlug)

    },[currentSlug])
  return (
    <div className='py-5 flex flex-col md:flex-row items-start gap-5'>
      
        <div className='flex flex-col md:min-w-40 border'>
            {categories?.map((item)=>(
                <Button key={item?._id}
                onClick={()=>setCurrentSlug(item?.slug?.current as string)}
                 className={`bg-transparent border-0 rounded-none
                  text-gray-800 shadow-none hover:bg-gray-800/80
                   hover:text-white font-semibold hoverEffect 
                   border-b last:border-b-0 ${item?.slug?.current === currentSlug && 'bg-gray-800 text-white border-gray-800'} `}>
                    {item?.title}
                    </Button>
            ))}
        </div>
        <div className=' w-full'>
        {loading ?(<div className='flex flex-col items-center justify-center py-10 min-h-80 space-y-80 text-center bg-gray-100 rounded-lg w-full '>
      <motion.div className='flex items-center space-x-2 text-blue-600 '>
        <Loader2 className='w-4 h-4 animate-spin'/>
        <span className='text-lg font-semibold'>Product is loading ...</span>
      </motion.div>
    </div>) 
    :(
      <>
      {products?.length ? (<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  w-full'>
       { products.map((product:Product)=> <AnimatePresence key={product?._id}>
        <motion.div 
        layout
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}

       ><ProductCard  product={product}/></motion.div></AnimatePresence>
    )}
      </div>):<NoProductsAvailable className='mt-0' selectedTab={currentSlug}/> }
      </>

    )}
        </div>
    </div>
  )
}

export default CategoryProduct