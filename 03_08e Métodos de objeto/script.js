/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("Left before:", backpack.strapLength.left);
console.log("Right before:", backpack.strapLength.right);

backpack.newStrapLength(10, 15);

console.log("Left after:", backpack.strapLength.left);
console.log("Right after:", backpack.strapLength.right);

var query = "pocketNum";
// Notação de colchete[] dá mais controle e permite fazer mais coisas, porque aceita qualquer nome de propriedades, podendo conter número, aspa, letra, hífen, sem quebrar o código. Na maioria dos casos, use a notação de ponto pois é mais facil de entender, mas se precisar passar uma variável para o nome da propriedade, ou precise acessar uma propriedade que de alguma forma está quebrando a convenção, use a notação de colchetes.
console.log("The pocketNum value:", backpack[query]);
