import { useEffect } from 'react'

import { useShop } from '@shared/hooks/useShop'

export const Alert = () => {
  const { alertName, closeAlert } = useShop()

  useEffect(() => {
    const id = setTimeout(() => {
      closeAlert()
    }, 2500)

    return () => clearTimeout(id)
  }, [alertName, closeAlert])

  return (
    <div className="alert">
      <p>
        <strong>{alertName}</strong> добавлен в корзину
      </p>
    </div>
  )
}
