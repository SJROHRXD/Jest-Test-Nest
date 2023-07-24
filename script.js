const numbers = [-3, -2, -1, 0, 1, 2, 3];
const letters = ["a", "b", "c", "d", "A", "B", "C", "D"];

class Fruit {
    constructor(name, color, isFruit, emoji) {
        this.name = name;
        this.color = color;
        this.isFruit = isFruit;
        this.emoji = emoji;
    }
}

const apple = new Fruit("Apple", "green", "true", "🍏");
const orange = new Fruit("Orange", "orange", "true", "🍊");
const banana = new Fruit("Banana", "yellow", "true", "🍌");
const tomato = new Fruit("Tomato", "red", "false", "🍅");

// technically a fruit, but not in this case - coPilot

const fruits = [apple, banana, orange, tomato];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Filter Array
const filteredNumbers = numbers.filter(n => n >= 0);

console.log(filteredNumbers);
// output [0, 1, 2, 3]

// Filter Array of Objects
const filteredFruits = fruits.filter(fruit => fruit.color === "green");

filteredFruits.forEach(fruit => console.log(fruit.name));
// output Apple
// (use forEach to iterate over the array and log the name of the fruit that is returned from the filter method)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Map
const mapFrumoji = fruits.map(fruit => fruit.emoji);

console.log(mapFrumoji);
// output ["🍏", "🍌", "🍊", "🍅"]

const mapLetters = letters.map(letter => letter + "🤪"); // omfg coPilot that is so stupid, I love it

console.log(mapLetters);
// ouput ["a🤪", "b🤪", "c🤪", "d🤪", "A🤪", "B🤪", "C🤪", "D🤪"]


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Reduce


// Every
const every = (arr, func) => {

}

// Some
const some = (arr, func) => {

}

// Find
const find = (arr, func) => {
    
    }

