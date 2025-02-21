import React, { FC } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FilterType, IFilterProps } from '../model/interface';

const Filter: FC<IFilterProps> = ({ filter, onChange }) => {
  const handleSelectedValue = (e: SelectChangeEvent) => {
    onChange(e.target.value as FilterType);
  };
  return (
    <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Фильтр</InputLabel>
        <Select
          value={filter}
          label="Фильтр"
          onChange={handleSelectedValue}
          variant={'outlined'}
        >
          <MenuItem value={'all'}>Все</MenuItem>
          <MenuItem value={'asc'}>Только растущие</MenuItem>
          <MenuItem value={'desc'}>Только падающие</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
