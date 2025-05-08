import { categoriesData, quikLinksData } from "@/constants";
import Container from "./container";
import FooterTop from "./footerTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Input } from "./ui/input";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white border-t ">
           
            <Container>
            <FooterTop/>
            
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 space-y-4">
                <div className="space-y-4 ">
                    <Logo className="font-bold">
                        <div className="flex">
                        Style
                        <small className="text-sm">MoOn</small>
                        </div>
                    </Logo>
                
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cupiditate obcaecati! Tempore, repellat pariatur. Amet!</p>
                <SocialMedia className="text-gray-800/60" iconClassName="border border-gray-800/60 hover:border-gray-800 hover:text-gray-800" tooltipClassName="bg-gray-800 text-white"/>
                </div>
                
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">QuikLinks</h3>
                    <div className="flex flex-col gap-3" >
                        {
                            quikLinksData.map((item,idx)=>(
                                <Link key={idx} href={item?.href} className="text-gray-600 hover:text-gray-800 text-sm font-medium hoverEffect">{item?.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div>
                <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
                    <div className="flex flex-col gap-3" >
                        {
                            categoriesData.map((item,idx)=>(
                                <Link key={idx} href={`./category${item?.href}`} className="text-gray-600 hover:text-gray-800 text-sm font-medium hoverEffect">{item?.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div>
                <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter to recive updates and exclusive offers</p>
                <form className="space-y-3">
                    <Input type="email" placeholder="Enter your email" required className="w-full rounded-lg  focus:ring-2 focus:ring-gray-200 focus:outline-none"/>
                    <button type="submit" className="w-full bg-gray-800 text-white px-4 rounded-lg hover:bg-gray-800 transition-colors py-2">Subscribe</button>
                </form>
            </div>
            </div>
            
            </Container>
        </footer>
    );
}

export default Footer;