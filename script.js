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


