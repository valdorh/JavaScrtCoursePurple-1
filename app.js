"use strict";

// const user = {
//   name: "Vasya",
//   roles: [],
// };

// function addRole(user, role) {
//   if (role.toLowerCase() === "admin") {
//     const messsage = "Ошибка";
//     console.log(messsage);
//     return user;
//   }
//   user.roles.push(role);
//   return user;
// }

// const role = "ADMIN";
// addRole(user, role);

// console.log(user);
//--------------------------------------------Пример поднятия----------

// addUser();
// console.log(b);
// const a = 3;
// var b = 4;

// console.log(b);
// function addUser() {
//   console.log("Add User");
// }

// addUser();

// function addNum(num, num1) {
//   console.log(this);
//   return num1 - num;
// }

// const addNumAr = (num1, num2) => {
//   console.log(this);
//   return num1 + num2;
// };

// //console.log(addNum(10, 15));
// console.log(addNumAr(10, 15));

const user = {
  name: "Vasya",
  surname: "Pupkin",
  getFullName: function () {
    console.log(this);
    return `${this.name} ${this.surname}`;
  },
  getName: () => {
    console.log(this.surname);
  },
};

console.log(user.getFullName());
console.log(user.getName("yuuu"));
