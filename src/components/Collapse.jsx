import React, { useState } from 'react';
import chevronDown from '../assets/chevron_down.svg'

const Collapse = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  // console.log(content);

  return (
    <div className='collapse'>
      <div className="collapse-header" onClick={() => isExpanded ? setIsExpanded(false) : setIsExpanded(true)}>
        <span className='collapse-title'>{title}</span>
        <img src={chevronDown} className={isExpanded ? 'arrow arrow-expanded' : 'arrow'} />
      </div>
      <div className={isExpanded ? 'content collapse-expanded' : 'content collapse-hidden'}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;