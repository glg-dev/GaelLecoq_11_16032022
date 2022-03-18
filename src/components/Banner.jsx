import React from 'react';

const Banner = ({ text, picture }) => {
  return (
    <div className='banner'>
      <h1>{text}</h1>
      <img src={picture} alt="banner" />
      <div className="darken-filter"></div>
    </div>
  );
};

export default Banner;