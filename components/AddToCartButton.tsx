'use client'

import { cn } from "@/lib/utils";
import QuantityButtons from "./quantityButtons";
import Priceformatter from "./priceformatter";
import useCartStore from "@/store";
import toast from "react-hot-toast";
import { Product } from "@/sanity.types";

interface IAdd {
    product: Product;
    className?: string;
}

const AddToCartButton = ({ product, className }: IAdd) => {
    const { addItem, getItemCount } = useCartStore();

    // مطمئن شو product و _id وجود دارند تا از ارور جلوگیری شود
    if (!product || !product._id) {
        return (
            <button disabled className={cn('w-full bg-gray-300 text-gray-500 p-2 rounded', className)}>
                Unavailable
            </button>
        );
    }

    const itemCount = getItemCount(product._id);
    const isOutOfStock = product.stock === 0;

    return (
        <div className="w-full h-12 flex justify-center items-center">
            {itemCount ? (
                <div className="w-full text-sm">
                    <div className="flex items-center justify-between ">
                        <span className="text-sm">Quantity</span>
                        <QuantityButtons product={product} />
                    </div>
                    <div className="flex items-center pt-1 justify-between border-t">
                        <span className="text-sm">Subtotal</span>
                        <Priceformatter amount={product.price ? product.price * itemCount : 0} />
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => {
                        addItem(product);
                        toast.success(`${product.name?.substring(0, 12)}... added successfully`);
                    }}
                    disabled={isOutOfStock}
                    className={cn(
                        'w-full bg-transparent text-gray-800 shadow-none border border-gray-800/30 tracking-wide hoverEffect font-semibold hover:text-white p-2 rounded-lg hover:bg-gray-800',
                        className
                    )}
                >
                    Add to cart
                </button>
            )}
        </div>
    );
};

export default AddToCartButton;
