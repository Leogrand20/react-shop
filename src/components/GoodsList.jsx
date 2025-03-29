import { useContext } from 'react'

import { ShopContext } from '../context/Context'
import { GoodsItem } from './GoodsItem'

export const GoodsList = () => {
  const { goods } = useContext(ShopContext)

  return (
    <div className="cards">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} />
      ))}
    </div>
  )
}
