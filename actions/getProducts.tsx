import qs from "query-string"

interface Query {
  categoryId? : string
  colorId? : string
  sizeId?: string
  isFeatured?: boolean
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async(query: Query) : Promise<Product[]> => {

  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    }
  })

  const response = await fetch(URL)
  return response.json()
}

export default getProducts
