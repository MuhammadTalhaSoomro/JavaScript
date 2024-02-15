let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorPara = document.querySelector("#user-scor");
const compScorPara = document.querySelector("#comp-scor");


const gencompChoice = () => {
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
};

const drawGame = () => {
    
    msg.innerText = "Game Was Draw . Play Again";
    msg.style.backgroundColor = "#081b31";
    
}

const showWinner = (userWin ,userChoice ,compChoice) => {
    if (userWin){
        userScore++;
        userScorPara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
     compScore++;
     compScorPara.innerText = compScore;
     msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
     msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
console.log("user choice =", userChoice);
const compChoice = gencompChoice();
console.log("comp choice =", compChoice);

if (userChoice === compChoice){
drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true ;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true ;
    }else {
        userWin = compChoice === "rock" ? false : true ;
    }
    showWinner(userWin , userChoice ,compChoice);
}
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
    
    playGame(userChoice)
    })
})