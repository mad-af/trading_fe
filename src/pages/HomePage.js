import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {DashboardContent, DetailComponent, TransactionsContent, UserContent} from '../components';
import '../styles/homepage.css';
import {getTransactionList, getUserList} from '../utils/network-data';
import NotFound from './NotFound';

const HomePage = () => {
  const [userList, setUserList] = useState('{}');
  const [transactionList, setTransactionList] = useState('{}');
  const [detailData, setDetailData] = useState('{}');
  const navigate = useNavigate();

  const onClickToDetail = (type, data) => {
    setDetailData({type, data});
    navigate('detail');
  };

  useEffect(() => {
    async function getList() {
      setUserList(await getUserList());
      setTransactionList(await getTransactionList());
    }
    getList();
  }, []);

  console.log(transactionList);
  console.log(userList);
  console.log('Render Homepage');
  return (
    <main className='homepage'>
      <div className='invisible-sidebar'></div>
      <Routes>
        <Route index element={<DashboardContent />} />
        <Route path='dashboard' element={<DashboardContent />} />
        <Route
          path='users'
          element={<UserContent userList={userList.data} onDetail={onClickToDetail} />}
        />
        <Route
          path='transactions'
          element={
            <TransactionsContent
              transactionList={transactionList.data}
              onDetail={onClickToDetail}
            />
          }
        />
        <Route
          path='detail'
          element={<DetailComponent data={detailData.data} type={detailData.type} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default HomePage;
