export const errorHandler = (error, ctx) => {
  console.error(`Error for ${ctx.updateType}:`, error);
  return ctx.reply('Произошла ошибка. Пожалуйста, попробуйте позже.');
};