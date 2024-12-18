import dotenv from 'dotenv';

// Загружаем .env файл
dotenv.config();

// Проверяем обязательные переменные окружения
const requiredEnvVars = ['BOT_TOKEN', 'WEBAPP_URL'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('Отсутствуют обязательные переменные окружения:', missingEnvVars.join(', '));
  process.exit(1);
}

export const BOT_CONFIG = {
  token: process.env.BOT_TOKEN,
  webAppUrl: process.env.WEBAPP_URL
};