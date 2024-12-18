// Утилиты для работы с датами
import { zonedTimeToUtc } from 'date-fns-tz';
import { CONFIG } from '../config/constants';

export function getNextDrawDate() {
  const now = new Date();
  const targetDay = CONFIG.LOTTERY_TIME.DRAW_DAY;
  const targetHour = CONFIG.LOTTERY_TIME.DRAW_HOUR;
  
  let nextDraw = new Date(now);
  nextDraw.setDate(now.getDate() + (targetDay + 7 - now.getDay()) % 7);
  nextDraw.setHours(targetHour, 0, 0, 0);
  
  return zonedTimeToUtc(nextDraw, CONFIG.LOTTERY_TIME.DRAW_TIMEZONE);
}

export function calculateTimeLeft(targetDate) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}