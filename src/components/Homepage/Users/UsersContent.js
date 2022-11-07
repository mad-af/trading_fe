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

const UserContent = ({userList, onDetail}) => {
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
                Email
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Role Id
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList &&
              userList.map((user) => {
                return (
                  <TableRow
                    onClick={() => onDetail('user', user)}
                    className='table-item'
                    key={user.id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  >
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role_id}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserContent;
