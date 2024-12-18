export const logger = (ctx, next) => {
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log('Response time: %sms', ms);
  });
};