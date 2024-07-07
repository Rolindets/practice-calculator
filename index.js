let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnPlus = document.getElementById("btnPlus");
let btnEquals = document.getElementById("btnEquals");
let btnClear = document.getElementById("btnClear");
let screen = document.getElementById("screen");

let currentInput = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';
let answer = 0;

btn1.onclick = function() {
    currentInput += '1';
    screen.value = currentInput;
}

btn2.onclick = function() {
    currentInput += '2';
    screen.value = currentInput;
}

btn3.onclick = function() {
    currentInput += '3';
    screen.value = currentInput;
}

btn4.onclick = function() {
    currentInput += '4';
    screen.value = currentInput;
}

btn5.onclick = function() {
    currentInput += '5';
    screen.value = currentInput;
}

btn6.onclick = function() {
    currentInput += '6';
    screen.value = currentInput;
}

btn7.onclick = function() {
    currentInput += '7';
    screen.value = currentInput;
}

btn8.onclick = function() {
    currentInput += '8';
    screen.value = currentInput;
}

btn9.onclick = function() {
    currentInput += '9';
    screen.value = currentInput;
}

btn0.onclick = function() {
    currentInput += '0';
    screen.value = currentInput;
}

btnPlus.onclick = function() {
    if (firstNumber === '') {
        firstNumber = currentInput;
        operator = '+';
        currentInput = '';
    }
    screen.value = firstNumber + '+';
}

btnMinus.onclick = function() {
    if (firstNumber === '') {
        firstNumber = currentInput;
        operator = '-';
        currentInput = '';
    }
    screen.value = firstNumber + '-';
}


btnEquals.onclick = function() {
    if (operator !== '') {
        secondNumber = currentInput;
        answer = evaluate(firstNumber, secondNumber, operator);
        screen.value = answer;
        resetCalculator();
    }
}

btnClear.onclick = function() {
    resetCalculator();
    screen.value = '0';
}

function evaluate(num1, num2, op) {
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);
    switch (op) {
        case '+':
            return number1 + number2;
        // You can add other operations here (e.g., '-', '*', '/')
        default:
            return 0;
    }
}

function resetCalculator() {
    currentInput = '';
    operator = '';
    firstNumber = '';
    secondNumber = '';
    answer = 0;
}
