const screen = document.querySelector('#screen');
const btnNumbers = document.querySelectorAll('.number');
const btnOperations = document.querySelectorAll('.operation');
const btnEqual = document.querySelector('#btnEqual');
const btnClear = document.querySelector('#btnClear');

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
            return add(num1, num2);
        break;

        case '-':
            return subtract(num1, num2);
        break;

        case '*':
            return multiply(num1, num2);
        break;

        case '/':
            return divide(num1, num2);
        break;
    }
}

function cleanScreen()
{
    screen.textContent = '';
}

function fillScreen()
{
    btnNumbers.forEach(btnNumber => 
        {
            btnNumber.addEventListener('click', function()
            {
                cleanScreen();
                screen.textContent += btnNumber.value;

                if(operator === undefined)
                {
                    num1 = screen.textContent;
                }
                else 
                {
                    num2 = screen.textContent;
                }
                
            });
        });
}

function calc()
{
    fillScreen();

    btnOperations.forEach(btnOperation => 
        {
            btnOperation.addEventListener('click', function()
            {
                if(operator != undefined)
                {
                    screen.textContent = operate(operator, parseInt(num1), parseInt(num2));
                    num1 = screen.textContent, num2 = 0, operator = btnOperation.value;
                }
                else 
                {
                    operator = btnOperation.value;
                    cleanScreen();
                }
            });
        });
}

btnEqual.addEventListener('click', function()
{
    cleanScreen();
    screen.textContent = operate(operator, parseInt(num1), parseInt(num2));
    num1 = screen.textContent, num2 = 0, operator = undefined, result = 0;
});

btnClear.addEventListener('click', cleanScreen);

calc();