import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {DashboardContent, DetailComponent, TransactionsContent, UserContent} from '../components';
import '../styles/homepage.css';
import {getTransactionDetail, getTransactionList, getUserList} from '../utils/network-data';
import NotFound from './NotFound';

const HomePage = () => {
  const [userList, setUserList] = useState('{}');
  const [transactionList, setTransactionList] = useState('{}');
  const [detailData, setDetailData] = useState('{}');
  const navigate = useNavigate();

  const onClickToDetail = async (type, id) => {
    if (type === 'user') {
      const data = id;
      setDetailData({type, data});
      navigate('detail');
      return;
    }
    const data = await getTransactionDetail(id);
    setDetailData({type, data: data.data});
    navigate('detail');
  };

  useEffect(() => {
    async function getList() {
      setUserList(await getUserList());
      setTransactionList(await getTransactionList());
    }
    getList();
  }, []);

  return (
    <main className='homepage'>
      <div className='invisible-sidebar'></div>
      <Routes>
        <Route index element={<DashboardContent />} />
        <Route path='/' element={<DashboardContent />} />
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
