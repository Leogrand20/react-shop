import { useEffect, useContext } from 'react'

import { ShopContext } from '../context/Context'
import { getAllItems } from '../../api'
import { GoodsList } from '../components/GoodsList'
import { Cart } from '../components/Cart'
import { BasketList } from '../components/Basketlist'
import { Alert } from '../components/Alert'

export const Main = () => {
  const { setGoods, isBasketVisible } = useContext(ShopContext)

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

        <GoodsList />
      </div>
    </main>
  )
}
