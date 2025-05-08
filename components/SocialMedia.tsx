import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Facebook, Github, Linkedin, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";


interface ISocial{
    className?:string;
    iconClassName?:string;
    tooltipClassName?:string;
}
const SocialMedia = (props:ISocial) => {
    const {className,tooltipClassName,iconClassName} = props
    const socialLink=[
        {
            title:'Youtub',
            href:'',
            icon:<Youtube className="w-5 h-5"/>
        },
        {
            title:'GitHub',
            href:'',
            icon:<Github className="w-5 h-5"/>
        },
        {
            title:'Linkdin',
            href:'',
            icon:<Linkedin className="w-5 h-5"/>
        },
        {
            title:'Facebook',
            href:'',
            icon:<Facebook className="w-5 h-5"/>
        },
        
    ]
    return (
        <div>
            <TooltipProvider>
                <div className={cn("flex items-center gap-3.5",className)}>
                   {
                    socialLink.map((item,idx)=>(
                        <Tooltip key={idx}>
                        <TooltipTrigger asChild>
                            <Link href={item.href} target="-blank" rel='noopener noreferrer' className={cn('p-2 border rounded-full hover:text-white hover:border-white hoverEffect',iconClassName)}>
                            {item.icon}</Link>
                        </TooltipTrigger>
                        <TooltipContent className={cn('bg-white text-gray-800 font-semibold',tooltipClassName)}>
                            {item.title}
                        </TooltipContent>
                    </Tooltip>

                    ))
                   }
                </div>
            </TooltipProvider>
            
        </div>
    );
}

export default SocialMedia;