const boxes = document.querySelectorAll('.boxes');

// o is the first player - 0
// x is the second player - 1
var activePlayer = 0;  
var gameState = [2,2,2,2,2,2,2,2,2]; // this array verifies the gamestate whether it has been played or not

boxes.forEach(function (box) {
 box.addEventListener('click',function(){
     
     var boxTag = Number(box.getAttribute('name'));
     
     if(gameState[boxTag] === 2 ){ //only allow game to be played when the g
         
        if(activePlayer === 0){
            
             box.innerHTML = 'O';
             activePlayer = 1;
             gameState[boxTag] = activePlayer;
             console.log(gameState)
                         
         }else if(activePlayer === 1){
             
             box.innerHTML = 'X';
             activePlayer = 0;
             gameState[boxTag] = activePlayer;
             console.log(gameState);
        }
    }
   
    
 })
})
