const body = document.querySelector('#bodyBg');
const css = document.querySelector('h3');
const colorOne = document.querySelector('#color1');
const colorTwo = document.querySelector('#color2');
const btn = document.querySelector('#randomColor');

function setColor() {
    body.style.background = 'linear-gradient(to right, ' 
    + colorOne.value 
    + ', '
    + colorTwo.value
    + ')';

    css.textContent = body.style.background + ';';
}

// var random = Math.floor(Math.random()*16777215).toString(16);

function generateHexCode() {
    var random = '#'+ Math.floor(Math.random()*16777215).toString(16);
    return random;
}

function setRandomValue(random) {
    
    body.style.background = 'linear-gradient(to right, ' 
    + generateHexCode()
    + ', '
    + generateHexCode()
    + ')'; 

    console.log(random);
}

css.textContent = body.style.background + ';';

colorOne.addEventListener('input', setColor);

colorTwo.addEventListener('input', setColor);

btn.addEventListener('click', setRandomValue);