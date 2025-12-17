"use strict";
// const weight = 3.2;

// const rullon = {
//   weight,
//   getWeight() {
//     return this.weight + " kg.";
//   },
// };

// console.log(rullon.getWeight());

// const car = {
//   make: "Audi",
//   model: "A3",
//   year: 2021,
//   damages: [],
//   addDamage(part, rate) {
//     this.damages.push({ part, rate });
//     console.log(
//       `У автомобиля ${this.make} ${this.model} добавленно повреждение: \n` +
//         `${part}, степень ${rate}`
//     );
//   },
// };

// const carB = {
//   make: "BMW",
//   model: "X5",
//   year: 2019,
//   damages: [],
// };

// car.addDamage("Капот", 2);
// carB.addDamage = car.addDamage;
// carB.addDamage("Водительская дверь", 3);

// const addDamageFunc = car.addDamage;

// //addDamageFunc("Bamper", 2);

// addDamageFunc.call(car, "Kapot", 1);
// addDamageFunc.call(carB, "Kapot", 9);

// addDamageFunc.apply(carB, ["Стекло", 7]);

//-------------------------Bind------------------

// const car = {
//   make: "Audi",
//   model: "A3",
//   year: 2021,
//   damages: [],
// };

// const carManipulation = {
//   addDamage(part, rate) {
//     this.damages.push({ part, rate });
//     console.log(
//       `У автомобиля ${this.make} ${this.model} добавленно повреждение: \n` +
//         `${part}, степень ${rate}`
//     );
//   },
// };

// const addDamageCar = carManipulation.addDamage.bind(car);

// addDamageCar("Крыло", 5);
// addDamageCar("Дверь", 15);
// console.log(car);

//-------------------Упражнение---------------

const userVD = {
  firstName: "Владиир",
  lastName: "Доронин",
  login: "doroninva@yandex.ru",
  pass: "dgdgtr35de3xgg",
};

const userVP = {
  firstName: "Василий",
  lastName: "Семенов",
  pass: "123456",
};

function removePass(reset) {
  if (reset) {
    this.pass = undefined;
  } else {
    this.pass = "1";
  }
}

removePass.call(userVD, 0);

console.log(userVD);
