'use client'

import { formatter } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function Currency(props: CurrencyProps) {
  const { value } = props
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null

  return (
    <div className="font-semibold">
      {formatter.format(Number(value))}
    </div>
  )
}
