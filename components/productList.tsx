import NoResults from "./ui/noResults"
import ProductCard from "./ui/productCard"

export default function ProductList(props: ProductListPros) {
  const { title, items } = props

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">
        {title}
      </h3>
      {!items.length && <NoResults text={'در حال حاضر فروش ویژه نداریم'} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}
