//chicken monkey    
const blah =
    `<div>

 </div>`

function ChickenMonkey(num) {
    for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
        // Divide the current number by 2, and check if the remainder is 0
        if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
            document.write("ChickenMonkey, ")
        } else if (currentNumber % 5 === 0) {
            document.write("Chicken, ")
        } else if (currentNumber % 7 === 0) {
            document.write("Monkey, ")
        } else {
            document.write(`${currentNumber}, `)
        }
    }
}
ChickenMonkey()

// function ChickenMonkey1(num) {
//     for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//         // Divide the current number by 2, and check if the remainder is 0
//         if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//             return ("ChickenMonkey, ")
//         } else if (currentNumber % 5 === 0) {
//             return ("Chicken, ")
//         } else if (currentNumber % 7 === 0) {
//             return ("Monkey, ")
//         } else {
//             return (`${currentNumber}, `)
//         }
//     }
// }
// let rand = document.querySelector(".article")
// rand.innerHTML += ChickenM1onkey1()

//band

let bandNumber = 0

const takeNumber = function (band) {
    bandNumber++
    return `${bandNumber}. ${band}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

//cookout

const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(currentObject) {
    currentObject.cooked = true;
    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};
for (let i = 0; i < foods.length; i++) {
    grill(foods[i]);
}
console.log(cookedFood)


//stacking words

