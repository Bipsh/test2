/*alert("Hello, World!");
console.log("Hello, world!")*/

let firstNumber = 2;

/*let summary = 2 + 2;
console.log(summary);*/

function add(a, b) {
    return a + b;
}
let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let result = add(number1, number2);
console.log(firstNumber + ", " + result);
console.log(firstNumber + result);