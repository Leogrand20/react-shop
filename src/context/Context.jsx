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

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data })
  }

  value.addItemToBasket = () => {}

  value.handleBasketVisible = () => {}

  value.clearBasket = () => {}

  value.removeItemFromBasket = () => {}

  value.increaseQuantity = () => {}

  value.decreaseQuantity = () => {}

  value.closeAlert = () => {}

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
