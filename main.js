import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { BOT_CONFIG } from './src/bot/config.js';
import { handleStart } from './src/bot/handlers/startHandler.js';
import { errorHandler } from './src/bot/middleware/errorHandler.js';
import { logger } from './src/bot/middleware/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Загружаем .env файл
dotenv.config({ path: join(__dirname, '.env') });

// Проверяем наличие токена
if (!process.env.BOT_TOKEN) {
  console.error('BOT_TOKEN не найден в переменных окружения');
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);

// Middleware
bot.use(logger);

// Commands
bot.command('start', handleStart);

// Error handling
bot.catch(errorHandler);

// Start bot
bot.launch()
  .then(() => {
    console.log('Bot started successfully');
    console.log('Web app URL:', process.env.WEBAPP_URL);
  })
  .catch((err) => {
    console.error('Error starting bot:', err);
    process.exit(1);
  });

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));