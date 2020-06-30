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


function easy(){
  console.log("Easy mode!");
  for (var i = 0; (arrCPU.length != 16); i++) {
    var cpuNum = randomIntInclusiveF(1, 100);
    if (arrCPU.includes(cpuNum)) {
      continue;
    } else {
    arrCPU.push(cpuNum);
    }
    // uniqueSet.add(cpuNum);
  }
  console.log(arrCPU);
}

function medium(){
  console.log("Medium mode!");
  for (var i = 0; (arrCPU.length != 16); i++) {
    var cpuNum = randomIntInclusiveF(1, 80);
    if (arrCPU.includes(cpuNum)) {
      continue;
    } else {
    arrCPU.push(cpuNum);
    }
    // uniqueSet.add(cpuNum);
  }
  console.log(arrCPU);
}

function hard(){
  console.log("Hard mode!");
  for (var i = 0; (arrCPU.length != 16); i++) {
    var cpuNum = randomIntInclusiveF(1, 50);
    if (arrCPU.includes(cpuNum)) {
      continue;
    } else {
    arrCPU.push(cpuNum);
    }
    // uniqueSet.add(cpuNum);
  }
  console.log(arrCPU);
}



console.log("Minefield!");

// Test con new Set
var uniqueSet = new Set([]);

var arrCPU = [];
var arrUser = [];
var score = 0;
var numG;
var difficultyG;

btn2.addEventListener("click", function(){
  var difficulty = document.getElementById("difficulty").value;
  difficultyG = difficulty;
  var mediaClip = document.getElementById("OK");
      mediaClip.play();
  alert("OK!");
  console.log("Difficoltà settata a " + difficulty);
  document.getElementById("btn2").className = "hide";
  document.getElementById("difficulty").className = "hide";
  document.getElementById("label1").className = "hide";
  document.getElementById("num").className = "show";
  document.getElementById("btn").className = "show";


  if (difficulty == "Easy") {
    easy();
    document.getElementById("num").placeholder = "Number 0-100";

  }
  else if (difficulty == "Medium") {
    medium();
    document.getElementById("num").placeholder = "Number 0-80";

  }
  else {
    hard();
    document.getElementById("num").placeholder = "Number 0-50";
  }

})

btn.addEventListener("click", function(){
  var num = parseInt(document.getElementById("num").value);
    // Controllo che il numero sia valido
    if (difficultyG == "Easy" && num > 100) {
      throw new Error("Input non valido");
    }
    else if (difficultyG == "Medium" && num > 80) {
      throw new Error("Input non valido");
    }
    else if (difficultyG == "Hard" && num > 50) {
      throw new Error("Input non valido");
    }


    if (isNaN(num) || /\s/.test(num)) {
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
      alert("End of the line dude!\nScore: " + score + String.fromCodePoint(0x1F4A3));
      console.log("Your score is " + score);
    }
    // Se il il punteggio raggiunge 10
    else if (score >= 10) {
      alert("Yeah, you win!!!" + String.fromCodePoint(0x1F91F));
      document.getElementById("list").innerHTML += "<li><i>" + " &#127870 " + "</i></li>"
      document.getElementById("btn3").className = "show";
    }
    // Se il numero è valido aumento il punteggio
    else {
      arrUser.push(num);
      score += 1;
      console.log(String.fromCodePoint(0x1F44C));
      document.getElementById("list").innerHTML += "<li><i>" + " &#128077 " + "</i></li>"
    }

});


btn3.addEventListener("click", function(){
  location.reload();
});
