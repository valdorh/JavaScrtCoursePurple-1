const scores = [5, 10, 8, 0, 25, 30, 15, 20, 22];

// for (const [i, el] of scores.entries()) {
//   console.log(`Раунд ${i + 1}: ${el}`);
// }

// scores.forEach((el, i) => {
//   console.log(`Раунд ${i + 1}: ${el} очков`);
// });

//---------MAP-----------------

// const scoresMap = scores.map((el, i) => {
//   return `Раунд ${i + 1}: ${el + 0.1} очков`;
// });
// console.log(scoresMap);

const transactioUSD = [10, -5, -15, 20, -30, 150, -40];
const courceRUB = 81.5;

// const transactioRUB = transactioUSD.map((el) => el * courceRUB);
// console.log(transactioRUB);

// const debets = transactioUSD.filter((el) => el > 0);
// console.log(debets);

// const credit = transactioUSD.filter((el) => el < 0);
// console.log(credit);

// const debetsRUB = transactioUSD
//   .filter((el) => el > 0)
//   .map((el) => el * courceRUB);
// console.log(debetsRUB);

// const creditsRUB = transactioUSD
//   .filter((el) => el < 0)
//   .map((el) => el * courceRUB);
// console.log(creditsRUB);

//--------------- Упражнение----------------
// const prices = [
//   [100, 200],
//   [120, 100],
//   [200, 350],
//   [135, 160],
// ];

// const positivDelta = prices.map((el) => el[1] - el[0]).filter((el) => el > 0);

// console.log(positivDelta);

// const operations = [100, -150, -15, 250, 30, -150, -40];
// console.log(operations);

// const balance = operations.reduce((acc, value) => (acc += value), 0);
// console.log(balance);

// const arr = [2, 17, 4, 10];

// const average = arr.reduce((acc, value, i) => {
//   return i != arr.length - 1 ? (acc += value) : (acc += value) / arr.length;
// }, 0);

// console.log(average);

// const elG5 = arr.find((value) => value > 5);
// console.log(elG5);

// const indG5 = arr.findIndex((value) => value < 0);
// console.log(indG5);

// const arr = [2, 4, 4, 10, 20];

// function some(arr, num) {
//   const res = arr.find((el) => el === num);
//   return res != undefined;
// }
// console.log(some(arr, 20));

// console.log(arr.some((el) => el === 5));

// const prices = [
//   [100, 200],
//   [120, 100],
//   [200, 350],
//   [135, [160, 120]],
// ];

// const res = prices.flat(2);
// console.log(res);

//const users = ["Вася", "Семен", "Маша", "Николай", "Alisa"];
//console.log(users);
//
//const res = users.sort();
//
//console.log(res);

const operations = [100, -300, -100, 50, 450];
console.log(operations);
operations.sort((a, b) => b - a);
console.log(operations);

console.log(new Array(5).fill(10).map((el) => Math.random() * 100));
