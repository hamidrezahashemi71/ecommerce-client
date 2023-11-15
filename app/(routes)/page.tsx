import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/productList";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export default async function Home() {
  const billboard = await getBillboard("2421e379-5dcb-49b9-a1e0-90ade6f28dc8")
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList
          title={"فروش ویژه"}
          items={products}
        />
      </div>
    </Container>
  )
}
