import { Reducer } from 'react'

import { ShopAction, ShopState } from './Context'

export const shopReducer: Reducer<ShopState, ShopAction> = (
  state: ShopState,
  action: ShopAction,
): ShopState => {
  switch (action.type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: action.payload || [],
      }

    case 'ADD_ITEM_TO_BASKET': {
      const itemId = state.order.findIndex(
        (orderItem) => orderItem.id === action.payload.id,
      )

      let newOrder = null

      if (itemId < 0) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        }

        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((orderItem, id) => {
          if (id === itemId) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        })
      }

      return {
        ...state,
        order: newOrder,
        alertName: action.payload.name,
      }
    }

    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketVisible: !state.isBasketVisible,
      }

    case 'CLEAR_BASKET':
      return {
        ...state,
        order: [],
      }

    case 'REMOVE_ITEM_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(({ id }) => id !== action.payload),
      }

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === action.payload) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        }),
      }

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === action.payload) {
            const newOrderItem = orderItem.quantity - 1

            return {
              ...orderItem,
              quantity: newOrderItem > 0 ? newOrderItem : 0,
            }
          } else {
            return orderItem
          }
        }),
      }

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      }

    default:
      return state
  }
}
