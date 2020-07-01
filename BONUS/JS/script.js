// Random num
function randomIntInclusiveF(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

function easy(){
  console.log("Easy mode!");
  for (var i = 0; (uniqueSet.size != 16); i++) {
    var cpuNum = randomIntInclusiveF(1, 100);
    uniqueSet.add(cpuNum);
  }
  console.log(uniqueSet);

}

function medium(){
  console.log("Medium mode!");
  for (var i = 0; (uniqueSet.size != 16); i++) {
    var cpuNum = randomIntInclusiveF(1, 80);

    uniqueSet.add(cpuNum);
  }
  console.log(uniqueSet);

}

function hard(){
  console.log("Hard mode!");
  for (var i = 0; (uniqueSet.size != 16); i++) {
    var cpuNum = randomIntInclusiveF(1, 50);
    uniqueSet.add(cpuNum);
  }
  console.log(uniqueSet);

}


function enterkey(){
  if (event.keyCode === 13) {
    enterPressed();
  }
}

function enterPressed(){
  console.log(score);
  var num = parseInt(document.getElementById("num").value);
    // Controllo che il numero sia valido
    if (difficultyG == "Easy" && num > 100) {
      document.getElementById("list").innerHTML += "<li><i>" + " Wrong Input " + num + " Deve essere compreso tra 1-100 " + "</i></li>"
      throw new Error("Input non valido");

    }
    else if (difficultyG == "Medium" && num > 80) {
      document.getElementById("list").innerHTML += "<li><i>" + " Wrong Input " + num + " Deve essere compreso tra 1-80 " + "</i></li>"
      throw new Error("Input non valido");

    }
    else if (difficultyG == "Hard" && num > 50) {
      document.getElementById("list").innerHTML += "<li><i>" + " Wrong Input " + num + " Deve essere compreso tra 1-50 " + "</i></li>"
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
    else if (uniqueSet.has(num)) {
      console.log("Mine!!! " + String.fromCodePoint(0x1F4A3));
      alert("End of the line dude!\nScore: " + score + String.fromCodePoint(0x1F4A3));
      document.getElementById("btn3").className = "show";
      console.log("Your score is " + score);
    }

    // Se il il punteggio raggiunge 5
    else if (score >= 4) {
     alert("Yeah, you win!!!" + String.fromCodePoint(0x1F91F));
     document.getElementById("list").innerHTML += "<li><i>" + " &#127870 " + "</i></li>"
     document.getElementById("btn3").className = "show";
    }

    // Se il numero è valido aumento il punteggio
    else {
      arrUser.push(num);
      score += 1;
      console.log(String.fromCodePoint(0x1F44C));
      document.getElementById("list").innerHTML += "<li><i>" + "Mine missed &#128077 " + "</i></li>"
    }
}

console.log("Minefield!");

// Test con new Set
var uniqueSet = new Set([]);

var arrUser = [];
var score = 0;
var difficultyG;


btn2.addEventListener("click", function(){
  var difficulty = document.getElementById("difficulty").value;
  difficultyG = difficulty;
  console.log("Difficoltà settata a " + difficulty);
  document.getElementById("btn2").className = "hide";
  document.getElementById("difficulty").className = "hide";
  document.getElementById("label1").className = "hide";
  document.getElementById("num").className = "show";


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
    var mediaClip = document.getElementById("OK");
        mediaClip.play();
    alert("HARD, OK!");
    document.getElementById("num").placeholder = "Number 0-50";
  }

})

btn3.addEventListener("click", function(){
  location.reload();
});
