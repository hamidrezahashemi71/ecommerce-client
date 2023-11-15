import getCategory from "@/actions/getCategory"
import getColors from "@/actions/getColors"
import getProducts from "@/actions/getProducts"
import getSizes from "@/actions/getSizes"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"
import Filter from "./components/Filter"
import NoResults from "@/components/ui/noResults"
import ProductCard from "@/components/ui/productCard"

export default async function Category(props: CategoryPageProps) {
  const { params, searchParams } = props

  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  })

  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <div className="bg-white">
      <Container>
        <Billboard
          data={category.billboard}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* TODO: add mobile filters */}
            <div className="hidden lg:block">
              <Filter
                valueKey='sizeId'
                name="سایز"
                data={sizes}
              />
              <Filter
                valueKey='colorId'
                name="رنگ"
                data={colors}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {!products.length && <NoResults text="محصولی وجود ندارد" />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    data={product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
