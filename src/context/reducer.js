export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === payload) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          }
        }),
      }

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === payload) {
            const newOrderItem = orderItem.quantity - 1

            return {
              ...orderItem,
              quantity: newOrderItem ? newOrderItem : 0,
            }
          }
        }),
      }

    default:
      return
  }
}
