import React from 'react';
import Filter from './Filter';
import { BsChevronLeft, BsChevronRight, BsPerson } from 'react-icons/bs';

const Cart = () => {
  const cards = [
    {
      "title": "Matematik",
      "description": "Bu dersi anlatabilirim isteyenelere.",
      "lesson": "Matematik",
      "topic": "Toplama",
      "image": "/resim1.jpeg",
      "username": "Ahmet"
    },
    {
      "title": "Biyoloji",
      "description": "Bu konuda çok iyiym.",
      "lesson": "Fizik",
      "topic": "Kuvvet",
      "image": "/resim2.jpeg",
      "username": "Mehmet"
    },
    {
      "title": "Biyoloji",
      "description": "İsteyenlere ders anlatabilirim.",
      "lesson": "Biyoloji",
      "topic": "Hücre",
      "image": "/resim3.jpeg",
      "username": "Ayşe"
    },
    {
      "title": "Tarih",
      "description": "Merhabalar, bu konuyu sizlere anlatabilirim.",
      "lesson": "Tarih",
      "topic": "Geometri",
      "image": "/resim4.jpeg",
      "username": "Onur"
    },
    {
      "title": "Card 5",
      "description": "Bu bir açıklamadır.",
      "lesson": "Kimya",
      "topic": "Geometr,",
      "image": "/resim5.jpeg",
      "username": "Onur"
    },


  ];

  return (
    <div className="flex flex-col md:flex-row pt-8 pr-6 pl-6">
      <Filter />
      <div className="flex-1 pl-4 ">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {cards.map((card, index) => (
            <div key={index} className="hover:scale-110 transition-transform border border-slate-500 hover:border-sky-600 duration-100 rounded-md overflow-hidden shadow-lg">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover mb-4" />
              <div className="p-4">
                <div className="flex  space-x-2 mb-2 font-semibold">
                  <BsPerson className="text-blue-500" />
                  <span>{card.username}</span>
                </div>
                <h2 className="text-lg font-semibold mb-2 ">{card.title}</h2>
                <p className="text-gray-600 mb-2">{card.description}</p>          
                <p className="text-blue-500 font-bold ">{`${card.lesson} - ${card.topic}`}</p>
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



