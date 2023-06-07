import React from 'react';

const Portfolio = ({title, descripcion}) => {

  return (
    <div>
        <h2>{title}</h2>
        <div>{descripcion}</div>
    </div>
  );
}

export default Portfolio;