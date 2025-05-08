import { cn } from "@/lib/utils";
import Priceformatter from "./priceformatter";

interface IPrice{
    price : number | undefined;
    discount:number | undefined;
    className?:string
}
const PriceViw = (prop:IPrice) => {
    const {price,discount,className}=prop
    return (
        <div className="flex items-center  gap-2">
            
                <Priceformatter amount={price} className={className}/>
                {price && discount && <Priceformatter amount={price+(discount * price) / 100} className={cn('line-through text-zinc-500 font-medium',className)}/>}
            
            
        </div>
    );
}

export default PriceViw;