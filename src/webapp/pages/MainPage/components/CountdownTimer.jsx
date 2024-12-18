import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { CONFIG } from '../../../../config/constants';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const targetDay = CONFIG.LOTTERY_TIME.DRAW_DAY;
    const targetHour = CONFIG.LOTTERY_TIME.DRAW_HOUR;
    
    // Находим следующее воскресенье
    let nextDraw = new Date(now);
    nextDraw.setDate(now.getDate() + (targetDay + 7 - now.getDay()) % 7);
    nextDraw.setHours(targetHour, 0, 0, 0);
    
    // Конвертируем в UTC+4
    nextDraw = zonedTimeToUtc(nextDraw, CONFIG.LOTTERY_TIME.DRAW_TIMEZONE);
    
    const diff = nextDraw.getTime() - now.getTime();
    
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black rounded-lg p-4 text-white">
      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <div className="text-2xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="text-xs">DAYS</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-xs">HRS</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-xs">MINS</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-xs">SECS</div>
        </div>
      </div>
    </div>
  );
}