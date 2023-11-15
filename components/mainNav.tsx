'use client'
import { cn } from "@/lib/utils"
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"

interface MainNavProps {
  data: Category[]
}

export default function MainNav(props: MainNavProps) {
  const { data } = props
  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <nav className="mx-6 flex items-center gap-x-4 lg:gap-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm hover:text-primary transition-colors",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
