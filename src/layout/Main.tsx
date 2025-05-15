import { useEffect } from 'react'

import { getAllItems } from '../api/api'
import { GoodsList } from '../components/GoodsList'
import { Cart } from '../components/Cart'
import { BasketList } from '../components/Basketlist'
import { Alert } from '../components/Alert'

import { useAppDispatch, useAppSelector } from '../redux/store'
import { setGoods } from '../redux/slices/goodsSlice'
import {
  selectAlertName,
  selectToggleBasketVisible,
} from '../redux/selectors/order-selectors'

export const Main = () => {
  const dispatch = useAppDispatch()
  const isBasketVisible = useAppSelector(selectToggleBasketVisible)
  const alertName = useAppSelector(selectAlertName)

  useEffect(() => {
    getAllItems().then((data) => {
      dispatch(setGoods(data))
    })
  }, [dispatch])

  return (
    <main className="main">
      <div className="main__container">
        <Cart />

        {isBasketVisible && <BasketList />}

        {alertName && <Alert />}

        <GoodsList />
      </div>
    </main>
  )
}
