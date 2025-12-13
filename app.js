// const users = [
//   { name: "Вася", age: 30 },
//   { name: "Катя", age: 18 },
//   { name: "Аня", age: 40 },
//   { name: "Петя", age: 25 },
// ];

// const users = [
//   {
//     name: "Вася",
//     surname: "Пупкин",
//     age: 30,
//     skills: ["Разработка", "DevOps"],
//   },
//   {
//     name: "Катя",
//     surname: "Белова",
//     age: 18,
//     skills: ["Дизайн"],
//   },
// ];

// console.log(users);

// const usersNew = users.map((value) => {
//   return {
//     fullName: `${value.name} ${value.surname}`,
//     skillNum: value.skills.length,
//   };
// });
//console.log(usersNew);

// const newObj = users.map((value) => {
//   fullName: `${value.name} ${value.surname}`;
// });
// console.log(newObj);// Ошибка так нельзя

const user = {
  name: "Вася",
  surname: "Пупкин",
  age: 24,
  getFullName() {
    return this.name + " " + this.surname;
  },
};

console.log(user.getFullName());
