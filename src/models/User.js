// Модель пользователя
export class User {
  constructor(telegramId, username) {
    this.telegramId = telegramId;
    this.username = username;
    this.tickets = 0;
    this.lastDaily = null;
    this.lastWheelSpin = null;
    this.lastAdWatch = null;
    this.invitedUsers = [];
  }

  // Проверка возможности получения ежедневного билета
  canGetDailyTicket() {
    if (!this.lastDaily) return true;
    const timePassed = Date.now() - this.lastDaily;
    return timePassed >= CONFIG.INTERVALS.DAILY_TICKET;
  }

  // Добавление билетов
  addTickets(amount) {
    this.tickets += amount;
    return this.tickets;
  }
}