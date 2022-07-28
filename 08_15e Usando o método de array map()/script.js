/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// map() através do array stuff para criar um novo array stuffItems.
const stuffItems = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

// Agora temos dois arrays, o primeiro tem apenas os itens e o segundo tem itens de lista e dentro de cada item da lista é um objeto próprio dentro do DOM.
console.log("stuff:", stuff);
console.log("stuffItems:", stuffItems);

// Anexe cada elemento do array stuffItems ao stuffList <ul>
stuffItems.forEach((item) => {
  stuffList.append(item);
});

// Append stuffList to the <article>
article.append(stuffList);

// O map é especificamente para quadno quer criar um novo array para fazer algo a mais com os dados