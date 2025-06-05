import { useEffect } from 'react'

import { useShop } from '@shared/hooks/useShop'
import { Alert } from '@shared/ui/Alert/Alert'
import { BasketList } from '@entities/cart/ui/BasketList'
import { getAllItems } from '@entities/product/api/api'
import { GoodsList } from '@entities/product/ui/GoodsList'
import { Cart } from '@features/cart/ui/Cart'

export const Main = () => {
  const { setGoods, isBasketVisible, alertName } = useShop()

  useEffect(() => {
    getAllItems().then((data) => {
      setGoods(data)
    })
  }, [setGoods])

  return (
    <main className="main">
      <div className="main__container">
        <Cart />

        {isBasketVisible && <BasketList />}

        {alertName && <Alert />}

        <GoodsList />
      </div>
    </main>
  )
}
