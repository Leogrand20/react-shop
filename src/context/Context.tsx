import { createContext, useReducer } from 'react'

import { reducer } from './reducer'
import { Goods } from '../types/goods'

// interface State {
//   goods: []
//   order: []
//   isBasketVisible: false
//   alertName: ''
// }

const initialState = {
  goods: [],
  order: [],
  isBasketVisible: false,
  alertName: '',
}

export const ShopContext = createContext()

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data })
  }

  value.addItemToBasket = (item) => {
    dispatch({ type: 'ADD_ITEM_TO_BASKET', payload: item })
  }

  value.toggleBasketVisible = () => {
    dispatch({ type: 'TOGGLE_BASKET' })
  }

  value.clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' })
  }

  value.removeItemFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_BASKET', payload: { id: itemId } })
  }

  value.increaseQuantity = (itemId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id: itemId } })
  }

  value.decreaseQuantity = (itemId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id: itemId } })
  }

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
