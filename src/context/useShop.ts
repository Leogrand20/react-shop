import { useContext } from 'react'

import { ShopContext, ShopContextValue } from './shop-context'

export const useShop = (): ShopContextValue => {
  const ctx = useContext(ShopContext)
  if (!ctx) {
    throw new Error('useShop must be used within <ShopProvider>')
  }
  return ctx
}
