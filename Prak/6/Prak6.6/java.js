document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (!name || !subject || !message) {
        event.preventDefault();
        alert('Будь ласка, заповніть усі поля!');
    }
});
