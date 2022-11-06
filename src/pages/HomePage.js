import React from 'react';
import {DashboardContent} from '../components';
import '../styles/homepage.css';

const HomePage = () => {
  return (
    <main className='homepage'>
      <div className='invisible-sidebar'></div>
      <DashboardContent />
    </main>
  );
};

export default HomePage;
