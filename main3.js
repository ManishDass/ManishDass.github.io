let min = 1;
let max = 4;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


var x = getRandomIntInclusive(min, max)
var y = getRandomIntInclusive(min, max)


var maxElem = Math.max(x, y)
var minElem = Math.min(x, y)


let arr1 = Array(maxElem * minElem).fill('⚽')
let finalString1 = arr1.join("");

// let arr2 = Array(minElem).fill('🏐')
// let finalString2 = arr2.join("");

// let arr3 = Array(maxElem).fill('🍪')
// let finalString3 = arr3.join("");


for (let i = 1; i < 10; i++) {
    setTimeout(function myGreeting() {
        document.getElementById("nums").innerHTML = `${maxElem} x ${minElem} = `;
        document.getElementById("shapes").innerHTML = `${finalString1}  = `;
    }, i * 50);
}