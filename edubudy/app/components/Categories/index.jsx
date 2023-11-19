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
      backgroundColor: isActive ? '#76FF03' : '#c56a25',
      color: isActive ? 'black' : 'white',
      transform: isActive ? 'scale(1.05)' : 'scale(1)',
      fontSize: isActive ? '1.1em' : '1em',
    };
  };

  return (
    <div>
      <div className="container mx-auto my-8 p-  rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
          <Link href="/">
            <button
              style={getButtonStyle(0)}
              className="transition-all duration-300 ease-in-out font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none mb-2 sm:mb-0"
              onClick={() => handleButtonClick(0)}
            >
              DİNLE/ANLAT
            </button>
          </Link>
          <Link href="/">
            <button
              style={getButtonStyle(1)}
              className="transition-all duration-300 ease-in-out font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none mb-2 sm:mb-0"
              onClick={() => handleButtonClick(1)}
            >
              MESLEK ERBABI
            </button>
          </Link>
          <Link href="/">
            <button
              style={getButtonStyle(2)}
              className="transition-all duration-300 ease-in-out font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none mb-2 sm:mb-0"
              onClick={() => handleButtonClick(2)}
            >
              KAFAM KARIŞIK
            </button>
          </Link>
          <Link href="/">
            <button
              style={getButtonStyle(3)}
              className="transition-all duration-300 ease-in-out font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none mb-2 sm:mb-0"
              onClick={() => handleButtonClick(3)}
            >
              BURS FIRSATLARI
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
