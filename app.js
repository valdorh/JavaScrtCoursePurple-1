const ans = prompt('Сколько буде 7 +  или - 15?');

switch (ans) {
    case '22':
    case 'двадцать два':
    case 'Я не робот':
        console.log('Успех!');
        break;
    default:
        console.log('Вы робот!');
}


switch (true) {
    case Number(ans) === 22:
    case Number(ans) === -8:
    case ans === 'Я не робот':
    case ans === 'двадцать два':
        console.log('Успех!');
        break;
    default:
        console.log('Вы робот!');
}