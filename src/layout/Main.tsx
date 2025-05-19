import { useEffect } from 'react'

import { getAllItems } from '../api/api'
import { Alert } from '../components/Alert'
import { BasketList } from '../components/BasketList'
import { Cart } from '../components/Cart'
import { GoodsList } from '../components/GoodsList'
import { useShop } from '../context/useShop'

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
