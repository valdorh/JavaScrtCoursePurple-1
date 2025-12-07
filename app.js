const depozit = 12000;
const procentInMonth = 7;
const months = 10;
const costHouse = 13500;

const Amount = depozit * (1 + (procentInMonth / 100) / 12) ** months;  
console.log(`Сумма на вашем счету через ${months} месяцев составит ${Amount} рублей.`);
const profit = Amount - depozit; 
console.log(`Ваш прибыль за ${months} месяцев составит ${profit} рублей.`);

if (Amount >= costHouse) {
    console.log(`Поздравляем! Вы сможете купить дом стоимостью ${costHouse} рублей.
и у вас останется ${Amount - costHouse} рублей.`);
} else {
    const difference = costHouse - Amount;
    console.log(`К сожалению, вам не хватает ${difference} рублей для покупки дома стоимостью ${costHouse} рублей.`);
}