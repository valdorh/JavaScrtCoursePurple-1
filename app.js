const isAdmin = true;
const isCanWrite = true;

console.log(`Системный файл: ${isAdmin && isCanWrite}`);
console.log(`Простой файл: ${isAdmin || isCanWrite}`);
console.log(`Гостевой файл: ${!isAdmin}`);