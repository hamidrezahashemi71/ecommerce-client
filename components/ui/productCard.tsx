'use client'

import Image from "next/image"
import IconButton from "@/components/ui/iconButton"
import { Expand, ShoppingCart } from "lucide-react"
import Currency from "@/components/ui/currency"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from 'react'
import usePreviewModal from "@/hooks/usePreviewModal"
import useCart from "@/hooks/useCart"

export default function ProductCard(props: ProductCardProps) {
  const { data } = props
  const { push } = useRouter()
  const previewModal = usePreviewModal()
  const cart = useCart()

  const handleExpandClick = () => push(`/product/${data?.id}`)

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(data)
  }

  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-200 relative">
        <Image
          className="aspect-square object-cover rounded-md"
          alt="product-image"
          src={data?.images?.[0]?.url}
          fill
        />
        <div
          className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5"
          onClick={handleExpandClick}
        >
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
              className=""
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              className=""
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category?.name}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}
