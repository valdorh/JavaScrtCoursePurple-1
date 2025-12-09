// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// //Функция высшего порядка

// function calculate(a, b, operation) {
//   console.log(operation.name);
//   const result = operation(a, b);
//   return result;
// }

// console.log(calculate(10, 5, add)); // Output: add \n 15
// console.log(calculate(10, 5, subtract)); // Output: subtract \n 5
// console.log(calculate(20, 8, (x, y) => x * y));

function power(pow) {
  return function (num) {
    return num ** pow;
  };
}

const square = power(2);
console.log(square(5)); // Output: 25

function cube(num) {
  return (num) => num ** 3;
}

const power2 = (num) => (pow) => num ** pow;
console.log(cube()(3)); // Output: 27
