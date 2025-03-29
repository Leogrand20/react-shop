import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllItems } from '../../api'
import { GoodsList } from '../components/GoodsList'
import { Cart } from '../components/Cart'
import { BasketList } from '../components/Basketlist'
import { Alert } from '../components/Alert'

import { setGoods } from '../redux/slices/goodsSlice'
import { selectToggleBasketVisible } from '../redux/slices/orderSlice'

export const Main = () => {
  const dispatch = useDispatch()
  const isBasketVisible = useSelector(selectToggleBasketVisible)

  useEffect(() => {
    getAllItems().then((data) => {
      dispatch(setGoods(data))
    })
  }, [])

  return (
    <main className="main">
      <div className="main__container">
        <Cart />

        {isBasketVisible && <BasketList />}

        {/* {alertName && <Alert />} */}

        <GoodsList />
      </div>
    </main>
  )
}
