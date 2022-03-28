const body = document.querySelector('body');
const css = document.querySelector('h3');
const colorOne = document.querySelector('#color1');
const colorTwo = document.querySelector('#color2');

function setColor() {
    body.style.background = 'linear-gradient(to right, ' 
    + colorOne.value 
    + ', '
    + colorTwo.value
    + ')';
}

colorOne.addEventListener('input', setColor)

colorTwo.addEventListener('input', setColor)