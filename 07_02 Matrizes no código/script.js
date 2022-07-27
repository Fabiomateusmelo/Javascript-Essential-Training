/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);
console.log(collection.length);
console.log(collection[1]);

// Para substituir itens do array
collection[2] = "camera"; 

console.log(collection);

// Idicionando um novo item no final do array
collection[collection.length] = "novo item";

console.log(collection)

// Adicionando um item na posição 9 os itens de 5 à 8 ficam indefinidos
collection[9] = "item posição 9";
console.log(collection);
console.log("Posição 5 está", collection[5])