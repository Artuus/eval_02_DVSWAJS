
const boutonPlay = document.getElementById("newGame");
const boutonRoll = document.getElementById("rollDice");
const boutonHold = document.getElementById("hold");

let rollAmount = document.getElementById("rollAmount");
let scorePlayer1 = document.getElementById("scorePlayer1");
let current1 = document.getElementById("current1");
let scorePlayer2 = document.getElementById("scorePlayer2");
let current2 = document.getElementById("current2");

let playerRound = 0;


class Player {
  constructor(name,round,score,currentScore){
    this.name = name;
    this.round=round;
    this.score=score;
    this.currentScore=currentScore;
  }
  
  rollDice(test){
    console.log('le dé est lancé')
    var roll = Math.floor(Math.random()*6+1);
    console.log(roll)
    if(roll>1){
      this.currentScore+=roll;
    }else{
      this.currentScore=0;
      if(playerRound==0){
        playerRound=1;
      }else{
        playerRound=0;
      }
    }
    test.innerHTML = this.currentScore;
  }
  
  holdScore(playerScore,playerCurrentScore){
    console.log('hold!')
    this.score += this.currentScore;
    this.currentScore=0;
    if(this.score>100){
      alert('Victoire !')
    }
    playerScore.innerHTML = this.score;
    playerCurrentScore.innerHTML=0;
    if(playerRound==0){
      playerRound=1;
    }else{
      playerRound=0;
    }
  }
};

let player1 = new Player('Player1', 0, 0, 0)
let player2 = new Player('Player2', 0, 0, 0)

boutonRoll.addEventListener("click", ()=>{
  if(playerRound==0){
    console.log('player1 roll')
    player1.rollDice(current1);    
  }else{
    console.log('player2 roll')
    player2.rollDice(current2);
  }
});

boutonHold.addEventListener("click", ()=>{
  if(playerRound==0){
    console.log('player1 hold')
    player1.holdScore(scorePlayer1,current1);
  }else{
    console.log('player2 hold')
    player2.holdScore(scorePlayer2,current2);
  }   
});



