// Компонент карточки задания
import React from 'react';
import { motion } from 'framer-motion';

export default function TaskCard({ 
  title, 
  description, 
  reward, 
  icon, 
  onComplete, 
  isCompleted, 
  isDisabled 
}) {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md p-4 mb-4 ${isCompleted ? 'opacity-50' : ''}`}
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full">
            {icon}
          </div>
          <div className="ml-4">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Награда:</div>
          <div className="font-bold">{reward} билетов</div>
        </div>
      </div>
      <button
        onClick={onComplete}
        disabled={isDisabled || isCompleted}
        className={`w-full mt-4 py-2 rounded-lg font-bold
                   ${isDisabled || isCompleted 
                     ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                     : 'bg-primary text-black hover:bg-opacity-90'}`}
      >
        {isCompleted ? 'Выполнено' : 'Выполнить'}
      </button>
    </motion.div>
  );
}