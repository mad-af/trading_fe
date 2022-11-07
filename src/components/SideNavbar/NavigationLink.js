import {DashboardRounded, GroupRounded} from '@mui/icons-material';
import React from 'react';
import {Link} from 'react-router-dom';

const NavigationLink = () => {
  return (
    <div className='side-navbar__navigation-link'>
      <Link className='side-navbar__item' to='dashboard'>
        <DashboardRounded />
        Dashboard
      </Link>
      <Link className='side-navbar__item' to='users'>
        <GroupRounded />
        Users
      </Link>
    </div>
  );
};

export default NavigationLink;
