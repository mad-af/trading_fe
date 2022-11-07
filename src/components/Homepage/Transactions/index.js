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
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  return (
    <div className='content'>
      <h2 style={{marginBottom: '20px'}}>List of Users</h2>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Name
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Created
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Bank Name
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Type
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionList &&
              transactionList.map((transaction) => {
                return (
                  <TableRow
                    className='table-item'
                    onClick={() => onDetail('transaction', transaction.id)}
                    key={transaction.id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  >
                    <TableCell sx={{textTransform: 'capitalize'}}>
                      {transaction.user_name}
                    </TableCell>
                    <TableCell>
                      {new Date(transaction.created_at).toLocaleDateString('id-ID', options)}
                    </TableCell>
                    <TableCell sx={{textTransform: 'capitalize'}}>
                      {transaction.bank_name}
                    </TableCell>
                    <TableCell sx={{textTransform: 'capitalize'}}>
                      {transaction.transaction_type_name}
                    </TableCell>
                    <TableCell>{`Rp ${transaction.value}`}</TableCell>
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
