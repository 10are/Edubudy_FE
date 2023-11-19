'use client';
import React, { useEffect, useState } from 'react';

async function getCards() {
    const res = await fetch('http://localhost:4000/cards');
    return res.json();
}

export default function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCards();
            setCards(data);
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4 border border-blue-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                    <div key={index} className="rounded-lg p-4 overflow-hidden shadow-lg">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2 bg-gray-800 text-white p-2 rounded">
                            {card.title}
                        </h2>
                        <p className="text-gray-700 text-lg">{card.description}</p>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-lg">Lesson:</span> {card.lesson}
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-lg">Topic:</span> {card.topic}
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-lg">Username:</span> {card.username}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
