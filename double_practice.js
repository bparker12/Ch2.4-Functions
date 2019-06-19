function chickenMonkey( currentNumber, limit) {
    for (currentNumber; currentNumber <= limit; currentNumber++) {
        // Divide the current number by 2, and check if the remainder is 0
        if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
            console.log("ChickenMonkey")
        } if (currentNumber % 7 === 0) {
            console.log("Monkey")
        } if (currentNumber % 5 === 0) {
            console.log("Chicken")
        } else {
            console.log(currentNumber)
        }
    }
}
chickenMonkey(15, 70)

//battle of the bands

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

function grill (currentObject) {
    currentObject.cooked = true

    cookedFood.push(currentObject);
};
for (let i = 0; i < foods.length; i++) {
    grill(foods[i])
}
console.log(cookedFood)

let sentence = ["The", "Walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

//stacking

function addExcitement (theWordArray, punc) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1) % 3 === 0) {
        buildMeUp = `${buildMeUp} ${theWordArray[i]}${punc}`
        } else {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`
        }
        console.log(buildMeUp)
        }
    }

addExcitement(sentence, "!")