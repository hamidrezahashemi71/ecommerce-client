'use client'

import Button from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"

export default function Filter(props: FilterProps) {
  const { data, name, valueKey } = props
  const searchParams = useSearchParams()
  const { push } = useRouter()
  const selectedValue = searchParams.get(valueKey)

  const onClick = (id: string) => {
    const currentQuery = qs.parse(searchParams.toString())
    const query = {
      ...currentQuery,
      [valueKey]: id
    }

    if(currentQuery[valueKey] === id) {
      query[valueKey] = null
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true })

    push(url)
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {name}
      </h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div
            key={filter.id}
            className="flex items-center"
          >
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
