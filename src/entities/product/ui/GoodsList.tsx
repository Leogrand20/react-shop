import { useShop } from '@shared/hooks/useShop'

import { GoodsItem } from './GoodsItem'

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
