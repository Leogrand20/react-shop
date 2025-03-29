export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
      }

    case 'ADD_ITEM_TO_BASKET': {
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

      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      }
    }

    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketVisible: !state.isBasketVisible,
      }

    case 'CLEAR_BASKET':
      return {}

    case 'REMOVE_ITEM_FROM_BASKET':
      return {}

    case 'INCREASE_QUANTITY':
      return {}

    case 'DECREASE_QUANTITY':
      return {}

    case 'CLOSE_ALERT':
      return {}

    default:
      return
  }
}
