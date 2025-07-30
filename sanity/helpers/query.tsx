import { defineQuery } from "next-sanity"
import { sanityFetch } from "../lib/live";

export const getProductBySlug=async(slug:string)=>{
    const PRODUCT_BY_SLUG_QUERY=defineQuery(`*[_type == 'product' && slug.current == $slug][0] `);
    try{
        console.log("Query sent to Sanity:", PRODUCT_BY_SLUG_QUERY);


        const product = await sanityFetch({
            query:PRODUCT_BY_SLUG_QUERY,
            params:{
                slug,
            },
        });

        return product?.data || null

    }catch(err){
        console.error('error fetching product by slug:',err)
    }
}
export const getAllCategories = async()=>{
    const CATEGORIES_QUERY = defineQuery(`*[_type == 'category'] | order(title asc)`);

    try{
        const categories = await sanityFetch({
            query:CATEGORIES_QUERY,
        });
        return categories.data || [];
    }catch(err){
        console.log('error fetching all categories',err);
        return [];
    }
}