import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { Extra } from '../../types/extra'
import { Goods, GoodsSlice } from '../../types/goods'

const initialState: GoodsSlice = {
  goods: [],
}

export const fetchGoods = createAsyncThunk<Goods, undefined, { extra: Extra }>(
  'goods/fetchGoods',
  async (_, { extra: { api } }) => {
    return await api.getAllItems()
  },
)

const goodsSlice = createSlice({
  name: 'goods',
  initialState,

  reducers: {
    setGoods: (state, { payload }) => {
      state.goods = payload
    },
  },

  extraReducers: ({ addCase }) => {
    addCase(fetchGoods.fulfilled, (state, { payload }) => {
      state.goods = payload
    })
  },
})

export const { setGoods } = goodsSlice.actions

export default goodsSlice.reducer
