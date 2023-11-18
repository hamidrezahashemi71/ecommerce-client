'use client'

import Button from "@/components/ui/button"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/useCart"
import axios from "axios"
import { useSearchParams, useServerInsertedHTML } from "next/navigation"
import { useEffect } from "react"
import { toast } from "react-hot-toast"

export default function Summary() {
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)
  const searchParams = useSearchParams()

  useEffect(() => {
    if(searchParams.get('success')) {
      toast.success("پرداخت انجام شد.")
      removeAll()
    }

    if(searchParams.get('canceled')) {
      toast.error("مشکلی پیش آمد.")
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  const onCheckout = async() => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    })

    window.location = response.data.url
  }

  return (
    <div className="mt-16 bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">
        {"خلاصه سفارش"}
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            {"مجموع خرید"}
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        className="w-full mt-6"
      >
        {"پرداخت"}
      </Button>
    </div>
  )
}
