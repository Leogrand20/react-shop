import axios from 'axios'

import { API_URL, API_KEY } from './config'
import { createGoods } from './src/utils/createGoods'

export const getAllItems = async () => {
  const { data } = await axios(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })

  return createGoods(data.shop)
}
