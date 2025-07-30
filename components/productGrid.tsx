'use client'

import React, { useEffect, useState, useMemo } from 'react'
import HomeTabbar from './homeTabbar';
import { productType } from '@/constants';
import { client } from '@/sanity/lib/client';
import ProductCard from './productCard';
import NoProductsAvailable from './noProductsAvailable';
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2 } from 'lucide-react';
import { Product } from "@/sanity.types";

const query = `*[_type == 'product' && varient == $varient] | order(name asc)`;

const ProductGrid = () => {
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '')
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)

    const params = useMemo(() => ({
        varient: selectedTab.toLowerCase()
    }), [selectedTab]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await client.fetch(query, params);
                const filtered = response.filter((item: Product) => item && item._id);
                setProducts(filtered)
            } catch (err) {
                console.error('Product fetching error', err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [selectedTab, params]) // فقط این دوتا وابسته هستن

    return (
        <div className='flex flex-col items-center'>
            <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />

            {loading ? (
                <div className='flex flex-col items-center justify-center py-10 min-h-80 text-center bg-gray-100 rounded-lg w-full mt-10'>
                    <motion.div className='flex items-center space-x-2 text-blue-600'>
                        <Loader2 className='w-4 h-4 animate-spin' />
                        <span className='text-lg font-semibold'>Product is loading ...</span>
                    </motion.div>
                </div>
            ) : (
                <>
                    {products.length ? (
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full'>
                            {products.map((product: Product) =>
                                product && product._id ? (
                                    <AnimatePresence key={product._id}>
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <ProductCard product={product} />
                                        </motion.div>
                                    </AnimatePresence>
                                ) : null
                            )}
                        </div>
                    ) : (
                        <NoProductsAvailable selectedTab={selectedTab} />
                    )}
                </>
            )}
        </div>
    )
}

export default ProductGrid;
