import React from 'react';

const Cards = ({ title, cover }) => {
  return (
    <div className='card'>
      <img src={cover} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Cards;