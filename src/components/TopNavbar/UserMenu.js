import {LogoutRounded} from '@mui/icons-material';
import React from 'react';

const UserMenu = ({userName, noneClass, onLogout}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      id='top-navbar__avatar-menu'
      className={noneClass + ` top-navbar__user-menu`}
    >
      <div className='user-info'>
        <p className='name'>{userName}</p>
        <p className='email'>{userName + `@gmail.com`}</p>
      </div>
      <div className='navigation top-border'>
        <button type='button' onClick={onLogout}>
          <LogoutRounded />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
