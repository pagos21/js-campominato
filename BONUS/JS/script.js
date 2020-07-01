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

function easy(){
  console.log("Easy mode!");
  for (var i = 0; (arrCPU.length != 16); i++) {
    var cpuNum = randomIntInclusiveF(1, 100);
    if (isDuplicated(arrCPU, cpuNum) != true) {
      arrCPU.push(cpuNum);
    }
  }
  console.log(arrCPU);

}

function medium(){
  console.log("Medium mode!");
  for (var i = 0; (arrCPU.length != 16); i++) {
    var cpuNum = randomIntInclusiveF(1, 80);
    if (isDuplicated(arrCPU, cpuNum) != true) {
      arrCPU.push(cpuNum);
    }
  }
  console.log(arrCPU);

}

function hard(){
  console.log("Hard mode!");
  for (var i = 0; (arrCPU.length != 16); i++) {
    var cpuNum = randomIntInclusiveF(1, 50);
    if (isDuplicated(arrCPU, cpuNum) != true) {
      arrCPU.push(cpuNum);
    }
  }
  console.log(arrCPU);

}

// Set difficulty
btn2.addEventListener("click", function(){
  var difficulty = document.getElementById("difficulty").value;
  difficultyG = difficulty;
  console.log("Difficoltà settata a " + difficulty);
  document.getElementById("difficulty").className = "hide";
  document.getElementById("btn2").className = "hide";
  document.getElementById("label1").className = "hide";
  document.getElementById("num").className = "show";
  document.getElementById("btn").className = "show";

  if (difficulty == "Easy") {
    alert("Easy, OK!");
    easy();
    document.getElementById("num").placeholder = "Number 0-100";

  }
  else if (difficulty == "Medium") {
    alert("Medium, OK!");
    medium();
    document.getElementById("num").placeholder = "Number 0-80";
  }

  else {
    hard();
    alert("HARD, OK!");
    document.getElementById("num").placeholder = "Number 0-50";
  }

})

function enterPressed(){
  console.log(score);
  var list = document.getElementById("list");
  var num = parseInt(document.getElementById("num").value);
  var resetBtn = document.getElementById("btn3");
    // Controllo che il numero sia valido
    if (difficultyG == "Easy" && num > 100) {
      list.innerHTML += "<li>" + " Wrong Input " + num + " Deve essere compreso tra 1-100 " + "</li>"
      console.log("Input non valido");

    }
    else if (difficultyG == "Medium" && num > 80) {
      list.innerHTML += "<li>" + " Wrong Input " + num + " Deve essere compreso tra 1-80 " + "</li>"
      console.log("Input non valido");

    }
    else if (difficultyG == "Hard" && num > 50) {
      list.innerHTML += "<li>" + " Wrong Input " + num + " Deve essere compreso tra 1-50 " + "</li>"
      console.log("Input non valido");

    }

    if (isNaN(num) || num == "") {
      console.log("Numero non valido!");
    }
    // Se il numero è gia stato inserito
    else if (isDuplicated(arrUser, num)) {
      alert("Numero già inserito!");
      console.log(arrUser);
    }
    // Se il numero è presente nel campo minato della CPU
    else if (isDuplicated(arrCPU, num)) {
      console.log("Mine!!!");
      alert("End of the line dude!\nScore: " + score);
      document.getElementById("num").className = "hide";
      list.innerHTML += "<li class='over'>" + " GAME OVER! " + "</li>"
      console.log("Your score is " + score);
    }

    // Se il il punteggio raggiunge 5
    else if (score >= 4) {
     alert("Yeah, you win!!!");
     list.innerHTML += "<li>" + " &#127870 " + "</li>"
    }

    // Se il numero è valido aumento il punteggio
    else {
      arrUser.push(num);
      score += 1;
      console.log("OK!");
      list.innerHTML += "<li>" + "Mine missed &#128077 " + "</li>"
    }
}

console.log("Minefield!");
var arrUser = [];
var arrCPU = [];
var score = 0;
var difficultyG;
