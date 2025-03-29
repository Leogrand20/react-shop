import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  goods: [],
}

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  async (_, { extra: api }) => {
    api.getAllItems()
    try {
    } catch (error) {}
  },
)

const goodsSlice = createSlice({
  name: 'goods',
  initialState,

  reducers: {
    setGoods: (state, { payload }) => {
      state.goods = [...payload]
    },
  },

  extraReducers: ({ addCase }) => {
    addCase(fetchGoods.fulfilled, (state, { payload }) => {
      state.goods = [...payload]
    })
  },
})

export const { setGoods } = goodsSlice.actions

export const selectGoods = (state) => state.goods.goods

export default goodsSlice.reducer
