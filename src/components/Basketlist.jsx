import { useDispatch, useSelector } from 'react-redux'

import { BasketItem } from './BasketItem'
import {
  selectOrder,
  setToggleBasketVisible,
  setClearBasket,
} from '../redux/slices/orderSlice'

export const BasketList = () => {
  const order = useSelector(selectOrder)
  const dispatch = useDispatch()

  const totalPrice = order.reduce(
    (acc, { price, quantity }) => (acc += price.finalPrice * quantity),
    0,
  )

  return (
    <div className="basket">
      <span
        className="btn-close"
        onClick={() => dispatch(setToggleBasketVisible())}
      >
        &times;
      </span>
      <h1 className="text-center text-3xl">Корзина товаров</h1>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <span className="mt-2 block text-center">Корзина пуста</span>
      )}
      <span className="mt-3 block text-xl">
        Общая стоимость товаров: {totalPrice} руб.
      </span>

      <button
        type="button"
        className="btn-clear"
        onClick={() => dispatch(setClearBasket())}
      >
        Очистить корзину
      </button>
    </div>
  )
}
