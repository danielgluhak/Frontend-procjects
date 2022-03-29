function generateHexCode() {
    var random = '#'+ Math.floor(Math.random()*16777215).toString(16);
    return random;
}

var randomRgb = Math.floor(Math.random()*1000);
function generateRgb(random) {
    return 'rgb(' 
    + randomRgb 
    + ',' 
    + randomRgb 
    + ',' + randomRgb + ')';
}