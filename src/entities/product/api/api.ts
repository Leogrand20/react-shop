import axios from 'axios'

import { API_KEY, API_URL } from '@shared/api/config'
import { Goods } from '@shared/types/goods'

import { createGoods } from '../lib/createGoods'

export const getAllItems = async (): Promise<Goods> => {
  const { data } = await axios(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })

  return createGoods(data.shop)
}
