const colorSelect = document.getElementById('clrSel');

colorSelect.addEventListener('change', event => {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
});