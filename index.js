let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnPlus = document.getElementById("btnPlus");
let btnEquals = document.getElementById("btnEquals");
let screen = document.getElementById("screen");
let currentInput = '';
let operator = '';
let firstNumber = '';
let answer = 0;

btn1.onclick = function() {
    currentInput += '1';
    screen.textContent = currentInput;
}

btn2.onclick = function() {
    currentInput += '2';
    screen.textContent = currentInput;
}

btn3.onclick = function() {
    currentInput += '3';
    screen.textContent = currentInput;
}

btnPlus.onclick = function() {
    currentInput += '+';
    screen.textContent = currentInput;
}

btnEquals.onclick = function() {
    currentInput += '=';
    screen.textContent = currentInput;
}