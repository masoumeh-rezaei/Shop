import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import useCartStore from "@/store";
import { Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";

interface IQuantity{
    product:Product;
    className?:string;
}
const QuantityButtons = (props:IQuantity) => {
    const {product,className}=props
    const {addItem,getItemCount,removeItem}=useCartStore()
    const itemCount= getItemCount(product?._id)
    const isOutOfStock=product?.stock === 0;
    const handleRemoveProduct = ()=>{
        removeItem(product._id);
        if(itemCount > 1){
            toast.success('Quantity Decreased sucessfully!')
        }else{
            toast.success(`${product?.name?.substring(0,12)} removed successfully`)
        }
    }
    
    return (
        <div className={cn('flex gap-1 items-center text-base pb-1',className)}>
            <button 
            onClick={handleRemoveProduct}
            disabled={itemCount === 0 || isOutOfStock}
            variant='outline' size='icon' className="w-6 h-6">
                <Minus/>
            </button>
            <span className="w-8 text-center text-gray-800 font-semibold ">{itemCount}</span>
            <button 
                     onClick={()=>{
                        addItem(product);
                        toast.success(`${product?.name?.substring(0,12)}... added successfuly`)
                    }}
            variant='outline' size='icon' className="w-6 h-6">
                <Plus/>
            </button>
        </div>
    );
}

export default QuantityButtons;