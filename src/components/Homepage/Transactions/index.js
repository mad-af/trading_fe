import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import {formatter} from '../../../utils/network-data';

const TransactionsContent = ({transactionList, onDetail, page, maxPage, onBack, onNext}) => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return (
    <div className='content transactions'>
      <h2 style={{marginBottom: '20px'}}>List of Users</h2>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Name
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Date
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
                    <TableCell>{formatter.format(transaction.value)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{display: 'flex', width: '100%', justifyContent: 'center', marginTop: '15px'}}
        className='button'
      >
        {page === 1 ? (
          <Button onClick={() => onBack(page)} disabled>
            Back
          </Button>
        ) : (
          <Button onClick={() => onBack(page)}>Back</Button>
        )}
        {page === maxPage ? (
          <Button onClick={() => onNext(page, maxPage)} disabled>
            Next
          </Button>
        ) : (
          <Button onClick={() => onNext(page, maxPage)}>Next</Button>
        )}
      </div>
    </div>
  );
};

export default TransactionsContent;
