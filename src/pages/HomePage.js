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
  const [transactionPage, setTransactionPage] = useState(1);
  const [transactionMaxPage, setTransactionMaxPage] = useState(1);

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

  const onNextPage = async (page = 1, maxPage = 1) => {
    if (page === maxPage) return;
    const transactionData = await getTransactionList(page + 1);
    setTransactionList(transactionData);
    setTransactionPage(transactionData.meta.page);
    setTransactionMaxPage(transactionData.meta.total_page);
  };

  const onBackPage = async (page = 1) => {
    if (page === 1) return;
    const transactionData = await getTransactionList(page - 1);
    setTransactionList(transactionData);
    setTransactionPage(transactionData.meta.page);
    setTransactionMaxPage(transactionData.meta.total_page);
  };

  useEffect(() => {
    async function getList() {
      setUserList(await getUserList());
      const transactionData = await getTransactionList();
      setTransactionList(transactionData);
      setTransactionPage(transactionData.meta.page);
      setTransactionMaxPage(transactionData.meta.total_page);
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
              page={transactionPage}
              maxPage={transactionMaxPage}
              transactionList={transactionList.data}
              onDetail={onClickToDetail}
              onBack={onBackPage}
              onNext={onNextPage}
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
