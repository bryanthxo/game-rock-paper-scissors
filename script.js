const play = (userChoice) => {

    let choices = ["rock", "paper", "scissors"],
        computerChoice = choices[Math.floor(Math.random() * choices.length)],
        result = "";

    if (userChoice === computerChoice) {
      result = "There is a tie.";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||(userChoice === "paper" && computerChoice === "rock") ||(userChoice === "scissors" && computerChoice === "paper")) {
      result = "You Win! :)";
    } else {
      result = "You lose :(";
    }
  
    document.getElementById('result').innerHTML = `<p>You chose  <b>${userChoice}</b>. The computer chose <b>${computerChoice}</b>.</p><h2>${result}</h2>`;
}
  