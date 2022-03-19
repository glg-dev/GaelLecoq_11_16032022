import React, { useState } from 'react';
import leftArrow from '../assets/arrow_left.svg'

const pictures = [
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
  ]
const Gallery = () => {

// const Gallery = ({ pictures }) => {
  // console.log(pictures);
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
          <img src={picture} key={picture} alt='Photo du logement' />
        </div>
      ))}
      <button className="prev" onClick={prev}>
        <img src={leftArrow} alt="prev button" />
      </button>
      <button className="next" onClick={next}>
        <img src={leftArrow} alt="next button" />
      </button>
    </div>
  );
};

export default Gallery;