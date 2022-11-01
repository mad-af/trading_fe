import React from 'react';
import { Content, SideNavbar, TopNavbar } from '../components/Components';
import '../styles/homepage.css';

const HomePage = () => {
  return (
    <div className='homepage'>
      <SideNavbar />
      <main>
        <TopNavbar />
        <Content />
      </main>
    </div>
  );
};

export default HomePage;
