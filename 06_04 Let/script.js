/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

/*let*/var color = "purple";

// Tambêm pode declarar color como escopo local(let) que funcionaria da mesma forma, isso mostra que escopos locais let não conflitam e é melhor do que usar var

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

// Para acabar com erro de conflito de leitura e não depender da ordem de aplicação(cima para baixo), declarar let pois ele é um escopo local e só se aplica a esse elemento, não tendo influência do let, escopo global

function headingColor() {
  /*let*/color = "blue";
  document.querySelector(".title").style.color = color;
}

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
