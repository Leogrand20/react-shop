import { useContext } from 'react'
import { ShopContext } from '../context/Context'
import { GoodsItem } from './GoodsItem'

export const GoodsList = () => {
  const {} = useContext(ShopContext)

  return (
    <div className="cards">
      {goods.map((good, id) => (
        <GoodsItem />
      ))}
    </div>
  )
}
