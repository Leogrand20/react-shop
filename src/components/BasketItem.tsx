import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { IoCloseOutline } from 'react-icons/io5'
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci'

import {
  setRemoveItemFromBasket,
  setIncreaseQuantity,
  setDecreaseQuantity,
} from '../redux/slices/orderSlice'
import { BasketItemProps } from '../types/goods'

export const BasketItem: FC<BasketItemProps> = ({
  id,
  name,
  price,
  quantity,
}) => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {name}
          <CiSquarePlus
            className="-mr-2 hover:cursor-pointer"
            onClick={() => dispatch(setIncreaseQuantity(id))}
          />
          {quantity} шт.
          <CiSquareMinus
            className="-ml-2 hover:cursor-pointer"
            onClick={() => dispatch(setDecreaseQuantity(id))}
          />
          {price.finalPrice * quantity} руб.
        </div>

        <IoCloseOutline
          className="item-delete"
          onClick={() => dispatch(setRemoveItemFromBasket(id))}
        />
      </div>
      <hr />
    </>
  )
}
