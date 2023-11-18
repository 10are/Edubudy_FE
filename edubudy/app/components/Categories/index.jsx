"use client";
import React, { useState } from 'react';
import Link from 'next/link';

function Index() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const getButtonStyle = (index) => {
    const isActive = activeButton === index;

    return {
      backgroundColor: isActive ? 'black' : '#ff5722',
      color: isActive ? '#FFA500' : 'white',
      transform: isActive ? 'scale(1.05)' : 'scale(1)',
      fontSize: isActive ? '1.1em' : '1em',
    };
  };

  return (
    <div>
      <div className="container mx-auto my-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
        <div className="flex justify-center space-x-4">
          <Link href="/">
              <button
                style={getButtonStyle(0)}
                className="transition-all duration-300 ease-in-out font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none"
                onClick={() => handleButtonClick(0)}
              >
                Kategori 1
              </button>
          </Link>
          <Link href="/">
            
              <button
                style={getButtonStyle(1)}
                className="transition-all duration-300 ease-in-out font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none"
                onClick={() => handleButtonClick(1)}
              >
                Kategori 2
              </button>
          </Link>
          <Link href="/">
              <button
                style={getButtonStyle(2)}
                className="transition-all duration-300 ease-in-out font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none"
                onClick={() => handleButtonClick(2)}
              >
                Kategori 3
              </button>
          </Link>
          <Link href="/">
              <button
                style={getButtonStyle(3)}
                className="transition-all duration-300 ease-in-out font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none"
                onClick={() => handleButtonClick(3)}
              >
                Kategori 4
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
