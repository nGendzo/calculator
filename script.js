let history = document.querySelector('#history');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const numberButtons = [...document.querySelectorAll('.number-button')];
const operatorButtons = [...document.querySelectorAll('.operator')]; 
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');

let firstInput = 0;
let secondInput = 0;
let operatorInput;

numberButtons.forEach(element => {
    element.addEventListener('click', () => {
        display.textContent += element.textContent;
    });
});

operatorButtons.forEach(element => {
    element.addEventListener('click', () => {

        if (history.textContent != ""){
            equal();
        }

        firstInput = display.textContent * 1;
        history.textContent = firstInput;
        operatorInput = element.textContent;
        history.textContent = history.textContent + " " + operatorInput;
        display.textContent = "";
    });
});

equalButton.addEventListener('click', equal);

clearButton.addEventListener('click', () => {
    firstInput = 0;
    secondInput = 0;
    display.textContent = "";
    history.textContent = "";
});

function equal(){
    if (firstInput == 0){
        return;
    }
    secondInput = display.textContent * 1;
    let sum = operate(operatorInput, firstInput, secondInput);
    history.textContent = "";
    display.textContent = sum;
    firstInput = 0;
    secondInput = 0;
}

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(operator, num1, num2){
    if (operator == "+"){
        return add(num1, num2);
    }else if (operator == "-"){
        return subtract(num1, num2);
    }else if (operator == "*"){
        return multiply(num1, num2);
    }else if (operator == "%"){
        return divide(num1, num2);
    };
};