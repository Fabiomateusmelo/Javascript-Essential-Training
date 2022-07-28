/**
 * Solution: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";

// Mapeie o array e crie um novo array
const content = backpackObjectArray.map((backpack) => {
  // "mochila" agora contém um único objeto mochila

  // Create new article
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");

  // Defina o ID do artigo para a propriedade backpack.id
  backpackArticle.setAttribute("id", backpack.id);

  // Defina o innerHTML de backpackArticle usando o objeto backpack.
  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

  // Retorne o backpackArticle para a matriz de conteúdo.
  return backpackArticle;
});

// Get the main
const main = document.querySelector(".maincontent");

// Percorra a matriz de conteúdo para anexar cada artigo de mochila.
content.forEach((backpack) => {
  main.append(backpack);
});
