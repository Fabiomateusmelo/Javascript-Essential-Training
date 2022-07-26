/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const main = document.querySelector(".maincontent");

const content = `
  <article class="backpack" id="everyday">
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;

// document.querySelector("h1").className; retorna só a classe do H1
// document.querySelector("h1").className = "outra-classe"; para reatribuir outro valor de classe(observar no DOM, verá que foi modificado pelo novo valor). OBS: não utilizar esse método com aplicações React para evitar conflitos.

// Uma forma melhor de fazer isso é com o .classList
// document.querySelector("main li:first-child").classList; recebe uma lista de tokens DOM com cada classe listada por vez, então pode substituir uma classe por vez e não a string inteira, como é o caso do className
// document.querySelector("main li:first-child").classList.add('nova-classe'); add mais uma classe depois das duas já existentes 
// document.querySelector("main li:first-child").classList.remove('packprop'); remove a classe packprop das três existentes.
// document.querySelector("main li:first-child").classList.toggle('packprop'); para alternar, adicionar(true) e remover(false) o elemento de classe
// document.querySelector("main li:first-child").classList.replace('packprop', 'nova-classe') para substituir a primeira classe pela segunda
