'use client'

import Button from "@/components/ui/button"
import useCart from "@/hooks/useCart"
import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()

  if(!isMounted) return null

  return (
    <div className="mr-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="mr-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}
