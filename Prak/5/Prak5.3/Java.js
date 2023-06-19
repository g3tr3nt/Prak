const ShowResult = document.getElementById("show");

const e = Math.E;
ShowResult.innerHTML += `Значення константи е = ${e}<br>`;

const pi = Math.PI;
ShowResult.innerHTML += `Значення константи π = ${pi}<br>`;

const log10e = Math.LOG10E;
ShowResult.innerHTML += `Десятковий логарифм постійної Ейлера (е) = ${log10e}<br>`;

const log2e = Math.LOG2E;
ShowResult.innerHTML += `Двійковий логарифм постійної Ейлера (е) = ${log2e}<br>`;

const ln10 = Math.LN10;
ShowResult.innerHTML += `Натуральний логарифм числа 10 = ${ln10}<br>`;

const ln2 = Math.LN2;
ShowResult.innerHTML += `Натуральний логарифм числа 2 = ${ln2}<br>`;

const sqrt2 = Math.SQRT2;
ShowResult.innerHTML += `Корінь квадратний із двох = ${sqrt2}<br>`;

const sqrt1_2 = Math.SQRT1_2;
ShowResult.innerHTML += `Корінь квадратний з однієї другої = ${sqrt1_2}<br>`;


const sin0 = Math.sin(0)
ShowResult.innerHTML += `Синус нуля  y = ${sin0}<br>`;

const sin90 = Math.sin(Math.PI / 2);
ShowResult.innerHTML += `Синус 90 градусів (π /2 радіан): y = ${sin90}<br>`;

const asin1 = Math.asin(1);
ShowResult.innerHTML += `Результат обчислення арксинуса одиниці: y = ${asin1}<br>`;

const tan45 = Math.tan(Math.PI / 4);
ShowResult.innerHTML += `Тангенс 45 градусів (π /4 радіан): y = ${tan45}<br>`;

const atan1 = Math.atan(1);
ShowResult.innerHTML += `Результат обчислення арктангенса одиниці: y = ${atan1}<br>`;

const randNumber = Math.random();
ShowResult.innerHTML += `Випадкове число в інтервалі [0;1]: y = ${randNumber}`;