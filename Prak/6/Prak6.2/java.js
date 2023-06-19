
let list = document.querySelectorAll('li');

let correctAnswer = 'Виключне або не';

list.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        if (item.textContent === correctAnswer)
        {
            alert('Правильна відповідь!');
        }
        else
        {
            alert('Неправильна відповідь!');
        }
    });
});
