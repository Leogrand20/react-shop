import { useEffect, useContext } from 'react'
import { ShopContext } from '../context/Context'
import { getData } from '../../api'
import { GoodsList } from '../components/GoodsList'
import { Cart } from '../components/Cart'
import { BasketList } from '../components/Basketlist'
import { Alert } from '../components/Alert'

export const Main = () => {
  const {} = useContext(ShopContext)

  useEffect(() => {}, [])

  return (
    <main className="main">
      <div className="main__container"></div>
    </main>
  )
}
