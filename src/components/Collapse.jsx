import React, { useState } from 'react';
import chevronDown from '../assets/chevron_down.svg'

const Collapse = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  let newContent
  (typeof content === 'string') ? newContent = [content] : newContent = content

  return (
    <div className='collapse'>
      <div className="collapse-header" onClick={() => isExpanded ? setIsExpanded(false) : setIsExpanded(true)}>
        <span className='collapse-title'>{title}</span>
        <img src={chevronDown} className={isExpanded ? 'arrow arrow-expanded' : 'arrow'} />
      </div>
      <div className={isExpanded ? 'content collapse-expanded' : 'content collapse-hidden'}>
        {
          newContent.map(item => (
            <span key={item}>{item}</span>
          ))
        }
      </div>
    </div>
  );
};

export default Collapse;