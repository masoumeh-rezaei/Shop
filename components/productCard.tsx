import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PriceViw from './priceViw'
import AddToCartButton from './AddToCartButton'
import { Product } from '@/sanity.types'

const ProductCard = ({product}:{product:Product}) => {
  return (
    <div className='rounded-2xl group text-sm overflow-hidden'>
        <div className='bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400 overflow-hidden relative'>
            {product?.images && <Link href={`/product/${product?.slug?.current}`}>
            <Image 
            src={urlFor(product?.images[0]).url()} 
            width={500} 
            height={300} 
            alt='productImg' 
            priority 
            className={`w-full h-72 object-cover overflow-hidden  hoverEffect ${product?.stock !== 0 &&'group-hover:scale-110'}`}/>
            </Link>}
            {product?.stock === 0 && (<div className='absolute top-0 left-0 h-full w-full bg-gray-800/50'><p className='text-center text-base text-white font-bold  '>Out Of Stock</p></div>)}
        </div>
        <div className='py-3 px-2 flex flex-col gap1.5 bg-zinc-50 border border-t-0 rounded-lg  rounded-tl-none rounded-tr-none'>
            <h2 className='font-semibold line-clamp-1'>{product?.name}</h2>
            <p className='text-sm text-zinc-600'>{product?.intro}</p>
            <PriceViw className='text-lg ' price={product?.price} discount={product?.discount}/>
            <AddToCartButton product={product} stock={product?.stock}/>
        </div>
    </div>
  )
}

export default ProductCard