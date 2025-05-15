import axios from 'axios'

import { API_URL, API_KEY } from './config'
import { createGoods } from '../utils/createGoods'
import { Goods } from '../types/goods'

export const getAllItems = async (): Promise<Goods> => {
  const { data } = await axios(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })

  return createGoods(data.shop)
}
