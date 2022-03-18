import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div className='tags'>
      {
        tags.map(tag => {
          return (
            <div className="tag" key={tag}>{tag} </div>
          )
        })
      }
    </div>
  );
};

export default Tags;