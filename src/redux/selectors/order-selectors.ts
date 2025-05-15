import { RootState } from '../store'

export const selectOrder = (state: RootState) => state.order.order
export const selectToggleBasketVisible = (state: RootState) =>
  state.order.isBasketVisible
export const selectAlertName = (state: RootState) => state.order.alertName
