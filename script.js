const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const numberButtons = [...document.querySelectorAll('.number-button')];
const operatorButtons = [...document.querySelectorAll('.operator')]; 
const equalButton = document.querySelector('#equal');


let lastInput = 0;
let operatorInput;

numberButtons.forEach(element => {
    element.addEventListener('click', () => {
        display.textContent = element.textContent;
        lastInput = element.textContent;
        lastInput *= 1;
        console.log(lastInput);
    });
});

operatorButtons.forEach(element => {
    element.addEventListener('click', () => {
        operatorInput = element.textContent;
        console.log(operatorInput);
    })
})

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){
    if (operator == "+"){
        return add(num1, num2);
    }else if (operator == "-"){
        return subtract(num1, num2);
    }else if (operator == "*"){
        return multiply(num1, num2);
    }else if (operator == "/"){
        return divide(num1, num2);
    }
}