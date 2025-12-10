// const userAr = ["Вася", "Пупкин", 25, "vasyPupcin2000"];
// console.log(
//   `Имя: ${userAr[0]}
// Фамилия: ${userAr[1]}
// Возраст: ${userAr[2]}
// Логин: ${userAr[3]}`
// );

// const userObj = {
//   name: "Вася",
//   surname: "Пупкин",
//   age: 25,
//   login: "vasyPupcin2000",
//   skils: ["html", "css", "js"],
// };

// console.log(userObj.name);
// console.log(userObj["skils"]);
// console.log(userObj.skils);

const users = [
  { name: "Вася", age: 25 },
  { name: "Петя", age: 45 },
  { name: "Маша", age: 28 },
  { name: "Даша", age: 32 },
  { name: "Коля", age: 28 },
];

console.log(users.sort((a, b) => a.age - b.age)); // Маша
