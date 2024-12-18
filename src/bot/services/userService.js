import { CONFIG } from '../../config/constants.js';

class UserService {
  constructor() {
    this.users = new Map();
  }

  getUser(telegramId) {
    return this.users.get(telegramId);
  }

  createUser(telegramId, username) {
    const user = {
      telegramId,
      username,
      tickets: 0,
      lastDaily: null,
      lastWheelSpin: null,
      lastAdWatch: null,
      invitedUsers: []
    };
    this.users.set(telegramId, user);
    return user;
  }

  addTickets(telegramId, amount) {
    const user = this.getUser(telegramId);
    if (user) {
      user.tickets += amount;
      return user.tickets;
    }
    return 0;
  }

  canGetDailyTicket(telegramId) {
    const user = this.getUser(telegramId);
    if (!user || !user.lastDaily) return true;
    return Date.now() - user.lastDaily >= CONFIG.INTERVALS.DAILY_TICKET;
  }
}

export const userService = new UserService();