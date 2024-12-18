import { Markup } from 'telegraf';
import { BOT_CONFIG } from '../config.js';
import { userService } from '../services/userService.js';
import { CONFIG } from '../../config/constants.js';

export const handleStart = async (ctx) => {
  const { id: telegramId, username } = ctx.from;
  
  // Создаем или получаем пользователя
  let user = userService.getUser(telegramId);
  if (!user) {
    user = userService.createUser(telegramId, username);
  }

  // Проверяем возможность получения ежедневного билета
  if (userService.canGetDailyTicket(telegramId)) {
    userService.addTickets(telegramId, CONFIG.REWARDS.DAILY_LOGIN);
    user.lastDaily = Date.now();
  }

  return ctx.reply(
    'Дорогой Друг! Прими участие в бесплатной лотереи, розыгрыш которой проходит раз в неделю, в воскресенье, вечером.\n\n' +
    'Билеты можно получить:\n' +
    '- За вход в игру раз в сутки\n' +
    '- За выполнение заданий\n\n' +
    'Общий призовой фонд накапливается за счёт рекламодателей и трафика.\n' +
    'Шансы увеличиваются за счёт количества билетов.\n\n' +
    'Каждый из нас заслуживает Шанс, не упусти свой!',
    Markup.keyboard([
      [Markup.button.webApp('🎲 ШАНС', BOT_CONFIG.webAppUrl)]
    ]).resize()
  );
};