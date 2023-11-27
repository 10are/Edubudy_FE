import React from 'react';
import Filter from './Filter';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Cart = () => {

  const cards = [
    {
      title: 'Ürün 1',
      description: 'Ürün 1 açıklaması',
      image: 'https://placekitten.com/300/200',
      price: '$19.99',
    },
    {
      title: 'Ürün 1',
      description: 'Ürün 1 açıklaması',
      image: 'https://placekitten.com/300/200',
      price: '$19.99',
    },
    {
      title: 'Ürün 1',
      description: 'Ürün 1 açıklaması',
      image: 'https://placekitten.com/300/200',
      price: '$19.99',
    },
    {
      title: 'Ürün 1',
      description: 'Ürün 1 açıklaması',
      image: 'https://placekitten.com/300/200',
      price: '$19.99',
    },
    {
      title: 'Ürün 1',
      description: 'Ürün 1 açıklaması',
      image: 'https://placekitten.com/300/200',
      price: '$19.99',
    },
 
  ];

  return (
    <div className="flex flex-col md:flex-row pt-8  pr-6 pl-6">
      <Filter />
      <div className="flex-1 pl-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-mainColor  border-black rounded-md overflow-hidden shadow-lg">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover mb-4" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600 mb-2">{card.description}</p>
                <p className="text-green-500 font-bold">{card.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="mr-2 p-2 border rounded-md">
            <BsChevronLeft />
          </button>
          <span className="text-xl font-bold"></span>
          <button className="ml-2 p-2 border rounded-md">
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

