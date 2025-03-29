import { useSelector } from 'react-redux'

import { GoodsItem } from './GoodsItem'
import { selectAll } from '../redux/slices/goodsSlice'

export const GoodsList = () => {
  const goods = useSelector(selectAll)

  return (
    <div className="cards">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} />
      ))}
    </div>
  )
}
