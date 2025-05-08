import { cn } from "@/lib/utils";
import { Currency } from "lucide-react";

interface IPrice{
    amount:number | undefined;
    className?:string
}
const Priceformatter = (prop:IPrice) => {
    const {amount,className} = prop
    const formattedPrice = new Number(amount).toLocaleString('en-US',
    {currency:'USD',
    style:'currency',
    minimumFractionDigits:2}
    )
    return (
        <div>
            <span className={cn('text-sm text-gray-800 font-semibold',className)}>{formattedPrice}</span>
        </div>
    );
}

export default Priceformatter;