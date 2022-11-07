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

const UserContent = ({userList}) => {
  return (
    <div className='content'>
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
              {/* <TableCell sx={{fontWeight: 600}} align='left'>
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell sx={{fontWeight: 600}} align='left'>
                Protein&nbsp;(g)
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {userList &&
              userList.map((user) => {
                return (
                  <TableRow key={user.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role_id}</TableCell>
                    {/* <TableCell>{user.carbs}</TableCell>
                    <TableCell>{user.protein}</TableCell>
                    <TableCell>{user.protein}</TableCell> */}
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
