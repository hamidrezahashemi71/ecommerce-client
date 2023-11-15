'use client'

import Button from "@/components/ui/button"
import IconButton from "@/components/ui/iconButton"
import { Dialog } from "@headlessui/react"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import Filter from "./components/filter"

export default function MobileFilters(props: MobileFilterProps) {
  const { sizes, colors } = props
  const [open, setOpen] = useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden"
      >
        {"فیلترها"}
        <Plus
          size={20}
          className="flex items-center gap-x-2 lg:hidden"
        />
      </Button>
      <Dialog
        open={open}
        onClick={onOpen}
        as="div"
        className='relative z-40 lg:hidden'
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-40" />
        <div className="fixed inset-0 flex">
          <Dialog.Panel
            className='relative mr-auto flex h-full w-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl'
          >
            <div className="flex items-center justify-end px-4">
              <IconButton
                icon={<X size={15} onClick={onClose}/>}
              />
            </div>
            <div className="p-4">
              <Filter
                valueKey='sizeId'
                name="سایز"
                data={sizes}
              />
              <Filter
                valueKey='colorId'
                name="رنگ"
                data={colors}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
