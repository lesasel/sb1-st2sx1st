// Страница кошелька
import React, { useState } from 'react';
import TransactionCard from './components/TransactionCard';
import WithdrawForm from './components/WithdrawForm';
import AdBanner from '../../components/AdBanner';

export default function WalletPage() {
  const [balance, setBalance] = useState(1000); // Временное значение
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      amount: 500,
      type: 'win',
      date: '2024-02-10',
      status: 'completed'
    },
    {
      id: 2,
      amount: 200,
      type: 'withdrawal',
      date: '2024-02-09',
      status: 'pending'
    }
  ]);

  const handleWithdraw = async ({ amount, cardNumber }) => {
    // TODO: Отправить запрос на вывод средств
    const newTransaction = {
      id: Date.now(),
      amount,
      type: 'withdrawal',
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    setTransactions([newTransaction, ...transactions]);
    setBalance(prev => prev - amount);
  };

  return (
    <div className="py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Кошелёк</h1>
      
      <div className="bg-primary rounded-lg p-6 mb-8 text-center">
        <div className="text-sm mb-1">Баланс</div>
        <div className="text-3xl font-bold">₽{balance.toLocaleString()}</div>
      </div>
      
      <WithdrawForm balance={balance} onWithdraw={handleWithdraw} />
      
      <AdBanner className="my-8" />
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">История операций</h2>
        {transactions.map(transaction => (
          <TransactionCard key={transaction.id} {...transaction} />
        ))}
      </div>
    </div>
  );
}