import { FC } from 'react'

import { useAppDispatch } from '../redux/store'
import { setAddItemToBasket } from '../redux/slices/orderSlice'
import { GoodsItemProps } from '../types/goods'

export const GoodsItem: FC<GoodsItemProps> = ({
  id,
  displayName: name,
  displayDescription: descr,
  price,
  granted,
}) => {
  let image: string | null = ''

  if (granted) {
    image = granted[0].images.full_background
  }

  const dispatch = useAppDispatch()

  return (
    <div className="card">
      <div className="card__poster">
        <img src={String(image)} alt={String(name)} className="card-img" />
      </div>

      <div className="card__content flex flex-col">
        <h1 className="card__title px-2 text-center">{name}</h1>
        <p className="card-description flex-auto px-2">{descr}</p>
        <hr className="mt-2" />
        <div className="mt-4 flex items-center justify-between px-2">
          {name && (
            <button
              type="button"
              onClick={() => dispatch(setAddItemToBasket({ id, name, price }))}
            >
              Купить
            </button>
          )}
          <span className="text-white">{price.finalPrice} руб.</span>
        </div>
      </div>
    </div>
  )
}
