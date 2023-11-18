// components/Card.jsx

import React from 'react';

const Card = ({ title, description, lesson, topic, image, username }) => {
  return (
    <div className='inline-flex flex items-center justify-center p-5'>
      <div className='max-w-md bg-white shadow-md rounded-md overflow-hidden'>
        <img className='w-full h-40 object-cover rounded-t-md' src={image} alt={title} />
        <div className='p-5'>
          <h2 className='text-2xl font-bold text-blue-600 mb-2'>{title}</h2>
          <p className='text-gray-700 mb-4'>{description}</p>
          <p className='text-gray-600'>Ders: {lesson}</p>
          <p className='text-gray-600'>Konu: {topic}</p>
          <p className='text-gray-600'>Kullanıcı Adı: {username}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
