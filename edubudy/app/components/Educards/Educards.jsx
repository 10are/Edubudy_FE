// components/Educards.jsx

import React from 'react';
import Card from './Cards';

const Educards = ({ data }) => {
  return (
    <div>
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default Educards;
