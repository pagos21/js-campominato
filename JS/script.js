// Random num
function randomIntInclusiveF(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

// funzione alternatica a includes
function isDuplicated (array, p2) {
  var i = 0;
  var foundIt = false;
  while (i < array.length && foundIt == false) {
    if(array[i] == p2) {
      foundIt = true;
    }
    i++;
  }
  return foundIt;
}


console.log("Minefield!");

var arrCPU = [];
var arrUser = [];
var score = 0;

for (var i = 0; (arrCPU.length != 16); i++) {
  var cpuNum = randomIntInclusiveF(1, 100);
  if (isDuplicated(arrCPU, cpuNum) != true) {
    arrCPU.push(cpuNum);
  }
}
console.log(arrCPU);


btn.addEventListener("click", function(){
  var num = parseInt(document.getElementById("num").value);

  // Controllo che il numero sia valido
  if (isNaN(num) || num == "" || num > 100) {
    console.log("Numero non valido!");
  }
  // Se il numero è gia stato inserito
  else if (arrUser.includes(num)) {
    alert("Numero già inserito!");
    console.log(arrUser);
  }
  // Se il numero è presente nel campo minato della CPU
  else if (arrCPU.includes(num)) {
    console.log("Mine!!! ");
    alert("End of the line dude!");
    console.log("Your score is " + score);
    console.log("GAME OVER!");
  }
  // Se il punteggio raggiunge 10
  else if (score >= 10) {
    alert("Yeah, you win!!!");
  }
  // Se il numero è valido aumento il punteggio
  else {
    arrUser.push(num);
    score += 1;
    console.log("OK!");
  }
});
