import { ReactNode, useReducer, useMemo, useCallback } from 'react'

import { shopReducer } from './reducer'
import { ShopContext, ShopContextValue } from './shop-context'
import { Goods, IGood } from '../types/goods'
import { ShopState } from '../types/goods'

const initialState: ShopState = {
  goods: [],
  order: [],
  isBasketVisible: false,
  alertName: '',
}

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState)

  const setGoods = useCallback(
    (data: Goods) => dispatch({ type: 'SET_GOODS', payload: data }),
    [],
  )

  const addItemToBasket = (item: IGood) =>
    dispatch({ type: 'ADD_ITEM_TO_BASKET', payload: item })

  const toggleBasketVisible = () => dispatch({ type: 'TOGGLE_BASKET' })

  const clearBasket = () => dispatch({ type: 'CLEAR_BASKET' })

  const removeItemFromBasket = (id: string) =>
    dispatch({ type: 'REMOVE_ITEM_FROM_BASKET', payload: id })

  const increaseQuantity = (id: string) =>
    dispatch({ type: 'INCREASE_QUANTITY', payload: id })

  const decreaseQuantity = (id: string) =>
    dispatch({ type: 'DECREASE_QUANTITY', payload: id })

  const closeAlert = useCallback(() => dispatch({ type: 'CLOSE_ALERT' }), [])

  const value: ShopContextValue = useMemo(
    () => ({
      ...state,
      setGoods,
      addItemToBasket,
      toggleBasketVisible,
      clearBasket,
      removeItemFromBasket,
      increaseQuantity,
      decreaseQuantity,
      closeAlert,
    }),
    [state, setGoods, closeAlert],
  )

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
