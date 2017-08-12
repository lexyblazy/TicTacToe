const boxes = document.querySelectorAll('.boxes');
const result = document.querySelector('.result');
var gameIsActive = true;
// o is the first player - 0
// x is the second player - 1
var activePlayer = 0;  
var gameState = [2,2,2,2,2,2,2,2,2]; //this array verifies the gamestate whether it has been played or not

var winningPositions = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

var winningPositionO = [];
var winningPositionX = [];

boxes.forEach(function (box) {
 box.addEventListener('click',function(){
     
     var boxTag = Number(box.getAttribute('name'));
     
     //only allow game to be played in a box when its tag is not yet altered
     if(gameIsActive && gameState[boxTag] === 2 ){ 
         
        if(activePlayer === 0){
            
            box.innerHTML = 'O';
            gameState[boxTag] = activePlayer;
            activePlayer = 1;
                         
         }else if(activePlayer === 1){
             
             box.innerHTML = 'X';
             gameState[boxTag] = activePlayer;
             activePlayer = 0;
        }
         
        winningPositions.forEach(function(pos){
            if(gameState[pos[0]] === gameState[pos[1]]
               && gameState[pos[1]] === gameState[pos[2]]
               && gameState[pos[0]] !== 2){
                
                var winner = gameState[pos[0]];
                if(winner === 0){
                    result.innerHTML = 'O WINS';
                    gameIsActive = false;
                }else if(winner === 1){
                    result.innerHTML = 'X WINS'
                    gameIsActive = false;
                   
                }
                
            }
        })
    }
   
    
 })
})
