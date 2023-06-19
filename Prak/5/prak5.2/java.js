let Quote = document.getElementById("A");

let Button1 = document.getElementById("1");
    Button1.addEventListener('click', ()=> {
        Quote.textContent = "Вислів автора: " + "Споконвіку було Слово.";
    })

let Button2 = document.getElementById("2");
Button2.addEventListener('click', ()=> {
    Quote.textContent = "Вислів автора: " + "Коли щось умієте, того не забувайте, а чого не вмієте — то\n" +
        "того учітесь...";
})

let Button3 = document.getElementById("3");
Button3.addEventListener('click', ()=> {
    Quote.textContent = "Вислів автора: " + "Безперервно думай, щоб пізнати себе";
})

let Button4 = document.getElementById("4");
Button4.addEventListener('click', ()=> {
    Quote.textContent = "Вислів автора: " + "Борітеся — поборете!";
})

let Button5 = document.getElementById("5");
Button5.addEventListener('click', ()=> {
    Quote.textContent = "Вислів автора: " + "Люблять батьківщину не за те, що вона велика, а за те, що\n" +
        "своя ";
})