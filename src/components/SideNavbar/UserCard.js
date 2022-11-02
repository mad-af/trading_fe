import React, { useContext } from 'react';
import { Avatar } from '@mui/material';
import { UserContext } from '../../context/Context';

const UserCard = () => {
  const { name } = useContext(UserContext);
  return (
    <div className='side-navbar__user-card'>
      <Avatar>{name[0]}</Avatar>
      <p>{name}</p>
    </div>
  );
};

export default UserCard;
