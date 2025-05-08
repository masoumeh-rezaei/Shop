import { MapPin, Phone } from "lucide-react";

interface ITopFooter{
    title:string;
    subtitle:string;
    icon:React.ReactNode;
}
const data :Props[]=[
    {
        title:'Visit Us',
        subtitle:'Iran Tehran',
        icon:(<MapPin className="text-gray-600 group-hover:text-gray-800 transition-all"/>)
    },
    {
        title:'Call Us',
        subtitle:'09106765667',
        icon:(<Phone className="text-gray-600 group-hover:text-gray-800 transition-all"/>)
    },
    {
        title:'Working Hours',
        subtitle:'Mon- Sat : 10:00 AM - 7:00 PM',
        icon:(<MapPin className="text-gray-600 group-hover:text-gray-800 transition-all"/>)
    },
    {
        title:'Email Us',
        subtitle:'masomehRezaei@gmail.com',
        icon:(<MapPin className="text-gray-600 group-hover:text-gray-800 transition-all"/>)
    },
]
const FooterTop = () => {


    return (
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
            {data?.map((item,idx)=>(
                <ContactItem key={idx} icon={item?.icon} title={item?.title} subtitle={item?.subtitle}/>
            ))}
        </div>
    );
}

const ContactItem=({icon,title,subtitle}:Props)=>{
    return(
        <div className="flex gap-3 items-center hover:bg-gray-50 transition-all group">{icon}
            <div className="font-semibold text-gray-700 group-hover:text-gray-800 text-sm">
                <h3>{title}</h3>
                <p className="text-sm text-gray-600 mt-1 transition-all group-hover:text-gray-800">{subtitle}</p>
            </div>
        </div>
    )
}

export default FooterTop;