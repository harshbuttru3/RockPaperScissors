//welcome message!
const userName = prompt("Enter Your Name");
document.getElementById('userName').innerHTML = userName

let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultText = document.querySelector("#result");
let choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
} ));

    function computerTurn(){
        const randNum = Math.floor(Math.random() * 3 ) + 1;

        switch(randNum){
            case 1:
                computer = "ROCK";
                break;
            case 2:
                computer= "PAPER";
                break;
            case 3:
                computer = "SCISSORS";
                break;
        }
    }
function checkWinner() {
    if(player == computer) {
        return "Draw!" ;
    } else if(computer == "ROCK") {
        return (player == "PAPER") ? "You Won!": "You Lose😕";
    } else if (computer == "PAPER"){
        return (player == "SCISSORS") ? "You Won!": "You Lose😕";
    }else if (computer == "SCISSORS"){
        return (player == "ROCK") ? "You Won!": "You Lose😕";
    }
}