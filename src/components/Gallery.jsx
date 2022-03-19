import React, { useState } from 'react';
import leftArrow from '../assets/arrow_left.svg'


const Gallery = ({ pictures }) => {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className='gallery'>
      {pictures.map((picture, index) => index === current && (
        <div className="picture" key={'gallery_' + index}>
          <img src={picture} key={picture} alt='Logement' />
        </div>
      ))}
      {length > 1 && (
        <div className="buttons">
          <button className="prev" onClick={prev}>
          <img src={leftArrow} alt="prev button" />
        </button>
          <button className="next" onClick={next}>
          <img src={leftArrow} alt="next button" />
        </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;