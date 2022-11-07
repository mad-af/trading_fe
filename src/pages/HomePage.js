import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {DashboardContent, UserContent} from '../components';
import '../styles/homepage.css';
import {getUserList} from '../utils/network-data';
import NotFound from './NotFound';

const HomePage = () => {
  const [userList, setUserList] = useState('{}');
  useEffect(() => {
    async function getList() {
      setUserList(await getUserList());
    }
    getList();
  }, []);

  console.log('Render Homepage');
  return (
    <main className='homepage'>
      <div className='invisible-sidebar'></div>
      <Routes>
        <Route index element={<DashboardContent />} />
        <Route path='dashboard' element={<DashboardContent />} />
        <Route path='users' element={<UserContent userList={userList.data} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default HomePage;
