"use strict";

// console.log("Hello!");

// const sum = 1;
// console.log("start1");
// console.log(sum);

// function add5(n) {
//   n = n + 5;
//   if (n > 100) return n;
//   console.log(n);
//   return add5(n);
// }

// add5(sum);
// console.log("ended");

// let firstName = "Anton";
// let firstName2 = firstName;
// firstName = "New";

// console.log(firstName);
// console.log(firstName2);

// const user1 = {
//   firstName: "Anton",
// };

// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.firstName = "Katya";
// console.log(user1);
// console.log(user2);

const user = {
  name: "Anton",
  id: 1,
  roles: ["Admin"],
};

//user.name = "NewUser";
console.log(user);

const newuser = {
  //  ...user,
};
Object.assign(newuser, user);

newuser.name = "NewUser";
newuser.roles.push("User");
console.log(user);
console.log(newuser);
