import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledAppWrap = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
}));
