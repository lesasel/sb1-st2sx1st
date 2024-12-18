// Сервис для управления лотереей
import { CONFIG } from '../config/constants.js';

export class LotteryService {
  constructor() {
    this.jackpot = 0;
    this.participants = new Map();
    this.fakeWinners = new Map(); // Для первых 4 мест
  }

  // Добавление участника
  addParticipant(user) {
    this.participants.set(user.telegramId, user);
  }

  // Генерация фейковых победителей
  generateFakeWinners() {
    // Генерация уникальных ID для фейковых победителей
    // Это временное решение, которое можно будет легко отключить
    for (let i = 1; i <= 4; i++) {
      const fakeId = `fake_${Date.now()}_${i}`;
      this.fakeWinners.set(i, {
        id: fakeId,
        tickets: Math.floor(Math.random() * 1000) + 500 // Случайное количество билетов
      });
    }
  }

  // Проведение розыгрыша
  drawWinners() {
    this.generateFakeWinners();
    // Логика определения реальных победителей (места 5-10)
    // Будет реализована позже
  }
}