import { useContext } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { ShopContext } from '../context/Context'

export const Cart = () => {
  // const { order, handleBasketVisible } = useContext(ShopContext)

  // const quantity = order.length

  return (
    <div className="cart">
      <FaCartArrowDown />

      {<span className="cart-quantity"></span>}
    </div>
  )
}
