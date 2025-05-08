import Title from "@/components/Title";
import { getAllCategories } from "@/sanity/helpers/query";
import Container from "@/components/container";
import CategoryProduct from "@/components/categoryProduct";

const CategoryPage =async ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params;
    const categories = await getAllCategories()
    return (
        <div>
           
            <Container className="py-10">
                <Title className="text-xl ">Products by Category <span className="font-bold text-green-600 capitalize tracking-wide">{slug && slug}</span></Title>
                <CategoryProduct categories={categories} slug={slug}/>
            </Container>
            
        </div>
    );
}

export default CategoryPage;