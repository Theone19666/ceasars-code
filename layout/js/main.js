document.addEventListener('focusin', (event) => {
    if (event.target.closest('.input')) {
        event.target.closest('.input').previousElementSibling.classList.add('element_hidden');
    }
});
document.addEventListener('focusout', (event) => {
    if (event.target.closest('.input')) {
        event.target.closest('.input').previousElementSibling.classList.remove('element_hidden');
    }
});