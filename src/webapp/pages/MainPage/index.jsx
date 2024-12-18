import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import Jackpot from './components/Jackpot';
import WinnersTable from './components/WinnersTable';
import AdBanner from '../../components/AdBanner';

export default function MainPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <h1 className="text-2xl font-bold text-center text-primary">SHANS</h1>
      
      <CountdownTimer />
      <Jackpot />
      <AdBanner />
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
          ТАБЛИЦА ПОБЕДИТЕЛЕЙ ПРОШЛОЙ НЕДЕЛИ
        </h2>
        <WinnersTable />
      </div>
    </div>
  );
}