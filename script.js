const screen = document.querySelector('#screen');
const btnNumbers = document.querySelectorAll('.number');
const btnOperations = document.querySelectorAll('.operation');
const btnEqual = document.querySelector('#btnEqual');
const btnDot = document.querySelector('#btnDot');
const btnClear = document.querySelector('#btnClear');
const btnDelete = document.querySelector('#btnDelete');

let num1 = 0,
    operator, 
    num2 = 0,
    result = 0;

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
    if(num2 == '0')
    {
        screen.textContent = 'Math Error';
    }
    else 
    {
        let total = num1 / num2;
        return total;
    }
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

    num1 = 0;
    num2 = 0;
    operator = undefined;
    result = 0;
}

function fillScreen()
{
    btnNumbers.forEach(btnNumber => 
        {
            btnNumber.addEventListener('click', function()
            {
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
                    screen.textContent = '';
                }
                else 
                {
                    operator = btnOperation.value;
                    // cleanScreen();
                    screen.textContent = '';
                }
            });
        });
}

btnEqual.addEventListener('click', function()
{
    if(num1 == 0 && num2 == 0 && operator == undefined)
    {
        screen.textContent = result;
    }
    else 
    {
        screen.textContent = '';
        result = operate(operator, Number(num1), Number(num2));

        if(result % 1 != 0)
        {
            result = result.toFixed(3);
        }

        screen.textContent = result;
        num1 = screen.textContent, num2 = 0, operator = undefined;
    }

});

btnClear.addEventListener('click', cleanScreen);

btnDot.addEventListener('click', function()
{
    if(screen.textContent != '' && !screen.textContent.includes('.'))
    {
        screen.textContent += btnDot.value;
    }
});

btnDelete.addEventListener('click', function()
{
    let inScreen = screen.textContent.slice(0, -1);
    screen.textContent = inScreen;

    if (operator === undefined) {
        num1 = inScreen;
    } else {
        num2 = inScreen;
    }
});

calc();