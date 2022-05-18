export interface IUpdateUserAsset {
  boughtOrSold: boolean,
  symbol?: string,
  name?: string,
  quantity: number,
  price: number,
  date: string,
  sub: string,
}
