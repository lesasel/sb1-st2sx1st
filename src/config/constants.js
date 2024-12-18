// Конфигурационные константы
export const CONFIG = {
  // Временные настройки
  LOTTERY_TIME: {
    DRAW_DAY: 0, // 0 = воскресенье
    DRAW_HOUR: 20, // 20:00
    DRAW_TIMEZONE: 'Asia/Dubai', // UTC+4
  },
  
  // Интервалы действий
  INTERVALS: {
    DAILY_TICKET: 24 * 60 * 60 * 1000, // 24 часа в миллисекундах
    WHEEL_SPIN: 8 * 60 * 60 * 1000,    // 8 часов
    AD_WATCH: 6 * 60 * 60 * 1000,      // 6 часов
  },
  
  // Награды
  REWARDS: {
    DAILY_LOGIN: 1,    // билет за ежедневный вход
    INVITE_FRIEND: 5,  // билетов за приглашение друга
    AD_WATCH: 1,       // билет за просмотр рекламы
    WHEEL: {
      MIN: 0,
      MAX: 2
    }
  },
  
  // Распределение призового фонда
  PRIZE_DISTRIBUTION: {
    PLACE_1: 30,
    PLACE_2: 20,
    PLACE_3: 15,
    PLACE_4: 10,
    PLACE_5: 7.5,
    PLACE_6: 5.5,
    PLACE_7: 5,
    PLACE_8: 4,
    PLACE_9: 3,
    PLACE_10: 1
  }
}