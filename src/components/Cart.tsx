import { FaCartArrowDown } from 'react-icons/fa'

import { setToggleBasketVisible } from '../redux/slices/orderSlice'
import { selectOrder } from '../redux/selectors/order-selectors'
import { useAppDispatch, useAppSelector } from '../redux/store'

export const Cart = () => {
  const order = useAppSelector(selectOrder)
  const dispatch = useAppDispatch()

  const quantity = order.length

  return (
    <div className="cart" onClick={() => dispatch(setToggleBasketVisible())}>
      <FaCartArrowDown />

      {quantity && <span className="cart-quantity">{quantity}</span>}
    </div>
  )
}
