import React, { useState } from 'react';

const Gallery = ({ pictures }) => {
  // console.log(pictures);
  // const [current, setCurrent] = useState(0)
  // const length = pictures.length

  // const next = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1)
  // }

  // const prev = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1)
  // }

  return (
    // <div className='gallery'>
    //   {pictures.map((picture, index) => {
    //     console.log(picture);
    //     <div className="picture" key={index}>
    //       {index === current && (<img src={picture} key={picture} alt='Photo du logement' />)}
    //     </div>
    //   })}
    // </div>
    <>
      <h1>Carousel</h1>
    </>
  );
};

export default Gallery;