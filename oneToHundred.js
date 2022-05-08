let min = 2;
let max = 100;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

var randomNumber1 = getRandomIntInclusive(min, max)
var randomNumber2 = getRandomIntInclusive(min, max)


var x = getRandomIntInclusive(min, max)
var y = getRandomIntInclusive(min, max)

if (x == y) {
    x += 1;
}

var maxElem = Math.max(x, y)
var minElem = Math.min(x, y)


let x1 = "<img class=\"equal\" src=\"./images/Equal.png\"> </img>";
let x2 = "<img class=\"gt\" src=\"./images/gt.png\"> </img>";
let x3 = "<img class=\"lt\" src=\"./images/lt.png\"> </img>";


// var result = [x1, x2, x3][Math.floor(Math.random() * 3)];


for (let i = 1; i < 10; i++) {
    setTimeout(function myGreeting() {
        document.getElementById("demo1").innerHTML = `${randomNumber1} &#9744; ${randomNumber2}  `;
        document.getElementById("object1").innerHTML = ` ${x1} ${x2} ${x3} `;

    }, i * 50);
}