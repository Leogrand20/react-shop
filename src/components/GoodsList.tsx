import { GoodsItem } from './GoodsItem'
import { selectGoods } from '../redux/selectors/goods-selectors'
import { useAppSelector } from '../redux/store'

export const GoodsList = () => {
  const goods = useAppSelector(selectGoods)

  return (
    <div className="cards">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} />
      ))}
    </div>
  )
}
