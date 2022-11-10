import React from 'react';
import {Avatar} from '@mui/material';

const UserCard = () => {
  const name = 'Admin';
  return (
    <div className='side-navbar__user-card'>
      <Avatar>{name[0]}</Avatar>
      <p>{name}</p>
    </div>
  );
};

export default UserCard;
