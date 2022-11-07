import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

const TransactionsContent = ({transactionList, onDetail}) => {
  return (
    <div className='content'>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Username
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Description
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Bank Name
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionList &&
              transactionList.map((transaction) => {
                return (
                  <TableRow
                    className='table-item'
                    onClick={() => onDetail('transaction', transaction)}
                    key={transaction.id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  >
                    <TableCell>{transaction.user_name}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.bank_name}</TableCell>
                    <TableCell>{transaction.status}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionsContent;
