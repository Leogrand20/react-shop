import axios from 'axios'

import { Goods } from '../types/goods'
import { createGoods } from '../utils/createGoods'
import { API_KEY,API_URL } from './config'

export const getAllItems = async (): Promise<Goods> => {
  const { data } = await axios(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })

  return createGoods(data.shop)
}
