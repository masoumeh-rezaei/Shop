'use client'
import { Loader2, Search, X } from "lucide-react";
import { Dialog, DialogHeader, DialogTitle,DialogContent, DialogTrigger  } from "./ui/dialog";

import {useCallback, useEffect, useState} from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceViw from "./priceViw";
import AddToCartButton from "./AddToCartButton";

const SearchBar = () => {
    const [search,setSearch]=useState('')
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    const [showSearch,setShowSearch]=useState(false)
    const fetchProducts=useCallback(async()=>{
        if(!search){
            setProducts([])
            return
        }
        setLoading(true)
        try{
            const query = `*[_type == "product" && name match $search] | order(name asc)`;
            const params = {search:`${search}*`}
            const response = await client.fetch(query,params)
            setProducts(response)

        }catch(err){
            console.log('error fetching products',err)
        }finally{
            setLoading(false)
        }

    },[search]);
    useEffect(()=>{
        const debounceTimer = setTimeout(()=>{
            fetchProducts()
        },300)
        return()=>clearTimeout(debounceTimer)
    },[search,fetchProducts])


    return (
        <Dialog open={showSearch} onOpenChange={(open) => setShowSearch(open)} >
            <DialogTrigger onClick={()=>setShowSearch(!showSearch)}>
            
                <Search className="w-5 h-5 hover:text-gray-800 hoverEffect"/>
        
            </DialogTrigger>
            <DialogContent className="!w-[90vw] !max-w-[1200px] min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden">
                <DialogHeader>
                    <DialogTitle  className="mb-1">
                          Product SearchBar
                    </DialogTitle>
                    <form className="relative" onSubmit={(e)=>e.preventDefault()}>
                        <input 
                        type="text" 
                        placeholder="Search sth here "  
                        className="w-full rounded-md py-2 px-1 border-gray-600 " 
                        value={search} 
                        onChange={(e)=>setSearch(e.target.value)}/>
                        {search && <X onClick={()=>setSearch('')} 
                        className="w-4 h-4 absolute top-3 right-11 hover:text-rose-600 hoverEffect"/>}
                        <button type="submit" className={`absolute right-0 top-0  w-10  h-full flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-gray-800 hoverEffect hover:text-white ${search ?'bg-gray-800 text-white':'bg-gray-800/10'}`}>
                            <Search className="w-5 h-5"/>
                        </button>
                    </form>
                </DialogHeader>
                <div className="w-full overflow-y-scroll border border-gray-800/20 rounded-md h-full">
                    <div>
                        {loading ?
                         <p className="flex items-center px-6 py-10 gap-1 text-center text-yellow-600 font-semibold "><Loader2 className="animate-spin w-5 h-5"/> Serchinh On Progress...</p> 
                         :
                         products.length
                          ?  products?.map((product:Product)=>(
                            <div key={product?._id} className="bg-white overflow-hidden border-b last:border-b-0 w-full">
                                <div className="flex items-center p-1 w-full">
                                    <Link 
                                    onClick={()=>setShowSearch(false)}
                                    href={`/product/${product?.slug?.current}`}
                                     className="h-20 w-20 md:h-24 md:w-24 border-gray-800/20 rounded-md overflow-hidden group">
                                    {product?.images && 
                                    (<Image 
                                        width={200} 
                                        height={200} 
                                        alt="product pic"
                                        src={urlFor(product?.images[0]).url()} 
                                        className="object-cover w-full h-full group-hover:scale-110 hoverEffect"
                                    
                                    />)}
                                    </Link>
                                    <div className="px-4 py-2 flex-grown">
                                    <Link 
                                     href={`/product/${product?.slug?.current}`}
                                     onClick={()=>setShowSearch(false)}
                                     >
                                    <h3 className="text-sm md:text-lg font-semibold text-gray-800 line-clamp-1">{product?.name}</h3>
                                    <p className="text-sm text-gray-600  line-clamp-1">{product?.intro}</p>
                                    </Link>
                                    <AddToCartButton product={product} className=" w-[200px] mr-auto md:w-[300px]" />
                                    <PriceViw 
                                    price={product?.price} 
                                    discount={product?.discount}
                                    className="md:text-lg"
                                    />
                                </div>
                                <div className="md:block mt-1 hidden ml-auto">
                                <PriceViw 
                                    price={product?.price} 
                                    discount={product?.discount}
                                    className="text-sm"
                                    />
                                </div>
                                </div>
                                
                            </div>
                          ))
                          : <div className={'text-center py-10 font-semibold tracking-wide'}>
                            {search && !loading
                             ? <p>nothing match with the keyword <span className="underline text-red-600">{search}</span>. please try sth else.</p> 
                             : <p className="text-green-600 flex items-center justify-center gap-1"> <Search className="w-5 h-5"/> search And Explore Your Products From MoonShop</p>}</div>}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default SearchBar;