import React, { useCallback, useMemo, useState } from 'react';
import StockTable from '../../../features/StockTable';
import Filter from '../../../features/Filter';
import { StyledStockPageHeadBox, StyledStockPageWrap } from '../model/styles';

import SearchBar from '../../../shared/ui/SearchBar';
import { useFilterState } from '../model/use-filter';
import { useStockQuotes } from '../model/use-stocks';
import { symbols } from '../utils/constants';

const StockPage = () => {
  const { stockData } = useStockQuotes(symbols, 5000);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearchInput = useCallback((value: string) => {
    setSearchInput(value);
  }, []);

  const { filter, handleFilterChange, filteredData } = useFilterState(
    stockData,
    'all',
  );

  const finalData = useMemo(() => {
    return filteredData.filter((stock) =>
      stock.symbol.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }, [filteredData, searchInput]);

  return (
    <StyledStockPageWrap>
      <StyledStockPageHeadBox>
        <Filter filter={filter} onChange={handleFilterChange} />
        <SearchBar value={searchInput} onChange={handleSearchInput} />
      </StyledStockPageHeadBox>
      <StockTable tableData={finalData} />
    </StyledStockPageWrap>
  );
};

export default StockPage;
