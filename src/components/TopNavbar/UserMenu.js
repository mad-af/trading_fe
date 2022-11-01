import React from 'react';

const UserMenu = ({ userName, noneClass }) => {
  return (
    <div className={noneClass + ` top-navbar__user-menu`}>
      <div className='user-info'>
        <p className='name'>{userName}</p>
        <p className='email'>{userName + `@gmail.com`}</p>
      </div>
    </div>
  );
};

export default UserMenu;
