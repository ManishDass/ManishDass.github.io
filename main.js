let range = 12
var randomNumber1 = Math.floor(Math.random() * (range));
var randomNumber2 = Math.floor(Math.random() * (range));

var x = Math.floor(Math.random() * (range));
var y = Math.floor(Math.random() * (range));

var maxElem = Math.max(x, y)
var minElem = Math.min(x, y)

let arr1 = Array(randomNumber1).fill('⚽')
let finalString1 = arr1.join("");

let arr2 = Array(randomNumber2).fill('🏐')
let finalString2 = arr2.join("");

let arr3 = Array(maxElem).fill('🍪') 
let finalString3 = arr3.join("");

// let arr4 = Array(minElem).fill('🤤')
// let finalString4 = arr4.join("");




for (let i = 1; i < 10; i++) {
    setTimeout(function myGreeting() {
        document.getElementById("demo1").innerHTML = `${randomNumber1} + ${randomNumber2} = `;
        document.getElementById("object1").innerHTML = `${finalString1} + ${finalString2} = `;

    }, i * 50);
}


for (let i = 1; i < 10; i++) {
    setTimeout(function myGreeting() {
        document.getElementById("demo2").innerHTML = `${maxElem} - ${minElem} = `;
        document.getElementById("object2").innerHTML = `${finalString3}  = `;
    }, i * 50);
}