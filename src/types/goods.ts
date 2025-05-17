interface IPrice {
  regularPrice: number
  finalPrice: number
  floorPrice: number
}

export interface IGood {
  displayName?: string
  displayDescription?: string | null
  price: IPrice
  granted?: [
    {
      images: {
        full_background: string | null
      }
    },
  ]
  id: string
  quantity: number
  name: string
}

export type Goods = IGood[]

export type BasketItemProps = Pick<IGood, 'id' | 'name' | 'price' | 'quantity'>

export type GoodsItemProps = Pick<
  IGood,
  'id' | 'displayName' | 'displayDescription' | 'price' | 'granted' | 'quantity'
>

export interface ShopState {
  goods: Goods
  order: Goods
  isBasketVisible: boolean
  alertName: string
}
