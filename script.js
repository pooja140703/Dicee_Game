var player1_turn = document.getElementById("player1_turn");
var player2_turn = document.getElementById("player2_turn");



var num1 = Math.random()*6; 
var num2 = Math.random()*6;  
var randomTurn1 = Math.round(num1); //0-6
var randomTurn2 = Math.round(num2); //0-6

if(randomTurn1===0){
    randomTurn1++;
}
if(randomTurn2===0){
    randomTurn2++;
}



        // document.querySelector("h1").innerHTML=""
document.querySelector("#player1_turn").setAttribute("src",`images/dice`+randomTurn1+`.png`);

document.querySelector("#player2_turn").setAttribute("src",`images/dice`+randomTurn2+`.png`);

if(randomTurn1 > randomTurn2){
    document.querySelector("h1").innerHTML = "Player1 Win Congratulations..!!";
}else if(randomTurn2 > randomTurn1){
    document.querySelector("h1").innerHTML = "Player2 Win Congratulations..!!";
}else{
    document.querySelector("h1").innerHTML = "It's Tie ...!! Try again..!!";
}



