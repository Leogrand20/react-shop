import { GoodsItem } from './GoodsItem'
import { useShop } from '../context/useShop'

export const GoodsList = () => {
  const { goods } = useShop()

  return (
    <div className="cards">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} />
      ))}
    </div>
  )
}
