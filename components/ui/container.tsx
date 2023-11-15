
export default function Container(props: LayoutProp) {
  const { children } = props

  return (
    <div className="mx-auto max-w-7xl">
      {children}
    </div>
  )
}
