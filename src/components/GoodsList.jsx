import { useSelector } from 'react-redux'

import { GoodsItem } from './GoodsItem'
import { selectGoods } from '../redux/slices/goodsSlice'

export const GoodsList = () => {
  const goods = useSelector(selectGoods)

  return (
    <div className="cards">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} />
      ))}
    </div>
  )
}
