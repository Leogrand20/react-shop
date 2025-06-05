import { v4 as uuidv4 } from 'uuid'

import { Goods, IGood } from '@shared/types/goods'

export const createGoods = (goods: IGood[]): Goods =>
  goods.map((good) => {
    return {
      ...good,
      id: uuidv4(),
    }
  })
