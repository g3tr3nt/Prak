
let form = document.querySelector('form');
let inputs = form.querySelectorAll('input');

form.addEventListener('submit', function (event) {

    let isEmpty = false;
    inputs.forEach(function (input) {
        if (input.type !== 'submit' && input.value.trim() === '') {
            isEmpty = true;
        }
    });

    if (isEmpty) {
        event.preventDefault();
        alert('Будь ласка, заповніть усі поля');
    }
});
