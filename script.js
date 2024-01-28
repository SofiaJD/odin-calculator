function add(...numbers)
{
    let total = 0; 

    for(let i = 0; i < numbers.length; i++)
    {   
        total += numbers[i];
    }

    return total;
}

function subtract(num1, ...numbers)
{
    let total = num1;

    for(let i = 0; i < numbers.length; i++)
    {   
        total -= numbers[i];
    }

    return total;
}

function multiply(num1, ...numbers)
{
    let total = num1; 

    for(let i = 0; i < numbers.length; i++)
    {   
        total *= numbers[i];
    }

    return total;
}

function divide(num1, ...numbers)
{
    let total = num1; 

    for(let i = 0; i < numbers.length; i++)
    {   
        total /= numbers[i];
    }

    return total;
}