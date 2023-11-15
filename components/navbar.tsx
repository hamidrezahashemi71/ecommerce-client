import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from './mainNav'
import getCategories from '@/actions/getCategories'
import NavbarActions from './navbarActions'

export default async function Navbar() {
  const categories = await getCategories()

  return (
    <nav className='border-b'>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link
            href={'/'}
            className='mr-4 flex lg:mr-0 gap-x-2'
          >
            <p className='font-bold text-xl'>
              {"فروشگاه"}
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </nav>
  )
}
