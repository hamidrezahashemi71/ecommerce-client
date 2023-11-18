import Currency from "@/components/ui/currency"
import IconButton from "@/components/ui/iconButton"
import useCart from "@/hooks/useCart"
import { X } from "lucide-react"
import Image from "next/image"
import { toast } from "react-hot-toast"

export default function CartItem(props: CartItemProps) {
  const { data } = props
  const cart = useCart()

  const onRemove = () => cart.removeItem(data.id)

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt="cart-product"
          className="object-cover object-center"
        />
      </div>
      <div className="relative mr-4 flex flex-1 flex-col justify-between sm:mr-6">
        <div className="absolute z-10 left-0 top-0">
          <IconButton
            onClick={onRemove}
            icon={<X size={15} />}
          />
        </div>
        <div className="relative pl-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pl-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">
              {data.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">
              {data.color.name}
            </p>
            <p className="text-gray-500 mr-4 border-r border-gray-700 pr-4">
              {data.size.value}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  )
}
