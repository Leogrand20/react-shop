import { createContext, useReducer } from 'react'

import { reducer } from './reducer'

export const ShopContext = createContext()

const initialState = {
  goods: [],
  order: [],
  isBasketVisible: false,
  alertName: '',
}

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.removeItemFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_BASKET', payload: itemId })
  }

  value.increaseQuantity = (itemId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: itemId })
  }

  value.decreaseQuantity = (itemId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: itemId })
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
