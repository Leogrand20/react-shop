import { configureStore } from '@reduxjs/toolkit'

import goodsReducer from './slices/goodsSlice'

import * as api from '../../api'

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
})
