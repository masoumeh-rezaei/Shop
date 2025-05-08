import { productType } from "@/constants";
import { Repeat } from "lucide-react";

interface IHomeTab{
    selectedTab:string;
    onTabSelect:(tab:string)=> void
}

const HomeTabbar = (props:IHomeTab) => {
    const {selectedTab,onTabSelect}=props
    return (
        <div className="flex items-center gap-1.5 font-semibold text-sm">
            <div className="flex items-center gap-1.5">
                {productType?.map((item,idx)=>(
                    <button 
                    key={idx} 
                    onClick={()=>onTabSelect(item?.title)}
                    className={`border border-gray-900 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-gray-900 hover:text-white hoverEffect ${selectedTab === item?.title && 'bg-gray-900 text-white'}`}>{item?.title}</button>
                ))}
            </div>
            <button className={`border border-gray-900  p-2 rounded-full hover:bg-gray-900 hover:text-white hoverEffect`}>
                <Repeat className="w-5 h-5"/>
            </button>
        </div>
    );
}

export default HomeTabbar;