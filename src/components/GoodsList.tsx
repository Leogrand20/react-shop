import { useContext } from 'react'

import { GoodsItem } from './GoodsItem'
import { ShopContext } from '../context/Context'

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
