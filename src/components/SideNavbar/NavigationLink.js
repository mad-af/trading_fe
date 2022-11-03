import { DashboardRounded, ShoppingCartRounded } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink = () => {
  return (
    <div className='side-navbar__navigation-link'>
      <Link className='side-navbar__item' to='/'>
        <DashboardRounded />
        Dashboard
      </Link>
      <Link className='side-navbar__item' to='/'>
        <ShoppingCartRounded />
        Product
      </Link>
    </div>
  );
};

export default NavigationLink;
