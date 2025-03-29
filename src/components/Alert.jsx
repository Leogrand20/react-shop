import { useContext, useEffect } from 'react'
import { ShopContext } from '../context/Context'

export const Alert = () => {
  const {} = useContext(ShopContext)

  useEffect(() => {}, [])

  return (
    <div className="alert">
      <p>
        <strong></strong> добавлен в корзину
      </p>
    </div>
  )
}
