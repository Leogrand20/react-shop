import { useContext } from 'react'
import { ShopContext } from '../context/Context'

export const GoodsItem = ({
  mainId: id,
  displayName: name,
  displayDescription: descr,
  price,
  granted,
}) => {
  const image = granted[0]?.images?.full_background

  const {} = useContext(ShopContext)

  return (
    <div className="card">
      <div className="card__poster">
        <img src={image} alt={name} className="card-img" />
      </div>

      <div className="card__content flex flex-col">
        <h1 className="card__title px-2 text-center">{name}</h1>
        <p className="card-description flex-auto px-2">{descr}</p>
        <hr className="mt-2" />
        <div className="mt-4 flex items-center justify-between px-2">
          <button type="button">Купить</button>
          <span className="text-white">{price.finalPrice} руб.</span>
        </div>
      </div>
    </div>
  )
}
