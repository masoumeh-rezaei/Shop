import { cn } from "@/lib/utils";
interface ITitle{
    children:React.ReactNode;
    className?:string;
}
const Title = (props:ITitle) => {
    const {children,className} = props

    return (
        <h2 className={cn('text-2xl font-semibold mt-[100px]',className)}>
            {children}
        </h2>
    );
}

export default Title;