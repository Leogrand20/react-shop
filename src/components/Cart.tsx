import { useDispatch, useSelector } from 'react-redux'
import { FaCartArrowDown } from 'react-icons/fa'

import { selectOrder, setToggleBasketVisible } from '../redux/slices/orderSlice'

export const Cart = () => {
  const order = useSelector(selectOrder)
  const dispatch = useDispatch()

  const quantity = order.length

  return (
    <div className="cart" onClick={() => dispatch(setToggleBasketVisible())}>
      <FaCartArrowDown />

      {quantity && <span className="cart-quantity">{quantity}</span>}
    </div>
  )
}
