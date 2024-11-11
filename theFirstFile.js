let array = [];
for (let i = 0; i < 301; i++) {
    array.push(i);
}
for (let i=0; i < 6; i++) {
const randomIndexOne = Math.floor(Math.random() * (array.length - 1));
const randomIndexTwo = Math.floor(Math.random() * (array.length - 1));
const number1 = array[randomIndexOne];
const number2 = array[randomIndexTwo];
console.log("Первое число: " + number1, "Второе число: " + number2);
let sum = number1 + number2;
console.log("Итоговое значение возведенное в степень цикла: " + Math.pow(sum, i));
}