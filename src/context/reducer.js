export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
      }

    case 'ADD_ITEM_TO_BASKET': {
    }

    case 'TOGGLE_BASKET':
      return {}

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
