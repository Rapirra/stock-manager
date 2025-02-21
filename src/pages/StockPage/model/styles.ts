import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledStockPageWrap = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '60%',
  gap: '10px',
}));

export const StyledStockPageHeadBox = styled(Box)(() => ({
  border: '1px solid light-grey',
  display: 'flex',
  justifyContent: 'space-between',
}));
