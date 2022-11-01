import React, { useContext } from 'react';
import { Avatar } from '@mui/material';
import UserContext from '../../context/UserContext';

const UserCard = () => {
  const user = useContext(UserContext);
  return (
    <div className='side-navbar__user-card'>
      <Avatar>{user[0]}</Avatar>
      <p>{user}</p>
    </div>
  );
};

export default UserCard;
