/*alert("Hello, World!");
console.log("Hello, world!")*/

let firstNumber = 2;

/*let summary = 2 + 2;
console.log(summary);*/

function add(a, b) {
    return a + b;
}
let number1 = parseFloat(prompt("Введите первое число для сложения:"));
let number2 = parseFloat(prompt("Введите второе число для сложения:"));
let number3 = parseFloat(prompt("Введите число, которое нужно возвести в степень:"));
let result = add(number1, number2);
Math.pow(number3, result);
if (Math.pow(number3, result)%2 == 0) {
    console.log("Переменная: " + firstNumber + ", ", "Число " + number3 + " в степени " + result + " равно " + Math.pow(number3, result) + " и является четным числом");
} else {
    console.log("Переменная: " + firstNumber + ", ", "Число " + number3 + " в степени " + result + " равно " + Math.pow(number3, result) + " и является нечетным числом");
}
