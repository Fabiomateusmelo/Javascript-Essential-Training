/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

// push empurra para final da matriz e unshift para o começo(tambêm coloca o ultimo na primeira posição caso não especificar os novos valores)
backpackContents.push("pencil", 5)
console.log(backpackContents);

backpackContents.unshift("lápis", 8)
console.log(backpackContents);

// shift() tira o primeiro item e o 8 passa a ser o primeiro item(posição 0)
backpackContents.shift()
console.log(backpackContents);

// pop() tira o ultimo item
backpackContents.pop()
console.log(backpackContents);

// Para cada(forEach) item transformar em uma lista, manipulando o conteúdo da matriz
backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

// Encontra(find) o primeiro item com 5 ou mais caracteres
let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});

console.log("longItems:", longItems);
