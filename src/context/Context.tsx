import {
  createContext,
  Reducer,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

import { Goods, IGood } from '../types/goods'
// import { shopReducer } from './reducer'

/* ---------- 1. Типы состояния ---------- */

export interface ShopState {
  goods: Goods
  order: Goods
  isBasketVisible: boolean
  alertName: string
}

const initialState: ShopState = {
  goods: [],
  order: [],
  isBasketVisible: false,
  alertName: '',
}

/* ---------- 2. Типы действий (Action) ---------- */

export type ShopAction =
  | { type: 'SET_GOODS'; payload: Goods }
  | { type: 'ADD_ITEM_TO_BASKET'; payload: IGood }
  | { type: 'TOGGLE_BASKET' }
  | { type: 'CLEAR_BASKET' }
  | { type: 'REMOVE_ITEM_FROM_BASKET'; payload: string }
  | { type: 'INCREASE_QUANTITY'; payload: string }
  | { type: 'DECREASE_QUANTITY'; payload: string }
  | { type: 'CLOSE_ALERT' }

/* ---------- 3. Редьюсер ---------- */

const shopReducer: Reducer<ShopState, ShopAction> = (
  state: ShopState,
  action: ShopAction,
): ShopState => {
  switch (action.type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: action.payload || [],
      }

    case 'ADD_ITEM_TO_BASKET': {
      const itemId = state.order.findIndex(
        (orderItem) => orderItem.id === action.payload.id,
      )

      let newOrder = null

      if (itemId < 0) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        }

        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((orderItem, id) => {
          if (id === itemId) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        })
      }

      return {
        ...state,
        order: newOrder,
        alertName: action.payload.name,
      }
    }

    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketVisible: !state.isBasketVisible,
      }

    case 'CLEAR_BASKET':
      return {
        ...state,
        order: [],
      }

    case 'REMOVE_ITEM_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(({ id }) => id !== action.payload),
      }

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === action.payload) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        }),
      }

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === action.payload) {
            const newOrderItem = orderItem.quantity - 1

            return {
              ...orderItem,
              quantity: newOrderItem > 0 ? newOrderItem : 0,
            }
          } else {
            return orderItem
          }
        }),
      }

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      }

    default:
      return state
  }
}

/* ---------- 4. Публичный интерфейс контекста ---------- */

interface ShopContextValue extends ShopState {
  setGoods: (data: Goods) => void
  addItemToBasket: (item: IGood) => void
  toggleBasketVisible: () => void
  clearBasket: () => void
  removeItemFromBasket: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  closeAlert: () => void
}

/* ---------- 5. Создание контекста ---------- */
export const ShopContext = createContext<ShopContextValue | null>(null)

/* ---------- 6. Провайдер ---------- */

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState)

  /* --- Action-creator’ы --- */

  const setGoods = (data: Goods) => {
    dispatch({ type: 'SET_GOODS', payload: data })
  }

  const addItemToBasket = (itemId: IGood) => {
    dispatch({ type: 'ADD_ITEM_TO_BASKET', payload: itemId })
  }

  const toggleBasketVisible = () => {
    dispatch({ type: 'TOGGLE_BASKET' })
  }

  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' })
  }

  const removeItemFromBasket = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_BASKET', payload: itemId })
  }

  const increaseQuantity = (itemId: string) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: itemId })
  }

  const decreaseQuantity = (itemId: string) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: itemId })
  }

  const closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }

  /* --- Значение контекста --- */
  const value: ShopContextValue = {
    ...state,
    setGoods,
    addItemToBasket,
    toggleBasketVisible,
    clearBasket,
    removeItemFromBasket,
    increaseQuantity,
    decreaseQuantity,
    closeAlert,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

/* ---------- 7. Хук-обёртка (удобно, безопасно) ---------- */

export const useShop = (): ShopContextValue => {
  const ctx = useContext(ShopContext)

  if (!ctx) {
    throw new Error('useShop must be used within <ShopProvider>')
  }

  return ctx
}
