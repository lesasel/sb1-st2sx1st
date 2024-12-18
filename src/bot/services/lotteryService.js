import { CONFIG } from '../../config/constants.js';

class LotteryService {
  constructor() {
    this.jackpot = 0;
    this.participants = new Map();
  }

  addParticipant(telegramId, tickets) {
    this.participants.set(telegramId, tickets);
  }

  calculatePrizes() {
    const sortedParticipants = [...this.participants.entries()]
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);

    return sortedParticipants.map(([telegramId, tickets], index) => ({
      place: index + 1,
      telegramId,
      tickets,
      prize: Math.floor(this.jackpot * (CONFIG.PRIZE_DISTRIBUTION[`PLACE_${index + 1}`] / 100))
    }));
  }

  addToJackpot(amount) {
    this.jackpot += amount;
    return this.jackpot;
  }
}

export const lotteryService = new LotteryService();