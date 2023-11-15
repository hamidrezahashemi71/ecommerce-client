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
