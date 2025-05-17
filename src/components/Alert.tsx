import { useEffect } from 'react'

import { useShop } from '../context/Context'

export const Alert = () => {
  const { alertName, closeAlert } = useShop()

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
