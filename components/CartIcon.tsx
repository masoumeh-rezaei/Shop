'use client'
import useCartStore from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
const CartIcon = () => {
    const {items}= useCartStore()
    return (
        <Link href={'/cart'} className='group relative'>
            <ShoppingBag className="w-5 h-5 group-hover:text-gray-800 hoverEffect "/>
            <span className="absolute -top-1 -right-1 bg-gray-800 text-white font-semibold flex items-center justify-center textxs h-3.5 w-3.5 rounded-full">
                {items.length ? items.length : 0}
            </span>
        </Link>
    );
}

export default CartIcon;