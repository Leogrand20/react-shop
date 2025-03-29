import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  order: [],
  alertName: '',
}

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  async (_, { extra: api }) => {
    api.getAllItems()
    try {
    } catch (error) {}
  },
)

const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {
    setAddItemToBasket: (state, { payload }) => {
      const index = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id,
      )

      let newOrder = null

      if (index < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }

        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((orderItem, id) => {
          if (id === index) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else return orderItem
        })
      }

      state.order = [...newOrder]
      state.alertName = payload.name
    },

    setCloseAlert: (state) => {
      state.alertName = ''
    },
  },

  extraReducers: ({ addCase }) => {
    addCase(fetchGoods.fulfilled, (state, { payload }) => {
      state.goods = [...payload]
    })
  },
})

export const { setAddItemToBasket, setCloseAlert } = orderSlice.actions

export const selectOrder = (state) => state.order.order
export const selectAlertName = (state) => state.order.alertName

export default orderSlice.reducer
