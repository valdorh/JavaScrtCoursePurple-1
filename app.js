const userName = "Вася Пупкина";
// console.log(userName[0]);
// console.log(userName.charAt(0));
// console.log(userName[userName.length - 1]);
// console.log(userName.charAt(userName.length - 1));
// console.log(userName.slice(0, 3));
// console.log(userName.substring(0, 3));
// console.log(userName.substr(0, 3));

// console.log(userName.includes("а"));
// console.log(userName.startsWith("Ва"));
// console.log(userName.endsWith("ин"));

// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.replace("Вася", "Петя"));
// console.log(userName.replaceAll("а", "y"));

// const nun1 = "89102233445";
// // console.log(nun1.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($1) $2-$3-$4'));
// const nun2 = "8910-223-34-45";
// const num5 = "910 223 34 45";
// console.log(
//   num5
//     .replace(/[\-\s]/g, "")
//     .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($1) $2-$3-$4")
// );
// const nun3 = "+7 (910) 223-34-45";
// const num4 = "+7 910 223 34 45";

//Упражнение корректность карты
const cardNum = "1234 5678 9012 3456";
const begin = cardNum.slice(0, 4);
const end = cardNum.slice(-4);
const maskedCardNum = begin + " **** **** " + end;
console.log(maskedCardNum); // Output: 1234 **** **** 3456
