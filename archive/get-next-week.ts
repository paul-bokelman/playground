const previousEndDate = new Date("11/10/2022");

const startDate = new Date(previousEndDate);
startDate.setDate(startDate.getDate() + 1);

const endDate = new Date(startDate);
endDate.setDate(endDate.getDate() + 6);

console.log("curr", previousEndDate.toLocaleDateString());
console.log("start", startDate.toLocaleDateString());
console.log("end", endDate.toLocaleDateString());
