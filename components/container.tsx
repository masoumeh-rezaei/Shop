import { cn } from "@/lib/utils";
interface IContainer{
    children: React.ReactNode;
    className?:string
}

const Container = (props:IContainer) => {
    const {children,className} = props
    return (
        <div className={cn('max-w-screen-xl mx-auto px-4  ',className)}>
            {children}
        </div>
    );
}

export default Container;