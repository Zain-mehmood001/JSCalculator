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

function operate()
{
    let a = 0;
    let b = 0;
    let op = '';
    a = prompt("Enter First number");
    op = prompt("Enter operator");
    b = prompt("Enter second number");

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
            console.log(add(a, b));
            break;
        case '-':
            console.log(subtract(a, b));
            break;
        case '*':
            console.log(multiply(a, b));
            break;
        case '/':
            console.log(divide(a ,b));
            break;
        default:
            alert("Invalid input");
            break;
    }

}

//operate();

// DOM manipulation for buttons

/*
const BContainer = document.querySelector(".buttonContainer");
for(let i = 0; i < 16; i++)
{
    const button = document.createElement('button');
    button.classList.add('number-button');
    BContainer.appendChild(button);
}*/