// Компонент для отображения транзакции
import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function TransactionCard({ amount, type, date, status }) {
  const isWithdrawal = type === 'withdrawal';
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold">
            {isWithdrawal ? 'Вывод средств' : 'Выигрыш в лотерее'}
          </div>
          <div className="text-sm text-gray-500">
            {format(new Date(date), 'd MMMM yyyy', { locale: ru })}
          </div>
        </div>
        <div className={`font-bold ${isWithdrawal ? 'text-red-500' : 'text-green-500'}`}>
          {isWithdrawal ? '-' : '+'}{amount} ₽
        </div>
      </div>
      <div className="mt-2">
        <span className={`text-sm px-2 py-1 rounded-full ${
          status === 'completed' ? 'bg-green-100 text-green-800' :
          status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status === 'completed' ? 'Завершено' :
           status === 'pending' ? 'В обработке' :
           'Отменено'}
        </span>
      </div>
    </div>
  );
}