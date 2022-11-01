import React from 'react';
import DrawerButton from './DrawerButton';
import NavigationLink from './NavigationLink';
import './side-navbar.css';
import UserCard from './UserCard';

const SideNavbar = () => {
  return (
    <div className='side-navbar'>
      <DrawerButton />
      <UserCard />
      <NavigationLink />
    </div>
  );
};

export default SideNavbar;
