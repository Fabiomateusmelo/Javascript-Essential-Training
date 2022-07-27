/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

function headingColor() {
  color = "blue";
  document.querySelector(".title").style.color = color;
}

headingColor();


// Lê de cima para baixo, nesse caso as cores estão certas, porque var é escopo global e vai sendo aplicado em ordem de leitura(cima para baixo)