import { useCallback, useEffect, useState } from 'react';
import { IStockData } from '../../../features/StockTable/model/interface';
import { getQuote } from '../../../shared/api/api-query';

export const useStockQuotes = (symbols: string[], refreshInterval = 10000) => {
  const [stockData, setStockData] = useState<IStockData[]>([]);

  const fetchQuotes = useCallback(() => {
    Promise.all(
      symbols.map((symbol) =>
        getQuote(symbol).then((data) => ({
          symbol,
          currentPrice: data.c,
          change: data.d,
          percentChange: data.dp,
          highPriceOfTheDay: data.h,
          lowPriceOfTheDay: data.l,
          openPriceOfTheDay: data.o,
          previousClosePrice: data.pc,
        })),
      ),
    )
      .then((results) => {
        setStockData(results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [symbols]);

  useEffect(() => {
    fetchQuotes();
    const intervalId = setInterval(fetchQuotes, refreshInterval);
    return () => clearInterval(intervalId);
  }, [fetchQuotes, refreshInterval]);

  return { stockData };
};
