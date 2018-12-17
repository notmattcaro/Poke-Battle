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

    var hasBeenClicked = false;
    var itselfP = false;
    var itselfS = false;
    var itselfC = false;
    var itselfB = false;

    //Code for chosen pokemon

    //callable function so that the chosen pokemon and enemy pokemon are not the same
    function itself() {
        return;
    }
    //Pikachu click
    $("#pikachuButton").on("click", function(){

        function chosen() {
            $("#chosenPokemon").html("<img src='./assets/images/pikachu.png' class='cPPic pikachu'/>");
            $("#chosenPokeName").html("<div class='chosenPokeName'>Pikachu</div>");
        }
        function enemy() {
            $("#enemyPokemon").html("<img src='./assets/images/pikachuAnimation.gif' class='ePPic'/>");
            $("#enemyPokeName").html("<div class='enemyPokeName'>Pikachu</div>");
        }
        if (hasBeenClicked == false) {
            chosen();
            hasBeenClicked = true;
            itselfP = true;
        } else {
            if (itselfP == false) {
                enemy();
            } else {
                return;
            }
        }
    });

    //Squirtle click
    $("#squirtleButton").on("click", function(){

        function chosen() {
            $("#chosenPokemon").html("<img src='./assets/images/squirtle.png' class='cPPic squirtle'/>");
            $("#chosenPokeName").html("<div class='chosenPokeName'>Squirtle</div>");
        }
        function enemy() {
            $("#enemyPokemon").html("<img src='./assets/images/squirtleAnimation.gif' class='ePPic'/>");
            $("#enemyPokeName").html("<div class='enemyPokeName'>Squirtle</div>");
        }
        if (hasBeenClicked == false) {
            chosen();
            hasBeenClicked = true;
            itselfS = true;
        } else {
            if (itselfS == false) {
                enemy();
            } else {
                return;
            }
        }
    });

    //Charmander click
    $("#charmanderButton").on("click", function(){

        function chosen() {
            $("#chosenPokemon").html("<img src='./assets/images/charmander.png' class='cPPic charmander'/>");
            $("#chosenPokeName").html("<div class='chosenPokeName'>Charmander</div>");
        }
        function enemy() {
            $("#enemyPokemon").html("<img src='./assets/images/charmanderAnimation.gif' class='ePPic'/>");
            $("#enemyPokeName").html("<div class='enemyPokeName'>Charmander</div>");
        }
        if (hasBeenClicked == false) {
            chosen();
            hasBeenClicked = true;
            itselfC = true;
        } else {
            if (itselfC == false) {
                enemy();
            } else {
                return;
            }
        }
    });

    //Bulbasaur click
    $("#bulbasaurButton").on("click", function(){

        function chosen() {
            $("#chosenPokemon").html("<img src='./assets/images/bulbasaur.png' class='cPPic bulbasaur'/>");
            $("#chosenPokeName").html("<div class='chosenPokeName'>Bulbasaur</div>");
        }
        function enemy() {
            $("#enemyPokemon").html("<img src='./assets/images/bulbasaurAnimation.gif' class='ePPic'/>");
            $("#enemyPokeName").html("<div class='enemyPokeName'>Bulbasaur</div>");
        }
        if (hasBeenClicked == false) {
            chosen();
            hasBeenClicked = true;
            itselfB = true;
        } else {
            if (itselfB == false) {
                enemy();
            } else {
                return;
            }
        }
    });



    // });
    // $("#squirtleButton").on("click", function(){
    //     $("#chosenPokemon").html("<img src='./assets/images/squirtle.png' class='cPPic'/>");
    //     $("#chosenPokeName").html("<div class='chosenPokeName'>Squirtle</div>");
    // });
    // $("#charmanderButton").on("click", function(){
    //    $("#chosenPokemon").html("<img src='./assets/images/charmander.png' class='cPPic'/>");
    //    $("#chosenPokeName").html("<div class='chosenPokeName'>Charmander</div>");
    // });
    // $("#bulbasaurButton").on("click", function(){
    //     $("#chosenPokemon").html("<img src='./assets/images/bulbasaur.png' class='cPPic'/>");
    //    $("#chosenPokeName").html("<div class='chosenPokeName'>Bulbasaur</div>");
    // });

    //Code for enemy pokemon

    // $("#pikachuButton").on("click", function(){
    //     $("#enemyPokemon").html("<img src='./assets/images/pikachuAnimation.gif' class='ePPic'/>");
    //     $("#enemyPokeName").html("<div class='enemyPokeName'>Pikachu</div>");
    // });
    // $("#squirtleButton").on("click", function(){
    //     $("#enemyPokemon").html("<img src='./assets/images/squirtleAnimation.gif' class='ePPic'/>");
    //     $("#enemyPokeName").html("<div class='enemyPokeName'>Squirtle</div>");
    // });
    // $("#charmanderButton").on("click", function(){
    //     $("#enemyPokemon").html("<img src='./assets/images/charmanderAnimation.gif' class='ePPic'/>");
    //     $("#enemyPokeName").html("<div class='enemyPokeName'>Charmander</div>");
    // });
    // $("#bulbasaurButton").on("click", function(){
    //     $("#enemyPokemon").html("<img src='./assets/images/bulbasaurAnimation.gif' class='ePPic'/>");
    //     $("#enemyPokeName").html("<div class='enemyPokeName'>Bulbasaur</div>");
    // });
//This is the end of document ready 
});