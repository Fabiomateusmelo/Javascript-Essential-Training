/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

// Function expression:
// declarar como variável const é mais seguro para que seu código não seja subscrito
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath());
console.log("Do more math:", doMoreMath(5, 6));

// Immediately Invoked Function Expression (IIFE)
// Não tem como manipular/controlar a função, mas é útil quando quer que algo acontece o mais rápido possivel
// função anônima é elevada para o escope global, pegando valores de elementos que não fazem parte do seu escopo local, já as funções de setas pegam valores mais próximos de sua chamada no escopo local
(function () {
  let a = 4;
  let b = 6;
  let c = doSomeMath(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();
