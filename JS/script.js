// Random num
function randomIntInclusiveF(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

// Check for duplicate numbers
function duplicates(p1){
  // Creo un nuovo Set dall'argomento(array) della funzione e confronto le loro lunghezze (TRUE se le lunghezze sono diverse).
  return new Set(p1).size != p1.length;
}


console.log("Minefield!");

// Test con new Set
var uniqueSet = new Set([]);

var arrCPU = [];
var arrUser = [];
var score = 0;

for (var i = 0; (arrCPU.length != 6); i++) {
  var cpuNum = randomIntInclusiveF(1, 8);
  if (arrCPU.includes(cpuNum)) {
    continue;
  } else {
  arrCPU.push(cpuNum);
  }
  // uniqueSet.add(cpuNum);
}


console.log(arrCPU);
// console.log(uniqueSet);
if (duplicates(arrCPU)) {
  throw new Error("Trovati dei doppioni nell'array della CPU \nQuitting...")
}
else {
  console.log("Nessun doppione trovato.\nContinuo...");
}
console.log();


btn.addEventListener("click", function(){
  var num = parseInt(document.getElementById("num").value);

  // Controllo che il numero sia valido
  if (isNaN(num) || /\s/.test(num) || num > 100) {
    console.log("Numero non valido!");
  }
  // Se il numero è gia stato inserito
  else if (arrUser.includes(num)) {
    alert("Numero già inserito!");
    console.log(arrUser);
  }
  // Se il numero è presente nel campo minato della CPU
  else if (arrCPU.includes(num)) {
    console.log("Mine!!! " + String.fromCodePoint(0x1F4A3));
    alert("End of the line dude!" + String.fromCodePoint(0x1F4A3));
    console.log("Your score is " + score);
  }
  // Se il il punteggio raggiunge 10
  else if (score >= 10) {
    alert("Yeah, you win!!!" + String.fromCodePoint(0x1F91F))
  }
  // Se il numero è valido aumento il punteggio
  else {
    arrUser.push(num);
    score += 1;
    console.log(String.fromCodePoint(0x1F44C));
  }
});
