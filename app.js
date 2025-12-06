const projectName = 'Сайт магазина';
const prise = 2000;
const author = 'Вова Пупкин ';

const template =  author + 'заказал ' + projectName + ' по цене ' + prise + ' рублей';
console.log(template);

const template2 = `${author}заказал ${projectName} по цене ${prise} рублей`;
console.log(template2);

const template3 = `${author} 
заказал 
    ${projectName}`;
console.log(template3);