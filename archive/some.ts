const memberIds = [5, 7, 9, 1, 6];

const presidentId = 9;
const isPresident = memberIds.some((id) => id === presidentId);

console.log(isPresident);
