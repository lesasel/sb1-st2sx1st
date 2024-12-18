// Утилиты для валидации
export function isValidTelegramId(telegramId) {
  return typeof telegramId === 'number' && telegramId > 0;
}

export function isValidUsername(username) {
  return typeof username === 'string' && username.length >= 3;
}

export function canUserGetReward(lastRewardTime, intervalMs) {
  if (!lastRewardTime) return true;
  const timePassed = Date.now() - lastRewardTime;
  return timePassed >= intervalMs;
}