import React from 'react';
import './Photos.css';

const Photos = ({ text, image }) => {
  return (
    <div className='container'>
      <img src={image} alt={image} />
      <div>{text}</div>
    </div>
  );
};

export default Photos;

