import { FC } from 'react'
import { CiSquareMinus,CiSquarePlus } from 'react-icons/ci'
import { IoCloseOutline } from 'react-icons/io5'

import { useShop } from '../context/useShop'
import { BasketItemProps } from '../types/goods'

export const BasketItem: FC<BasketItemProps> = ({
  id,
  name,
  price,
  quantity,
}) => {
  const { removeItemFromBasket, increaseQuantity, decreaseQuantity } = useShop()

  return (
    <>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {name}
          <CiSquarePlus
            className="-mr-2 hover:cursor-pointer"
            onClick={() => increaseQuantity(id)}
          />
          {quantity} шт.
          <CiSquareMinus
            className="-ml-2 hover:cursor-pointer"
            onClick={() => decreaseQuantity(id)}
          />
          {quantity && price.finalPrice * quantity} руб.
        </div>

        <IoCloseOutline
          className="item-delete"
          onClick={() => removeItemFromBasket(id)}
        />
      </div>
      <hr />
    </>
  )
}
