import { useContext } from 'react'

import { ShopContext } from './shop-context'
import { ShopContextValue } from './shop-context'

export const useShop = (): ShopContextValue => {
  const ctx = useContext(ShopContext)
  if (!ctx) {
    throw new Error('useShop must be used within <ShopProvider>')
  }
  return ctx
}
