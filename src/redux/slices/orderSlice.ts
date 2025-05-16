import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGood, OrderSlice } from '../../types/goods'

const initialState: OrderSlice = {
  order: [],
  isBasketVisible: false,
  alertName: '',
}

const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {
    setAddItemToBasket: (state, { payload }: PayloadAction<IGood>) => {
      const index = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id,
      )

      if (index < 0) {
        const newOrderItem = {
          ...payload,
          quantity: 1,
        }

        state.order = [...state.order, newOrderItem]
      } else {
        state.order = state.order.map((orderItem, id) => {
          if (id === index) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else return orderItem
        })
      }

      state.alertName = payload.name
    },

    setToggleBasketVisible: (state) => {
      state.isBasketVisible = !state.isBasketVisible
    },

    setClearBasket: (state) => {
      state.order = []
    },

    setRemoveItemFromBasket: (state, { payload }: PayloadAction<string>) => {
      state.order = state.order.filter(({ id }) => id !== payload)
    },

    setIncreaseQuantity: (state, { payload }: PayloadAction<string>) => {
      state.order = state.order.map((orderItem) => {
        if (orderItem.id === payload) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem
        }
      })
    },

    setDecreaseQuantity: (state, { payload }) => {
      state.order = state.order.map((orderItem) => {
        if (orderItem.id === payload) {
          const newOrderItem = orderItem.quantity - 1

          return {
            ...orderItem,
            quantity: newOrderItem ? newOrderItem : 0,
          }
        } else {
          return orderItem
        }
      })
    },

    setCloseAlert: (state) => {
      state.alertName = ''
    },
  },
})

export const {
  setAddItemToBasket,
  setToggleBasketVisible,
  setClearBasket,
  setCloseAlert,
  setRemoveItemFromBasket,
  setIncreaseQuantity,
  setDecreaseQuantity,
} = orderSlice.actions

export default orderSlice.reducer
