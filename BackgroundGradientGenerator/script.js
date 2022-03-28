const body = document.querySelector('#bodyBg');
const css = document.querySelector('h3');
const colorOne = document.querySelector('#color1');
const colorTwo = document.querySelector('#color2');

function setColor() {
    body.style.background = 'linear-gradient(to right, ' 
    + colorOne.value 
    + ', '
    + colorTwo.value
    + ')';

    css.textContent = body.style.background + ';';
}

css.textContent = body.style.background + ';';

colorOne.addEventListener('input', setColor)

colorTwo.addEventListener('input', setColor)