'use client'

import Container from "@/components/ui/container"
import NoResults from "@/components/ui/noResults"
import useCart from "@/hooks/useCart"
import { useEffect, useState } from "react"
import CartItem from "./components/cartItem"
import Summary from "./components/summary"

export default function Cart() {
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">
            {"سبد خرید"}
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {!cart.items.length && <NoResults text="سبد خرید خالی است." /> }
              <ul>
                {cart.items.map((item) => (
                  <CartItem
                    key={item.id}
                    data={item}
                  />
                ))}
              </ul>
            </div>
            {cart.items.length && <Summary />}
          </div>
        </div>
      </Container>
    </div>
  )
}
