import { v4 as uuidv4 } from 'uuid'

export const createGoods = (goods) =>
  goods.map((good) => {
    return {
      ...good,
      id: uuidv4(),
    }
  })
