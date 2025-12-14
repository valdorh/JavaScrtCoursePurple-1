// const user = {
//   name: "Вася",
//   surname: "Пупкин",
//   age: 24,
//   getFullName() {
//     return this.name + " " + this.surname;
//   },
// };

// console.log(user.getFullName());

// const wallet = {
//   ballance: 0,
//   operations: [],
//   operation(reason, sum) {
//     this.ballance += sum;
//     this.operations.push({ reason: reason, sum: sum });
//     return this.ballance >= 0 ? true : false;
//   },
//   countOperations() {
//     return this.operations.length;
//   },
// };

// const wallet = {
//   ballance: 0,
//   operations: [],
//   increase(reason, sum) {
//     this.ballance += sum;
//     this.operations.push({ reason, sum });
//     return true;
//   },
//   decrease(reason, sum) {
//     if (this.ballance < sum) {
//       console.log("Недостаточно средств");
//       return false;
//     } else {
//       this.ballance -= sum;
//       this.operations.push({ reason, sum: -sum });
//       return true;
//     }
//   },
//   countOperations() {
//     return this.operations.length;
//   },
// };

// console.log(wallet.increase("Зарплата", 200));
// console.log(wallet.decrease("Налоги", 200));
// console.log(wallet.increase("Премия", 100));
// console.log(wallet.decrease("Купил Iphone", 400));

// console.log(wallet.countOperations());
// console.log(wallet);

// const cities = {
//   msk: {
//     lt: 150,
//     temp: 25,
//   },
//   spb: {
//     lt: 200,
//     temp: 20,
//   },
// };

// for (const key in cities) {
//   console.log(key);
// }

const cities = {
  msk: {
    lt: 150,
    temp: {
      celsius: 25,
    },
  },
  spb: {
    lt: 200,
  },
};

console.log(cities.spb?.temp?.celsius);
