export interface IStockData {
  symbol: string;
  currentPrice: number;
  change: number;
  percentChange: number;
  highPriceOfTheDay: number;
  lowPriceOfTheDay: number;
  openPriceOfTheDay: number;
  previousClosePrice?: number;
}

// export interface IStockTableProps {
//   stockResponse: IStockData[];
// }
