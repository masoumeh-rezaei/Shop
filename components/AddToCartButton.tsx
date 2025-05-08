'use client'
import { cn } from "@/lib/utils";
import QuantityButtons from "./quantityButtons";
import Priceformatter from "./priceformatter";
import useCartStore from "@/store";
import toast from "react-hot-toast";

interface IAdd{
    product:string;
    className?:string;
    stock?:number
}
const AddToCartButton = (prop:IAdd) => {

    const {product,className,stock} = prop
   const {addItem,getItemCount}=useCartStore()
   const itemCount= getItemCount(product?._id)
    const isOutOfStock=product?.stock === 0;
    
    
    return (
        <div className="w-full h-12 flex justify-center items-center">
           {itemCount ? (<div className="w-full text-sm">
            <div className="flex items-center justify-between "><span className="text-sm ">Quantity</span> <QuantityButtons product={product}/> </div>
            <div className="flex items-center pt-1 justify-between border-t">
                <span className="text-sm ">Subtotal</span>
                <Priceformatter amount={product?.price ? product?.price*itemCount:0}/>
                 </div>
           </div>
        ) : (
            <button 
            onClick={()=>{
                addItem(product);
                toast.success(`${product?.name?.substring(0,12)}... added successfuly`)
            }}
            disabled={isOutOfStock}
            className={cn('w-full bg-transparent text-gray-800 shadow-none border border-gray-800/30 tracking-wide hoverEffect font-semibold hover:text-white p-2 rounded-lg hover:bg-gray-800',className)}>Add to cart</button>
        )}
        </div>
    );
}

export default AddToCartButton;