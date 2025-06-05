import { useShop } from '@shared/hooks/useShop'
import { Goods } from '@shared/types/goods'

import { BasketItem } from './BasketItem'

export const BasketList = () => {
  const {
    order,
    toggleBasketVisible,
    clearBasket,
  }: {
    order: Goods
    toggleBasketVisible: () => void
    clearBasket: () => void
  } = useShop()

  const totalPrice = order.reduce(
    (acc: number, item) => acc + (item.price?.finalPrice ?? 0) * item.quantity,
    0,
  )

  return (
    <div className="basket">
      <span className="btn-close" onClick={toggleBasketVisible}>
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
