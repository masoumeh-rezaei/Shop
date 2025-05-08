'use client'
import { Product } from '@/sanity.types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import { useState } from 'react'
import React from 'react'
import { ChevronDown } from 'lucide-react'

const ProductCharacteristics = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full'>
      {/* Control button*/}
      <div className='flex justify-between items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded-md text-sm font-medium text-gray-800 mb-2 w-full'>
      <button
        
        className='flex items-center '
      >
       {product?.name} Carecteristics
        
      </button>
      <ChevronDown
        onClick={() => setOpen(!open)}
          className={`w-4 h-4 transition-transform justify-end ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Accordion */}
      <Accordion
        type='single'
        collapsible
        value={open ? 'item-1' : ''}
        onValueChange={(value) => setOpen(value === 'item-1')}
        className='w-full border rounded-lg overflow-hidden shadow-sm'
      >
        <AccordionItem value='item-1' className='border-b'>
          <AccordionTrigger className='hidden' /> {/* مخفی کردن تریگر داخلی */}
          <AccordionContent className='px-4 py-4 bg-white space-y-2 text-sm text-gray-700'>
            <div className='flex justify-between border-b pb-1'>
              <span>Brand</span>
              <span className='font-semibold'>Unknown</span>
            </div>
            <div className='flex justify-between border-b pb-1'>
              <span>Collection</span>
              <span className='font-semibold'>2021</span>
            </div>
            <div className='flex justify-between border-b pb-1'>
              <span>Type</span>
              <span className='font-semibold'>{product?.varient}</span>
            </div>
            <div className='flex justify-between border-b pb-1'>
              <span>Stock</span>
              <span className='font-semibold'>
                {product?.stock ? 'Available' : 'Out Of Stock'}
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Variant</span>
              <span className='font-semibold'>{product?.intro || '-'}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ProductCharacteristics
