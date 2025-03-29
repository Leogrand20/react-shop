import { useContext, useEffect } from 'react'
import { ShopContext } from '../context/Context'

export const Alert = () => {
  const { closeAlert, alertName } = useContext(ShopContext)

  useEffect(() => {
    const id = setTimeout(() => {
      closeAlert()
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
