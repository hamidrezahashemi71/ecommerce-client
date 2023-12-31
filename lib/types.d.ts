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

interface ProductPageProps {
  params: {
    productId: string
  }
}

interface GalleryProps {
  images: Image[]
}

interface GalleryTabProps {
  image: Image
}

interface InfoProps {
  data: Product
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

interface CategoryPageProps {
  params: {
    categoryId: string
  },
  searchParams: {
    colorId: string
    sizeId: string
  }
}

interface FilterProps {
  data: (Size | Color)[]
  name: string
  valueKey: string
}

interface MobileFilterProps {
  sizes: Size[]
  colors: Color[]
}

interface PreviewModalStore {
  isOpen: boolean
  data?: Product
  onOpen: (data: Product) => void
  onClose: () => void
}

interface CartStore {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

interface CartItemProps {
  data: Product
}
