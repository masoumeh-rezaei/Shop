'use client'
import React, { useEffect, useState } from 'react'
import HomeTabbar from './homeTabbar';
import { productType } from '@/constants';
import { client } from '@/sanity/lib/client';
import ProductCard from './productCard';
import NoProductsAvailable from './noProductsAvailable';
import {AnimatePresence, motion} from 'motion/react'
import { Loader2 } from 'lucide-react';

const ProductGrid = () => {
    const [selectedTab,setSelectedTab]=useState(productType[0]?.title || '')
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    const query = `*[_type == 'product' && varient == $varient] | order(name asc)`
    const params = {varient:selectedTab.toLocaleLowerCase()}
    useEffect(()=>{
      const fetchData = async()=>{
        setLoading(true)
        try{
          const response = await client.fetch(query,params);
          setProducts(await response)
          console.log(await response)

        }catch(err){
          console.log('Product fetching error',err)
        }finally{
          setLoading(false)
        }
      }
      fetchData()
    },[selectedTab])
  return (
    <>
    <div className=' flex flex-col items-center '>
    <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab}/>
    {loading ?(<div className='flex flex-col items-center justify-center py-10 min-h-80 space-y-80 text-center bg-gray-100 rounded-lg w-full mt-10'>
      <motion.div className='flex items-center space-x-2 text-blue-600 '>
        <Loader2 className='w-4 h-4 animate-spin'/>
        <span className='text-lg font-semibold'>Product is loading ...</span>
      </motion.div>
    </div>) 
    :(
      <>
      {products?.length ? (<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full'>
       { products.map((product:Product)=> <AnimatePresence key={product?._id}>
        <motion.div 
        layout
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}

       ><ProductCard  product={product}/></motion.div></AnimatePresence>
    )}
      </div>):<NoProductsAvailable selectedTab={selectedTab}/> }
      </>

    )}
    </div>
    </>
  )
}

export default ProductGrid;