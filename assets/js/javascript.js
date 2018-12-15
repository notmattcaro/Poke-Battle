// Targeting these id's for button on-click
    /* pikachuButton, squirtleButton, charmanderButton, bulbasaurButton */

// Targeting these id's for placing pokemon in the chosen pokemon spot and the enemy pokemon spot
    /* cPPic, ePPic */

// Targeting these id's for placing pokemon name in the chosen pokemon spot and the enmy pokemon spot
    /* chosenPokeName, enemyPokeName */

// Target id's for "attack" and "reset"
    /* attack, reset */

// Target id's for level of health
    /* myHealth, myHealthPoints ---- enemiesHealth, enemiesHealthPoints */

// onclick handler,

//Beau - advice to return code early so that it doesn't - error state or unacceptable input 
    //if not dead yet look up return

//Alex Pseudo Code example: when attack id is selected and then the on click event is executed, you input a function, - think about the variables
    /* think im going to attack enemy
    the enemy will attack me 
    update scoreboard 
     */

$(document).ready(function(){
    $("#pikachuButton").click(function(){
        $("#chosenPokemon").html("<img id="pikachuPic" src="../images/pickachu.png"/>);
    });
});




function chosenPokemon() {

}
function enemyPokemon() {

}