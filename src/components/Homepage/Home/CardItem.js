import React from 'react';

const CardItem = ({title, detail}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{detail}</p>
    </div>
  );
};

export default CardItem;
