interface IOfferDates {
  in: string | null
  out: string | null
}

interface IColors {
  color1: string | null
  color2: string | null
  color3: string | null
  textBackgroundColor: string | null
}

interface IDisplayAssets {
  displayAsset: string | null
  materialInstance: string | null
  primaryMode: string | null
  productTag: string | null
  url: string | null
  flipbook: string | null
  background_texture: string | null
  background: string | null
  full_background: string | null
}

interface IPrice {
  regularPrice: number
  finalPrice: number
  floorPrice: number
}

interface IRarity {
  id: string | null
  name: string | null
}

interface IOfferTag {
  id: string | null
  text: string | null
}

export interface IGood {
  mainId: null
  displayName: null
  displayDescription: null
  displayType: null
  mainType: null
  offerId: null
  devName: string | null
  webURL: string | null
  offerDates: IOfferDates
  colors: IColors
  displayAssets: [IDisplayAssets]
  firstReleaseDate: string | null
  previousReleaseDate: string | null
  giftAllowed: boolean
  buyAllowed: boolean
  price: IPrice
  rarity: IRarity
  series: string | null
  banner: string | null
  offerTag: IOfferTag
}

export interface IGoodID extends IGood {
  id: string
}

export type Goods = IGoodID[]

export type GoodsSlice = {
  goods: Goods
}
