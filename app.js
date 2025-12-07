const balance = 900;
const isBanned = false;
const bonusBalance = 90;
const isExist = false;

const isSalling = true;

let isSalled =
  (balance > 1000 || bonusBalance >= 100) && !isBanned && !isExist && isSalling;

console.log(`Может купить: ${isSalled ? "Да" : "Нет"}`);
