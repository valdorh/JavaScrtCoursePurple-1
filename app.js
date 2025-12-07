function logName(name, surname) {
  console.log(`Your Name ${name} ${surname} `);
}

let a = logName("Vladimir", "Doronin");

function countDepositSum(deposit, percent, month) {
  return deposit * (1 + percent / 100 / 12) ** month;
}

console.log(countDepositSum(100000, 12, 3));
