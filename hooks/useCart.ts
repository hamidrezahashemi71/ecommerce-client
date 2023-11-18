import toast from "react-hot-toast/headless"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],

    addItem: (data: Product) => {
      const currentItems = get().items
      const existingItem = currentItems.find((item) => item.id === data.id)

      if(existingItem) {
        return toast('این آیتم در سبد خرید وجود دارد.')
      }

      set({ items: [...get().items, data]})
      toast.success("آیتم به سبد خرید اضافه شد.")
    },

    removeItem: (id: string) => {
      set({items: [...get().items.filter((item) => item.id !== id)]})
      toast.success("آیتم حذف شد.")
    },

    removeAll: () => {
      set({ items: [] })
    }
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
)

export default useCart
