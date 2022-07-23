/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

function Backpack(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen,
  material
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.lidOpen = lidOpen;
  this.toggleLid = function (lidStatus) {
    this.lidOpen = lidStatus;
  };
  /*this.material = material; Essa forma já basta para chamar o valor do parametro, mas caso queira manipular(modificar) ou se a propriedade é um outro objeto com outras propriedades e parametros dentro, transformar em métodos(EX:toggleMat) e funções*/
  this.material = material;
  this.toggleMat = function ( matStatus ) {
    this.material = matStatus;
  };
  
  this.newStrapLength = function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  };
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "nylon",
);

// Para alterar no console : everydayPack.toggleMat("tecido")
// Ver alteração : everydayPack ou everydayPack.material
