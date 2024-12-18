// Утилиты для расчета призов
import { CONFIG } from '../config/constants';

export function calculatePrize(place, totalJackpot) {
  const distribution = CONFIG.PRIZE_DISTRIBUTION[`PLACE_${place}`];
  return Math.floor(totalJackpot * (distribution / 100));
}

export function generateFakeWinnerId() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000);
  return `ID${timestamp}${random}`.slice(-8);
}