import { useContext } from 'react'
import { ShopContext } from '../context/Context'
import { BasketItem } from './BasketItem'

export const BasketList = () => {
  const {} = useContext(ShopContext)

  return (
    <div className="basket">
      <span className="btn-close">&times;</span>
      <h1 className="text-center text-3xl">Корзина товаров</h1>
      {order.length ? (
        order.map((item, id) => <BasketItem />)
      ) : (
        <span className="mt-2 block text-center">Корзина пуста</span>
      )}
      <span className="mt-3 block text-xl">Общая стоимость товаров: руб.</span>

      <button type="button" className="btn-clear">
        Очистить корзину
      </button>
    </div>
  )
}
