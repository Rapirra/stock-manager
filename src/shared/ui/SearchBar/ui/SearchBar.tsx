import React, { ChangeEvent } from 'react';
import { Input } from '@mui/material';
import { ISearchBarProps } from '../model/interface';

const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange }) => {
  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange(e.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Поиск"
      value={value}
      onChange={handleSearchValue}
      sx={{ width: '300px' }}
    />
  );
};

export default SearchBar;
