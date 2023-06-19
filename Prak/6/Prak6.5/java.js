
let number1Input = document.getElementById('number1');
let number2Input = document.getElementById('number2');


let Result = document.getElementById('result')

Result.addEventListener('click', ()=>
{
    let number1 = Number(number1Input.value);
    let number2 = Number(number2Input.value);

    let sum = number1 + number2;

    alert('Сума: ' + sum);
    
});