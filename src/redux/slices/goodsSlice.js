import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'

const goodsAdapter = createEntityAdapter()

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
  initialState: goodsAdapter.getInitialState(),

  reducers: {
    setGoods: (state, { payload }) => {
      goodsAdapter.setAll(state, [...payload])
    },
  },

  extraReducers: ({ addCase }) => {
    addCase(fetchGoods.fulfilled, (state, { payload }) => {
      goodsAdapter.setAll(state, [...payload])
    })
  },
})

export const { setGoods } = goodsSlice.actions

export const { selectAll } = goodsAdapter.getSelectors((state) => state.goods)

export default goodsSlice.reducer
