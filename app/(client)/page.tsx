import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/container";
import ProductGrid from "@/components/productGrid";


export default function Home() {
  return (
    <>
    <Container className="py-10">
      <HomeBanner/>
      <ProductGrid/>
    </Container>
    </>
  );
}
