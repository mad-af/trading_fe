import React from 'react';
import { DashboardContent, SideNavbar, TopNavbar } from '../components/Components';
import '../styles/homepage.css';

const HomePage = () => {
  return (
    <div className='homepage'>
      <SideNavbar />
      <main>
        <TopNavbar />
        <DashboardContent />
      </main>
    </div>
  );
};

export default HomePage;
