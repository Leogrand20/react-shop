import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/store'
import { setCloseAlert } from '../redux/slices/orderSlice'
import { selectAlertName } from '../redux/selectors/order-selectors'

export const Alert = () => {
  const alertName = useAppSelector(selectAlertName)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setCloseAlert())
    }, 2500)

    return () => clearTimeout(id)
  }, [alertName])

  return (
    <div className="alert">
      <p>
        <strong>{alertName}</strong> добавлен в корзину
      </p>
    </div>
  )
}
