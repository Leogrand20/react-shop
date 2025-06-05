import { createContext } from 'react'

import { Goods, IGood, ShopState } from '@shared/types/goods'

export const ShopContext = createContext<ShopContextValue | null>(null)

export interface ShopContextValue extends ShopState {
  setGoods: (data: Goods) => void
  addItemToBasket: (item: IGood) => void
  toggleBasketVisible: () => void
  clearBasket: () => void
  removeItemFromBasket: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  closeAlert: () => void
}
