import Link from "next/link";
import { cn } from "@/lib/utils";
interface ILogo{
    children:React.ReactNode;
    className?:string;
}
const Logo = (props:ILogo) => {
    const {children,className} = props
    return (
        <Link href={'/'}>
           <h2 className={cn('text-2xl text-gray-800  uppercase ',className)}>
           {children}
           </h2>
        </Link>
    );
}

export default Logo;