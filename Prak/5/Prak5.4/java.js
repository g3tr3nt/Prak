
function calculateY(x) {
    let y;
    if (x < 4) {
        y = Math.tan(x) - Math.pow(x, 2);
    } else if (x === 4) {
        y = 35 * Math.PI;
    } else {
        y = Math.log(x) + 3;
    }
    return y;
}

const ShowResult = document.getElementById('result');

const First = parseFloat(prompt('Введіть початкове значення x:'));
const Last = parseFloat(prompt('Введіть кінцеве значення x:'));
const Step = parseFloat(prompt('Введіть крок зміни значень аргументу:'));

for (let x = First; x <= Last; x += Step) {
    const y = calculateY(x);
    ShowResult.innerHTML += `x = ${x}, y = ${y}<br>`;
}