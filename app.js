// for (let i = 0; i < 10; i++) {
//   console.log(`Наш баланс: ${i} $`);
// }
const tasks = ["Задача 1", "Задача 2", "Задача 3", "Задача 4", "Задача 5"];

// for (let i = 0; i < tasks.length; i++) {
//   if (tasks[i] === "Задача 3") {
//     continue;
//   }
//   console.log(tasks[i]);
// }

// console.log("----");

// for (let i = 0; i < tasks.length; i++) {
//   if (tasks[i] === "Задача 3") {
//     break;
//   }
//   console.log(tasks[i]);
// }

// const arr = ["!", "JS", "люблю", "Я"];
// let str = "";
// for (let i = arr.length - 1; i >= 0; i--) {
//   str += arr[i] + " ";
// }
// console.log(str);

// for (let i = 1; i < 4; i++) {
//   console.log(`Цикл-1: ${i} $`);
//   for (let j = 1; j < 5; j++) {
//     console.log(`   Цикл-2: ${j} $`);
//   }
// }

// for (let element of tasks) {
//   console.log(element);
// }

const operations = [800, -500, 100, -300, 10000];
const balance = 100;

function calculateBalance(beginBalance, operations) {
  let balance = beginBalance;
  for (let operation of operations) {
    balance += operation;
    negativeBalance(balance);
  }
  return balance;
}

function negativeBalance(balance) {
  if (balance < 0) {
    console.log("Внимание! Ваш баланс отрицательный!");
  }
}

function averageDebit(operat) {
  let sum = 0;
  let count = 0;
  for (let operation of operat) {
    if (operation > 0) {
      sum += operation;
      count++;
    }
  }
  return sum / count;
}

console.log(`Начальный баланс: ${balance} $`);

console.log(`Наш баланс: ${calculateBalance(balance, operations)} $`);
console.log(`Средний доход: ${averageDebit(operations)} `);
