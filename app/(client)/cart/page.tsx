'use client'
import Loading from '@/components/loadingComp'
import useCartStore from '@/store'
import React, { useEffect, useState } from 'react'
import { useAuth, useUser } from '@clerk/nextjs'
import Container from '@/components/container'
import NoAccessToCart from '@/components/noAccessToCart'
import EmptyCart from '@/components/emptyCart'
import { Heart, ShoppingBagIcon, Trash, WindIcon } from 'lucide-react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import toast from 'react-hot-toast'
import Priceformatter from '@/components/priceformatter'
import QuantityButtons from '@/components/quantityButtons'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'
import Title from '@/components/Title'


const Cart = () => {
  const [isClient,setIsClient] = useState(false)
  const {isSignedIn}=useAuth()
  const {deleteCartProduct,getTotalPrice,getItemCount,getSubtotalPrice,getGroupedItems,resetCart}=useCartStore()
  const user = useUser()
  useEffect(()=>{
    setIsClient(true)
  },[])
  if(!isClient){
    return <Loading/>
  }
  const cartProducts = getGroupedItems()

  const handleDeleteProduct=(id:string)=>{
    deleteCartProduct(id)
    toast.success(`Product deleted successdully`)
  }
  const handleResetCard=()=>{
    const confirmed= window.confirm('are u sure to reset your cart?')
    if(confirmed){
      resetCart()
      toast.success('your cart reset successfully!')
    }
  }
  const handleCheckOut=()=>{
    toast.error('checkOut On Proccess')
  }
  return (
    <>
    <div className='bg-gray-50 pb-52 md:pb-10'>
      {isSignedIn ? 
      <Container >
        {cartProducts?.length ?
         <>
         <div className='flex items-center gap-2 py-5'>
          
          
          <Title className='text-2xl font-semibold flex flex-row gap-x-2'> <ShoppingBagIcon/> <span>Shopping Cart</span></Title>
         </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-8 gap-x-4'>
               {/*Product */}
                <div className='lg:col-span-2 rounded-lg'>
                  <div className='border bg-white rounded-md'>
                    {cartProducts?.map(({product})=>{
                      const itemCount = getItemCount(product?._id)
                      return(
                        <div key={product?._id} className='border-b p-2.5 last:border-b-0 flex items-center justify-between gap-5'>
                          <div className='flex flex-1 items-center gap-2 h-36 md:h-44'>
                            {product?.images && 
                            <Link 
                            href={`/product/${product?.slug?.current}`}
                            className='p-0.5 md:p-1 mr-2  overflow-hidden group'>
                              <Image src={urlFor(product?.images[0]).url()}
                              alt='productimage'
                              width={200}
                              height={100}
                              loading='lazy'
                              className='w-32 md:w-40 h-32 md:h-40 object-cover group-hover:scale-105 overflow-hidden hoverEffect rounded-md'
                              
                              />
                              </Link>
                              }
                              <div className='h-full flex flex-1 items-start flex-col justify-between py-1'>
                                <div className='space-y-1.5'>
                                  <h2 className='font-semibold line-clamp-1'>{product?.name}</h2>
                                  <p className='text-sm text-gray-500 font-medium'>{product?.intro}</p>
                                  <p className='text-sm capitalize'>Variant : <span className='font-semibold'>{product?.varient}</span></p>
                                  <p className='text-sm capitalize'>Status: <span className='font-semibold'>{product?.status}</span></p>
                                </div>
                                <div className='text-gray-500'>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <Heart 
                                        className='w-4 h-4 md:w-5 md:h-5 hover:text-green-600 hoverEffect '/>
                                      </TooltipTrigger>
                                      <TooltipContent className='font-bold'>
                                          Add to favorite
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <Trash 
                                        onClick={()=>{
                                          handleDeleteProduct(product?._id)
                                        }}
                                        className='w-4 h-4 md:w-5 md:h-5 hover:text-red-600 hoverEffect '/>
                                      </TooltipTrigger>
                                      <TooltipContent className='font-bold '>
                                          Delete Product
                                        </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                              </div>
                              <div className='flex flex-col items-start justify-between p-0.5 md:p-1 h-36 md:h-44'>
                                <Priceformatter amount={(product?.price as number)* itemCount } className='font-bold text-lg text-green-600'/>
                                <QuantityButtons product={product}/>
                              </div>
                          </div>
                          
                        </div>
                      )
                    })}
                    <Button onClick={handleResetCard} className='m-5 font-semibold ' variant={'destructive'}>Reset Cart</Button>
                  </div>
            
                </div>
            {/*summary */}
                <div className='lg:col-span-1 '>
                  <div className='hidden md:inline-block w-full bg-white p-6 rounded-lg border'>
                    <h2 className='text-xl font-semibold '>order Summary</h2>
                    <div className='space-y-4'>
                      <div className='flex justify-between'>
                        <span className='text-sm text-gray-600'>Subtotal</span>
                        <Priceformatter amount={getSubtotalPrice()}/>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-sm text-gray-600'>Discount</span>
                        <Priceformatter amount={getSubtotalPrice()- getTotalPrice()}/>
                      </div>
                      <div className='flex justify-between'>
                        <span className=''>Total</span>
                        <Priceformatter amount={getTotalPrice()}
                        className='text-lg font-bold text-black'
                        />
                      </div>
                      <Button 
                      onClick={handleCheckOut}
                      className='w-full tracking-wide font-semibold rounded-full' size='lg'>Procced to check out</Button>
                      <Link href='/' className='flex items-center justify-center py-2 border border-gray-800/50 hover:border-gray-800 rounded-full hover:bg-gray-800/10'>
                          <Logo className="font-bold">
                              <div className="flex">
                                Pay
                              <small className="text-sm">Pol</small>
                          </div>
                          </Logo>
                      </Link>
                    </div>
                  </div>
                </div>
                {/*order summary for mobile view */}
                <div className='md:hidden fixed bottom-0 left-0 w-full bg-white pt-2'>
                  <div className='p-4 rounded-lg border mx-4'>

                  <h2 className='text-xl font-semibold '>order Summary</h2>
                    <div className='space-y-4'>
                      <div className='flex justify-between'>
                        <span className='text-sm text-gray-600'>Subtotal</span>
                        <Priceformatter amount={getSubtotalPrice()}/>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-sm text-gray-600'>Discount</span>
                        <Priceformatter amount={getSubtotalPrice()- getTotalPrice()}/>
                      </div>
                      <div className='flex justify-between'>
                        <span className=''>Total</span>
                        <Priceformatter amount={getTotalPrice()}
                        className='text-lg font-bold text-black'
                        />
                      </div>
                      <Button className='w-full tracking-wide font-semibold rounded-full' size='lg'>Procced to check out</Button>
                      <Link href='/' className='flex items-center justify-center py-2 border border-gray-800/50 hover:border-gray-800 rounded-full hover:bg-gray-800/10'>
                          <Logo className="font-bold">
                              <div className="flex">
                                Pay
                              <small className="text-sm">Pol</small>
                          </div>
                          </Logo>
                      </Link>
                    </div>



                  </div>
                </div>

          </div>
         </> 
         : ( 
         <EmptyCart/>
         )}
      </Container>
      :
      (
        <NoAccessToCart/>
      )
      }
    </div>
    </>
    
  )
}

export default Cart