// Random num
function randomIntInclusiveF(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

// Check for duplicate numbers
function duplicates(p1){
  return new Set(p1).size !== p1.lenght;
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

  if (isNaN(num) || /\s/.test(num) || num > 100) {
    console.log("Numero non valido!");
  }
  else if (arrUser.includes(num)) {
    alert("Numero già inserito!");
    console.log(arrUser);

  }
  else if (arrCPU.includes(num)) {
    console.log("Mine!!!");
    alert("End of the line dude!");
    console.log("Your score is " + score);
  }
  else if (score >= 10) {
    alert("Yeah, you win!!!")
  }

  else {
    arrUser.push(num);
    score += 1;
  }

});
