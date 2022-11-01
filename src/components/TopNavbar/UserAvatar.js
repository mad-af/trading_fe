import React from 'react';
import Avatar from '@mui/material/Avatar';

const UserAvatar = ({ onClick, userName }) => {
  return (
    <Avatar onClick={onClick} className='top-navbar__notification hover'>
      {userName[0]}
    </Avatar>
  );
};

export default UserAvatar;
