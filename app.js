const money = 10;
const product = 'Iphone 14 Pro Max';

const canBuy = money >= 100;

if (canBuy) {
    console.log(`Поздравляю! Вы можете купить ${product} за ${money} долларов.`);
} else if (money >= 5) {
    console.log(`Вы можете купить б/у версию ${product}.`);
} 
else {
    console.log(`К сожалению, у вас недостаточно средств для покупки ${product}. Вам нужно еще ${100 - money} долларов.`);
}

console.log(`
    Спасибо за использование нашего магазина!`);
