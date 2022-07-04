const options = ["rock", "paper", "scissors"];
let playerCount = 0;
let computerCount = 0;

function computerPlay (){
    let index = Math.floor((Math.random()*options.length));
    let computer =  options[index];
    return(computer)
}

function playerSelect(){
    let option = prompt("Choose rock,paper or scissors");
    let caseSensitive = option.toLowerCase();
    return caseSensitive
}

function playGame(computer,player){
if (computer == "rock" && player == "scissors"){
    console.log("computer wins")
    computerCount++
} else if(computer == "rock" && player == "paper"){
    console.log("player wins")
    playerCount++
} else if(computer == "rock" && player == "rock"){
    console.log("no one wins");
}else if(computer == "paper" && player == "rock"){
    console.log("computer wins");
    computerCount++
}else if(computer == "paper" && player == "paper"){
    console.log("no one wins");
} else if(computer == "paper" && player == "scissors"){
    console.log("player wins");
    playerCount++
} else if(computer == "scissors" && player == "rock"){
    console.log("player wins");
    playerCount++
} else if(computer == "scissors" && player == "paper"){
    console.log("computer wins");
    computerCount++
} else if(computer == "scissors" && player == "scissors"){
    console.log("no one wins");
}

}

function playFiveGames(){
    // for (let i=0; i < 5; i++){
    //     playGame(computerPlay(),playerSelect());
    //     console.log(computerCount,playerCount)
    //     if(i >= 4 && computerCount > playerCount){
    //         console.log("computer is the winner out of 5 games")
    //     } else if (i >= 4 && computerCount<playerCount){
    //         console.log("player is the winner out of 5 games")
    //     };
    // }

    while (!(playerCount == 5 || computerCount == 5)) {
        playGame(computerPlay(),playerSelect());
     console.log(computerCount,playerCount)
      }

}



playFiveGames()

// computerPlay();
//  playGame(computerPlay(),playerSelect());