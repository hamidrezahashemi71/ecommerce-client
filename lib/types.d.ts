interface LayoutProp {
  children: React.ReactNode
}

interface Billboard  {
  id: string
  label: string
  imageUrl: string
}

interface Category {
  id: string
  name: string
  billboard: Billboard
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface BillboardProps {
  data: Billboard
}

interface ProductListPros {
  title: string
  items: Product[]
}

interface Product {
  id: string
  category: Category
  name: string
  price: string
  isFeatured: boolean
  size: Size
  color: Color
  images: Image[]
}

interface ProductCardProps {
  data: Product
}

interface CurrencyProps {
  value?: string | number
}

interface Image {
  id: string
  url: string
}

interface Size {
  id: string
  name: string
  value: string
}

interface Color {
  id: string
  name: string
  value: string
}

