/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// forEach() array method fazendo o loop e percorrer cada (item), criando um elemento li para cada item, anexando esse item modificado com o listItem.innerHTML = item; e depois anexou novamente para a lista não ordenada stuffList("ul") para que apareça.
stuff.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  stuffList.append(listItem);
});

article.append(stuffList)
