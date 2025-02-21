import { useCallback, useMemo, useState } from 'react';
import { FilterType } from '../../../features/Filter/model/interface';
import { IStockData } from '../../../features/StockTable/model/interface';

export function useFilterState(
  data: IStockData[],
  initialFilter: FilterType = 'all',
) {
  const [filter, setFilter] = useState<FilterType>(initialFilter);

  const handleFilterChange = useCallback((newFilter: FilterType) => {
    setFilter(newFilter);
  }, []);

  const filteredData = useMemo(() => {
    if (filter === 'asc') {
      return data.filter(
        (stock) => stock.currentPrice > stock.openPriceOfTheDay,
      );
    }
    if (filter === 'desc') {
      return data.filter(
        (stock) => stock.currentPrice < stock.openPriceOfTheDay,
      );
    }
    return data;
  }, [data, filter]);

  return { filter, handleFilterChange, filteredData };
}
