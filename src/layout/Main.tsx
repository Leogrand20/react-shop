import { useEffect } from 'react'

import { getAllItems } from '../api/api'
import { useShop } from '../context/Context'

import { GoodsList } from '../components/GoodsList'
import { Cart } from '../components/Cart'
import { BasketList } from '../components/Basketlist'
import { Alert } from '../components/Alert'

export const Main = () => {
  const { setGoods, isBasketVisible, alertName } = useShop()

  useEffect(() => {
    getAllItems().then((data) => {
      setGoods(data)
    })
  }, [])

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
