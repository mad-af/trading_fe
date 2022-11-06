import React from 'react';
import CardItem from './CardItem';
import '../content.css';

const DashboardContent = () => {
  return (
    <div className='content'>
      <h2>Hi, Welcome back</h2>
      <div className='card-container'>
        <CardItem title='Users' detail='500' />
        {/* <CardItem title='Users' detail='500' />
        <CardItem title='Users' detail='500' />
        <CardItem title='Users' detail='500' /> */}
      </div>
    </div>
  );
};

export default DashboardContent;
