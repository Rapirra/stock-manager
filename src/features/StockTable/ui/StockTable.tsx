import * as React from 'react';
import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from '../model/styles';
import { tableHeaders } from '../uitils/constants';
import { IStockData } from '../model/interface';

const StockTable: FC<{ tableData: IStockData[] }> = ({ tableData }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header) => (
              <StyledTableCell key={header}>{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row: IStockData) => (
            <StyledTableRow key={row.symbol}>
              <StyledTableCell component="th" scope="row">
                {row.symbol}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.currentPrice.toFixed(2)}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.change.toFixed(2)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockTable;
