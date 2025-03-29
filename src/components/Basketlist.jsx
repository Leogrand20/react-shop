import { useContext } from 'react'
import { ShopContext } from '../context/Context'
import { BasketItem } from './BasketItem'

export const BasketList = () => {
  const { order, handleBasketVisible, clearBasket } = useContext(ShopContext)

  const totalPrice = order.reduce(
    (acc, { price, quantity }) => (acc += price.finalPrice * quantity),
    0,
  )

  return (
    <div className="basket">
      <span className="btn-close" onClick={handleBasketVisible}>
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

      <button type="button" className="btn-clear" onClick={clearBasket}>
        Очистить корзину
      </button>
    </div>
  )
}
