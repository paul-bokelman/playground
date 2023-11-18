// npm run ts -- ./archive/javascript/time-to-next-day.ts

const getTimeToNextDay = () => {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const timeToNextDay = tomorrow.getTime() - now.getTime();

  const hours = Math.floor(timeToNextDay / (1000 * 60 * 60));
  const minutes = Math.floor((timeToNextDay / (1000 * 60)) % 60);
  const seconds = Math.floor((timeToNextDay / 1000) % 60);

  return `${hours} hours, ${minutes} minutes, and ${seconds} seconds until the next day.`;
};

getTimeToNextDay();
