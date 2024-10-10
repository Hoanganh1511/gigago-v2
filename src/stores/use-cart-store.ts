import { create } from 'zustand'
interface Product {}
interface CartStore {
  cart: Product[]
  totalItems: number
  totalPrice: number
  isOpen?: boolean
  isSheetLoaded?: boolean

  openCart?: () => void
  closeCart?: () => void
  preloadSheet?: () => void
  refresh?: () => void
  setCart?: () => void
}

interface Actions {
  addToCart: () => void
  removeFromCart: () => void
}

const INITIAL_STATE: CartStore = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
}

export const useCartStore = create<CartStore & Actions>(() => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: () => {
    // product?: Product
    // something
  },
  removeFromCart: () => {
    // product?: Product
    // something
    alert('Delete item in cart')
  },
}))
