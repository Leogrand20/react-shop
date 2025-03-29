import { API_KEY, API_URL } from './config'

export const getData = async () => {
  const res = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })
  const json = await res.json()

  return json
}
