const tarif = 80;
const hoursInDay = 5;
const daysInWeek = 5;

const timeWork = 40;
let days = timeWork / hoursInDay + 2;
let salary = tarif * timeWork;
let b = (days <= 11);

console.log(b);
console.log('Количество дней работы: ' + days);
console.log('Зарплата за работу: ' + salary);