
const boutonPlay = document.getElementById("newGame");
const boutonRoll = document.getElementById("rollDice");
const boutonHold = document.getElementById("hold");

let rollAmount = document.getElementById("rollAmount");
let scorePlayer1 = document.getElementById("scorePlayer1");
let current1 = document.getElementById("current1");
let scorePlayer2 = document.getElementById("scorePlayer2");
let current2 = document.getElementById("current2");
let player1Dot = document.getElementById('turnDotPlayer1');
let player2Dot = document.getElementById('turnDotPlayer2');

let playerRound = 0;


let currents = [current1, current2]
currents[1].innerHTML ="salut";

class Player {
  constructor(name,score,currentScore){
    this.name = name;
    this.score=score;
    this.currentScore=currentScore;
  }
  
  rollDice(test){
    console.log('le dé est lancé')
    var roll = Math.floor(Math.random()*6+1);
    if(roll>1){
      this.currentScore+=roll;
    }else{
      this.currentScore=0;
      if(playerRound==0){
        playerRound=1;
        player2Dot.style.opacity='100%';
        player1Dot.style.opacity='0%';
      }else{
        playerRound=0;
        player1Dot.style.opacity='0%';
        player2Dot.style.opacity='100%';
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
    playerCurrentScore.innerHTML=this.currentScore;
  }

  resetScore(playerScore,playerCurrentScore){
    this.currentScore=0;
    this.score=0;
    playerScore.innerHTML = this.score;
    playerCurrentScore.innerHTML=this.currentScore;
  }
};

let player1 = new Player('Player1', 0, 0)
let player2 = new Player('Player2', 0, 0)



//*Bouton pour lancer le dé.
boutonRoll.addEventListener("click", ()=>{
  if(playerRound==0){
    console.log('player1 roll')
    player1.rollDice(current1);    
  }else{
    console.log('player2 roll')
    player2.rollDice(current2);
  }
});

//*Bouton pour Hold le score.
boutonHold.addEventListener("click", ()=>{
  player1.holdScore(scorePlayer1,current1);
  if(playerRound==0){
    console.log('player1 hold')
    player1.holdScore(scorePlayer1,current1);
    playerRound=1;
    player1Dot.style.opacity='0%';
    player2Dot.style.opacity='100%';
  }else{
    console.log('player2 hold')
    player2.holdScore(scorePlayer2,current2);
    playerRound=0;
    player1Dot.style.opacity='100%';
    player2Dot.style.opacity='0%';
  }   
});

//*Bouton pour faire une nouvelle partie.
boutonPlay.addEventListener('click', () =>{
  player1.resetScore(scorePlayer1,current1)
  player2.resetScore(scorePlayer2,current2)
  playerRound=0;
})

const canvas = document.getElementById('canvas');
let ctx;
if (canvas.getContext) {
   ctx = canvas.getContext('2d') ;
   ctx.fillStyle = 'green';
   ctx.fillRect(0, 0, 150, 150)


  ctx.beginPath();
  ctx.fillStyle = '#EB4D4C';
  ctx.arc(100, 100, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#EB4D4C';
  ctx.arc(50, 100, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#EB4D4C';
  ctx.arc(50, 50, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#EB4D4C';
  ctx.arc(100, 50, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();



} else {
   console.log('canevas non supporté')
 }
