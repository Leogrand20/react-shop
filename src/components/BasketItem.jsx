import { useContext } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci'
import { ShopContext } from '../context/Context'

export const BasketItem = ({ id, name, price, quantity }) => {
  const { removeItemFromBasket } = useContext(ShopContext)

  return (
    <>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {name}
          <CiSquarePlus className="-mr-2 hover:cursor-pointer" />
          {quantity} шт.
          <CiSquareMinus className="-ml-2 hover:cursor-pointer" />
          {price.finalPrice * quantity} руб.
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
