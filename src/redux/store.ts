import { configureStore } from '@reduxjs/toolkit'

import goodsReducer from './slices/goodsSlice'
import orderReducer from './slices/orderSlice'

import * as api from '../api/api'

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    order: orderReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
})
