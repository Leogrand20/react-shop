import { FaCartArrowDown } from 'react-icons/fa'

import { useShop } from '../context/Context'

export const Cart = () => {
  const { order, toggleBasketVisible } = useShop()

  const quantity = order.length

  return (
    <div className="cart" onClick={toggleBasketVisible}>
      <FaCartArrowDown />

      {quantity && <span className="cart-quantity">{quantity}</span>}
    </div>
  )
}
