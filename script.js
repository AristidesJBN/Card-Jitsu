    var vida = 3
    var vidasensei = 5

function play(userChoice) {
    const choices = ["agua", "fogo", "neve"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;

    if (userChoice === computerChoice) {
      result = "Empate!";
    } else if (
      (userChoice === "agua" && computerChoice === "fogo") ||
      (userChoice === "fogo" && computerChoice === "neve") ||
      (userChoice === "neve" && computerChoice === "agua")
    ) {
      vidasensei = vidasensei-1
      result = "Sensei possui " + vidasensei
    } else {
      vida = vida-1
      result = "Você possui " + vida
    }

    if (vida <= 0) {
      result = "Você foi derrotado"
    } else if (vidasensei <= 0){
      result = "Você derrotou o Sensei"
    }
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Sensei escolheu ${computerChoice}. ${result}`;
  }
  