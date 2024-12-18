// Страница колеса удачи
import React, { useState } from 'react';
import Wheel from '../../components/WheelOfFortune/Wheel';
import Timer from '../../components/WheelOfFortune/Timer';
import Fireworks from '../../components/WheelOfFortune/Fireworks';
import AdBanner from '../../components/AdBanner';

export default function WheelPage() {
  const [lastSpinTime, setLastSpinTime] = useState(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleSpinComplete = (prize) => {
    setLastSpinTime(Date.now());
    
    if (prize === 2) { // Максимальный выигрыш
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 2000);
    }
    
    // TODO: Отправить выигрыш на сервер
  };

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Колесо Удачи</h1>
      
      <div className="mb-8">
        <Wheel 
          onSpinComplete={handleSpinComplete}
          lastSpinTime={lastSpinTime}
        />
        <Timer lastSpinTime={lastSpinTime} />
      </div>

      <AdBanner />
      <Fireworks isVisible={showFireworks} />
    </div>
  );
}