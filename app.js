const roles = ["admin", "user", "superuser", "guest", "editor"];

// console.log("Available roles:", roles);

// console.log(roles[roles.length - 1]);
// console.log(roles.length);

// console.log(roles.at(4));

// const users = ['Вася', 'Петя', 'Маша'];

// function square(num) {
//   return num + num;
// }

const users = ["Вася", "Петя", "Маша"];

// console.log(users);
// users[1] = "Коля";
// console.log(users);
// users[3] = "Оля";
// console.log(users);
// users[users.length] = "Михаил";
// console.log(users);
// let arLenth = users.push("Саша");
// console.log(users, arLenth);

// arLenth = users.unshift("Ваня");
// console.log(users, arLenth);

// const retPop = users.pop();
// console.log(users, retPop);

//------------------------------------------------------------------------

// console.log(roles.indexOf("user")); // 1
// console.log(roles.includes("menager")); // false

//----Slice, splice, concat, reverse---------------------------------------------

console.log(roles); // исходный массив не изменился
console.log(roles.slice(2));
console.log(roles.slice(2, 3));
console.log(roles.slice(-1));
console.log(roles.slice(1, -1));
console.log(" ==================");
console.log(roles.splice(2, 2)); // возвращает удалённые элементы
