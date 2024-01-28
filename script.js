let num1 = 0,
    operator, 
    num2 = 0;

function add(num1, num2)
{
    let total = num1 + num2;
    return total;
}

function subtract(num1, num2)
{
    let total = num1 - num2; 
    return total; 
}

function multiply(num1, num2)
{
    let total = num1 * num2;
    return total;
}

function divide(num1, num2)
{
    let total = num1 / num2;
    return total;
}

function operate(operator, num1, num2)
{
    switch(operator)
    {
        case '+':
            add(num1, num2);
        break;

        case '-':
            subtract(num1, num2);
        break;

        case '*':
            multiply(num1, num2);
        break;

        case '/':
            divide(num1, num2);
        break;
    }
}