import { useContext } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'

import { ShopContext } from '../context/Context'

export const Cart = () => {
  const { order, toggleBasketVisible } = useContext(ShopContext)

  const quantity = order.length

  return (
    <div className="cart" onClick={toggleBasketVisible}>
      <FaCartArrowDown />

      {quantity && <span className="cart-quantity">{quantity}</span>}
    </div>
  )
}
