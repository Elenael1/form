const form = document.querySelector('.form');
const input = document.querySelector('.input')

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const value = input.value;

    form.insertAdjacentHTML('beforeend', value)

}