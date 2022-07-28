/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume; // reatribuindo novo valor, 5
    console.log("this.volume after update:", this.volume);
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    (() => {
      console.log("this.volume in arrow function:", this.volume);
    })();
  },
};

// quando é chamada uma função imediatamente invocada(função anônima) dentro da função, ela é elevada para o escopo global, e pega o valor 20 do elemento volume
// função anônima é elevada para o escope global, pegando valores de elementos que não fazem parte do seu escopo local, já as funções de setas pegam valores mais próximos de sua chamada no escopo local

console.log(greenPack.newVolume(5));
