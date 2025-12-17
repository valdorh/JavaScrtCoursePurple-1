"use strict";

//IIFE

// function init() {
//   console.log("Start");
// }

// init();

// (function () {
//   console.log("Start IIFE");
// })();

// //----------------------Замыкания-------------------
// const balance = 300;
// function changeBalance(num) {
//   let balance = 0;
//   return function (sum) {
//     balance += sum;
//     num++;
//     console.log(balance, num);
//   };
// }

// const change = changeBalance(0);
// change(150);
// change(-50);
// change(250);

// console.dir(change);

const userInfo = {
  balance: 0,
  operations: 0,
  increse(sum) {
    this.balance += sum;
    this.operations++;
  },
};

function user() {
  const userObj = {
    balance: 0,
    operations: 0,
    increse(sum) {
      this.balance += sum;
      this.operations++;
    },
  };
  return function () {
    return userObj;
  };
}

const user1 = user();
const user2 = user();

user1().increse(100);
user1().increse(100);
user1().increse(100);

user2().increse(515);

console.log(user1());
console.log(user2());
console.log(userInfo);
