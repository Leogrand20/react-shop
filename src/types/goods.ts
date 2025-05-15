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
  quantity?: number
  name: string
}

export type Goods = IGood[]

export type GoodsSlice = {
  goods: Goods
}

export type OrderSlice = {
  order: Goods
  isBasketVisible: boolean
  alertName: string
}

export type BasketItemProps = Pick<IGood, 'id' | 'name' | 'price' | 'quantity'>

export type GoodsItemProps = Pick<
  IGood,
  'id' | 'displayName' | 'displayDescription' | 'price' | 'granted'
>
