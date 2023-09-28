// // date difference with timezone
//! tz
const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

// console.log(tz);

export const date_from_tz = (tz: string): Date => {
  const date = new Date();

  const date_with_tz = new Date(
    date.toLocaleString("en-US", {
      timeZone: tz,
    })
  );

  const time_difference = date.getTime() - date_with_tz.getTime();

  return new Date(date.getTime() - time_difference);
};

const current = date_from_tz("Asia/Manila");

const hours = 23 - current.getHours();
const minutes = 60 - current.getMinutes();

const time_difference = `${hours} hours & ${minutes} minutes until midnight`;

console.log(time_difference);
