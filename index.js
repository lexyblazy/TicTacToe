const boxes = document.querySelectorAll('.boxes');

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
     if(gameState[boxTag] === 2 ){ 
         
        if(activePlayer === 0){
            
            box.innerHTML = 'O';
            gameState[boxTag] = activePlayer;
            winningPositionO.push(boxTag);
            console.log(winningPositionO);
            winningPositions.forEach(function(pos){
                
                console.log(pos);
            })
            activePlayer = 1;
                         
         }else if(activePlayer === 1){
             
             box.innerHTML = 'X';
             gameState[boxTag] = activePlayer;
             winningPositionX.push(boxTag);
             console.log(winningPositionX);
             activePlayer = 0;
        }
    }
   
    
 })
})
