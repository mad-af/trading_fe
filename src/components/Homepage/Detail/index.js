import React from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

const DetailComponent = ({data, type}) => {
  console.log(type, data);
  const navigate = useNavigate();
  if (type === undefined) {
    navigate('/');
    return;
  }

  if (type === 'user') {
    return (
      <div className='content detail-component'>
        <h2 style={{marginBottom: '20px'}}>User Detail</h2>
        <div>
          <h3>Name</h3>
          <span>:</span>
          <p style={{textTransform: 'capitalize'}}>{data.name}</p>
        </div>
        <div>
          <h3>Username</h3>
          <span>:</span>
          <p>{data.username}</p>
        </div>
        <div>
          <h3>Email</h3>
          <span>:</span>
          <p>{data.email}</p>
        </div>
        <div>
          <h3>Phone</h3>
          <span>:</span>
          <p>{data.phone}</p>
        </div>
        <div>
          <h3>Role</h3>
          <span>:</span>
          <p style={{textTransform: 'capitalize'}}>{data.role_name}</p>
        </div>
        <div>
          <h3>Grade</h3>
          <span>:</span>
          <p style={{textTransform: 'capitalize'}}>{data.grade_name}</p>
        </div>
      </div>
    );
  }

  const date = new Date(data.created_at).toString();
  return (
    <div className='content detail-component'>
      <h2 style={{marginBottom: '20px'}}>Transaction Detail</h2>
      <div>
        <h3>Username</h3>
        <span>:</span>
        <p>{data.user_name}</p>
      </div>
      <div>
        <h3>Date</h3>
        <span>:</span>
        <p>{date}</p>
      </div>
      <div>
        <h3>Bank</h3>
        <span>:</span>
        <p style={{textTransform: 'capitalize'}}>{data.bank_name}</p>
      </div>
      <div>
        <h3>Description</h3>
        <span>:</span>
        <p>{data.description}</p>
      </div>
      <div>
        <h3>Transaction Name</h3>
        <span>:</span>
        <p style={{textTransform: 'capitalize'}}>{data.transaction_type_name}</p>
      </div>
      <div>
        <h3>Status</h3>
        <span>:</span>
        <p style={{textTransform: 'capitalize'}}>{data.status}</p>
      </div>
    </div>
  );
};

export default DetailComponent;
