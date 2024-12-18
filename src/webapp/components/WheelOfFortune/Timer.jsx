// Компонент таймера для следующего вращения
import React, { useState, useEffect } from 'react';
import { CONFIG } from '../../../config/constants';

export default function Timer({ lastSpinTime }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      if (!lastSpinTime) {
        setTimeLeft('Можно крутить!');
        return;
      }

      const now = Date.now();
      const nextSpinTime = lastSpinTime + CONFIG.INTERVALS.WHEEL_SPIN;
      const diff = nextSpinTime - now;

      if (diff <= 0) {
        setTimeLeft('Можно крутить!');
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timer);
  }, [lastSpinTime]);

  return (
    <div className="text-center mt-4">
      <p className="text-sm text-gray-600">Следующее вращение через:</p>
      <p className="text-xl font-bold">{timeLeft}</p>
    </div>
  );
}