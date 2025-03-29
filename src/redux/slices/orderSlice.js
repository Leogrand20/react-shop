import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  order: [],
  isBasketVisible: false,
  alertName: '',
}

const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {
    setAddItemToBasket: (state, { payload }) => {
      const index = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id,
      )

      if (index < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }

        state.order = [...state.order, newItem]
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

    setCloseAlert: (state) => {
      state.alertName = ''
    },
  },
})

export const { setAddItemToBasket, setToggleBasketVisible, setCloseAlert } =
  orderSlice.actions

export const selectOrder = (state) => state.order.order
export const selectToggleBasketVisible = (state) => state.order.isBasketVisible
export const selectAlertName = (state) => state.order.alertName

export default orderSlice.reducer
