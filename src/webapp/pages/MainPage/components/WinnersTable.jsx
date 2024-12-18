import React from 'react';
import { motion } from 'framer-motion';

export default function WinnersTable() {
  // Временные данные для примера
  const winners = [
    { place: 1, id: 'ID728934', tickets: 150, prize: 300000 },
    { place: 2, id: 'ID456123', tickets: 120, prize: 200000 },
    { place: 3, id: 'ID789456', tickets: 100, prize: 150000 },
    { place: 4, id: 'ID321654', tickets: 80, prize: 100000 },
    { place: 5, id: 'ID987321', tickets: 60, prize: 75000 },
    // ... добавьте остальных победителей
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {winners.map((winner, index) => (
        <motion.div
          key={winner.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`flex justify-between items-center p-4 border-b ${
            index < 4 ? 'bg-primary bg-opacity-10' : ''
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg">{winner.place}</span>
            <span className="text-gray-600">{winner.id}</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">{winner.tickets} билетов</div>
            <div className="font-bold">₽{winner.prize.toLocaleString()}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}