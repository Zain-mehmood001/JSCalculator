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
            if(operandOne.length <= 10)
            {
                operandOne += button.textContent;
                showOnDisplay(operandOne);
            }
        }
        else if(button.className === 'operand' && op !== '')
        {
            if(operandTwo.length <= 10)
            {
                operandTwo += button.textContent;
                showOnDisplay(operandTwo);
            }
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
            result = roundCorrectly(operate(operandOne, operandTwo, op));
            if(result.toString().length >= 10){
                showOnDisplay(result.toExponential(3));
            }
            else{
                showOnDisplay(result);
            }
            op = button.textContent;
            operandOne = result;
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
            if(operandOne !== '' && operandTwo !== '')
            {
                result = roundCorrectly(operate(operandOne, operandTwo, op));
                if(result.toString().length >= 10)
                {
                    showOnDisplay(result.toExponential(2));
                }
                else{
                    showOnDisplay(result);
                }
                console.log(result);
            }
        }
        if(button.className === 'decimal button' && op === '' && operandOne !== '')
        {
            if(!operandOne.includes('.'))
            {
                operandOne += button.textContent;
                showOnDisplay(operandOne);
            }
        }
        else if(button.className === 'decimal button' && op !== '' && operandTwo !== '')
        {
            if(!operandTwo.includes('.'))
            {
                operandTwo += button.textContent;
                showOnDisplay(operandTwo);
            }
        }
        if(button.className === '+- operator' && op === '')
        {
            if(!operandOne.toString().includes('-'))
            {
                operandOne = '-' + operandOne;
                showOnDisplay(operandOne);
            }
            else{
                operandOne = operandOne.toString().replace('-', '');
                showOnDisplay(operandOne);
            }
        }
        else if(button.className === '+- operator' && op !== '')
        {
            if(!operandTwo.includes('-'))
            {
                operandTwo = '-' + operandTwo;
                showOnDisplay(operandTwo);
            }
            else{
                operandTwo = operandTwo.replace('-', '');
                showOnDisplay(operandTwo);
            }
        }
        if(button.className === 'per operator' && op === '')
        {
            if(!operandOne.toString().includes('.'))
            {
                operandOne = operandOne / 100;
                operandOne.toString();
                showOnDisplay(operandOne);
            }
            else{
                operandOne = operandOne * 100;
                operandOne.toString();
                showOnDisplay(operandOne);
            }
        }
        else if(button.className === 'per operator' && op !== '')
        {
            if(!operandTwo.toString().includes('.'))
            {
                operandTwo = operandTwo / 100;
                operandTwo.toString();
                showOnDisplay(operandTwo);
            }
            else{
                operandTwo = operandTwo * 100;
                operandTwo.toString();
                showOnDisplay(operandTwo);
            }
        }
    });

})

const buttonsStyle = document.querySelectorAll('#mainborder button');
buttonsStyle.forEach(button => {
    button.addEventListener('mousedown', function(){
        button.style.transition = '0s';
        button.classList.add('downpress');
    })

    button.addEventListener('mouseup', function(){
        button.style.transition = '0.45s';
        button.classList.remove('downpress');
    })
    button.addEventListener('mouseleave', function(){
        button.style.transition = '0.45s';
        button.classList.remove('downpress');
    })
})
