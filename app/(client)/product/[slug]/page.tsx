
import AddToCartButton from '@/components/AddToCartButton';
import Container from '@/components/container'
import ImageView from '@/components/imageView';
import PriceViw from '@/components/priceViw';
import ProductCharestristics from '@/components/productCharestristics';
import { getProductBySlug } from '@/sanity/helpers/query';
import { HeartIcon } from '@sanity/icons';
import { BoxIcon, FileQuestionIcon, Heart, ListOrderedIcon, ShareIcon } from 'lucide-react';

import React from 'react'

const SingleProductPage = async({params
}:{
  params:Promise<{slug:string}>}) => {
    const {slug} = await params;
    const product = await getProductBySlug(slug)
    
    
  return (
    <div >
        <Container className='py-10 flex flex-col md:flex-row gap-10'>
          {
            product?.images && <ImageView images={product?.images}/>
          }
          <div className='w-full md:w1/2 flex flex-col gap-5'>
            <div>
              <h2 className='md:text-4xl text-3xl font-bold mb-2 '>{product?.name}</h2>
              <PriceViw className='text-lg font-big' price={product?.price} discount={product?.discount}/>
            </div>
            {product?.stock && <p className={ `py-2.5 bg-green-100 w-24 text-center text-green-600 text-sm font-semibold rounded-lg`}>In Stock</p>}
            <p className='text-sm text-gray-600 tracking-wide'>{product?.description}</p>
            <div className='flex items-center gap-2.5 lg:gap-5'>
              <AddToCartButton product={product} className= 'w-full  bg-gray-800/90 hover:bg-gray-900 text-white hoverEffect '/>
              <button>
                <HeartIcon className='border-2 border-gray-800/30 text-gray-800/30 px-2.5 py-2.5 rounded-md hover:text-gray-800 hover:border-gray-800'/>
              </button>
            </div>
            <ProductCharestristics product={product}/>
            <div className='flex items-center justify-between flex-wrap gap-2.5 border-b border-b-gray-200 py-5 -mt-2'>
              <div className='flex items-center gap-2 text-sm hover:text-rose-600 hoverEffect'>
                <BoxIcon className='w-5 h-5'/>
                <p>Compare color</p>
              </div>
              <div className='flex items-center gap-2 text-sm hover:text-rose-600 hoverEffect'>
                <FileQuestionIcon className='w-5 h-5'/>
                <p>Ask A qUESTION</p>
              </div>
              <div className='flex items-center gap-2 text-sm hover:text-rose-600 hoverEffect'>
                <ListOrderedIcon className='w-5 h-5'/>
                <p>Delivery & Return</p>
              </div>
              <div className='flex items-center gap-2 text-sm hover:text-rose-600 hoverEffect'>
                <ShareIcon className='w-5 h-5'/>
                <p>Share</p>
              </div>
            </div>
            <div className='items-center flex gap-5 flex-wrap'>
              <div className='border border-blue-800/20 text-center p-3 hover:border-blue-800 rounded-md hoverEffect'>
                <p className='text-base font-semibold text-gray-800'>Free Shipping</p>
                <p className='text-sm text-gray-500'>Free Shipping Over Order $120</p>
              </div>
              <div className='border border-blue-800/20 text-center p-3 hover:border-blue-800 rounded-md hoverEffect'>
                <p className='text-base font-semibold text-gray-800'>Flexible Payment</p>
                <p className='text-sm text-gray-500'>Free Shipping Over Order $120</p>
              </div>
            </div>
            
          </div>
        </Container>
    </div>
  )
}

export default SingleProductPage