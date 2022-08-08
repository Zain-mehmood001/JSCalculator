// Odin project guided to start by making functions for the math operators like + - * /

function add(num1, num2)
{
    if(num1 % 1 != 0 || num2 % 1 != 0) // if its in decimals
    {
        return roundCorrectly(num1) + roundCorrectly(num2);
    }
    return num1 + num2;
}

function subtract(num1, num2)
{
    if(num1 % 1 != 0 || num2 % 1 != 0) // if its in decimals
    {
        return roundCorrectly((num1 - num2));
    }
    return num1 - num2;
}

function multiply(num1, num2)
{
    if(num1 % 1 != 0 || num2 % 1 != 0)
    {
        return roundCorrectly((num1 * num2));
    }
    return num1 * num2;
}

function divide(num1, num2)
{
    if(num2 === 0)
    {
        return "LMAO";
    }
    return roundCorrectly((num1 / num2));
}

 // function to round precise numbers correctly
function roundCorrectly(num)
{
    return Math.round( (num + Number.EPSILON) * 1000) / 1000;
}

function operate(a, b, oper)
{
    if(a % 1 != 0)
    {
        a = parseFloat(a);
    }
    else{
        a = parseInt(a);
    }

    (b % 1 != 0) ? b = parseFloat(b):b = parseInt(b);

    console.log(a + " " + op + " " + b);
    switch(op){
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a ,b);
            break;
        default:
            alert("Invalid input");
            break;
    }
    op = '';
}

function showOnDisplay(numbersText)
{
    const display = document.querySelector("#display");
    display.textContent = numbersText;
}

function clearDisplay()
{
    displayStr = '0';
    op = '';
    operandOne = '';
    operandTwo = '';
    result = null;
    showOnDisplay(displayStr);
    // displayStr = '';
    // secondStr = '';
}
//operate();

// DOM manipulation for buttons

let displayStr = '';
let secondStr = '';
let operandOne = '';
let operandTwo = '';
let result = null;
let op = '';
const buttons = document.querySelectorAll('#mainborder button');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        if(button.className === 'operand' && op === '')
        {
            operandOne += button.textContent;
            showOnDisplay(operandOne);
        }
        else if(button.className === 'operand' && op !== '')
        {
            operandTwo += button.textContent;
            showOnDisplay(operandTwo);
        }
        if(button.className === "operator" && result != null)
        {
            operandOne = result;
            operandTwo = '';
            op = '';
            console.log("op1: " + operandOne);
        }
        if(operandOne !== '' && operandTwo !== '' && button.className === 'operator')
        {
            result = operate(operandOne, operandTwo, op);
            op = button.textContent;
            operandOne = result;
            showOnDisplay(result);
            result = null;
            operandTwo = '';
            console.log("result: " + result);
            console.log("op1: " + operandOne);
            console.log(op);
        }
        if(button.className === 'clear button')
        {
            clearDisplay();
        }
        if(button.className === 'operator')
        {
            op = button.textContent;
            // console.log(displayStr);
            // displayStr = '';
            // console.log(op);
            // console.log("Op1: " + operandOne);
            // console.log(typeof operandOne);
        }
        if(button.className === "equal operator")
        {
            result = operate(operandOne, operandTwo, op);
            showOnDisplay(result);
            console.log(result);
        }

    });
})