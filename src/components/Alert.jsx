import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCloseAlert, selectAlertName } from '../redux/slices/orderSlice'

export const Alert = () => {
  const alertName = useSelector(selectAlertName)
  const dispatch = useDispatch()

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
