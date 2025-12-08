// const KG_IN_RUB = 7;
// const KM_IN_RUB = 5;

// function calculateWeightInRub(weightInKg) {
//   return weightInKg * KG_IN_RUB;
// }

// function calculateDistanceInRub(distancetInKm) {
//   return distancetInKm * KM_IN_RUB;
// }

// function getExchangePrice(present1, present2, distance) {
//   const weightPrice = calculateWeightInRub(present1 + present2);
//   const distancePrice = calculateDistanceInRub(distance);
//   return weightPrice + distancePrice;
// }

// console.log(getExchangePrice(1, 2, 10)); // Example usage

const userAge = 25;
const userJob = false;
const userMoney = 1500;

function creditOffer(age, job) {
  if (age >= 23 && job) {
    return 500;
  } else if (age >= 23 && !job) {
    return 100;
  } else {
    return 0;
  }
}

const canBayMacbook = (money, price, age, job = false) =>
  money + creditOffer(age, job) >= price;

console.log(canBayMacbook(userMoney, 2000, userAge, userJob)); // Example usage
