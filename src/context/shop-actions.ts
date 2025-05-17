import { Goods, IGood } from '../types/goods'

export type ShopAction =
  | { type: 'SET_GOODS'; payload: Goods }
  | { type: 'ADD_ITEM_TO_BASKET'; payload: IGood }
  | { type: 'TOGGLE_BASKET' }
  | { type: 'CLEAR_BASKET' }
  | { type: 'REMOVE_ITEM_FROM_BASKET'; payload: string }
  | { type: 'INCREASE_QUANTITY'; payload: string }
  | { type: 'DECREASE_QUANTITY'; payload: string }
  | { type: 'CLOSE_ALERT' }
