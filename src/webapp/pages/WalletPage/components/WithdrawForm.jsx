// Форма вывода средств
import React, { useState } from 'react';

export default function WithdrawForm({ balance, onWithdraw }) {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !cardNumber) return;
    
    onWithdraw({
      amount: Number(amount),
      cardNumber: cardNumber.replace(/\s/g, '')
    });
    
    setAmount('');
    setCardNumber('');
  };
  
  const formatCardNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    const groups = numbers.match(/.{1,4}/g) || [];
    return groups.join(' ').substr(0, 19);
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-bold mb-4">Вывод средств</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Сумма (₽)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          max={balance}
          min={100}
          className="w-full p-2 border rounded-lg"
          placeholder="Минимум 100 ₽"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Номер карты
        </label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          className="w-full p-2 border rounded-lg"
          placeholder="0000 0000 0000 0000"
          maxLength={19}
        />
      </div>
      
      <button
        type="submit"
        disabled={!amount || !cardNumber || amount > balance || amount < 100}
        className="w-full bg-primary text-black font-bold py-2 rounded-lg
                 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        Вывести
      </button>
    </form>
  );
}