import { createContext, useReducer } from 'react'
import { reducer } from './reducer'

export const ShopContext = createContext()

const initialState = {
  goods: [],
  order: [],
  isBasketVisible: false,
  alertName: '',
}

export const ContextProvider = () => {
  value.setGoods = () => {}

  value.addItemToBasket = () => {}

  value.handleBasketVisible = () => {}

  value.clearBasket = () => {}

  value.removeItemFromBasket = () => {}

  value.increaseQuantity = () => {}

  value.decreaseQuantity = () => {}

  value.closeAlert = () => {}

  return
}
