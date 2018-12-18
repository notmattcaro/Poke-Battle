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

//Global Variables for Pokemon Button Selector
    var hasBeenClicked = false;
    var enemyClicked = false;

//Global Variables for Attack 
    var myHealthPoints = 100;
    var enemiesHealthPoints = 100;

//Global Flags to prevent attack button from selecting until both a Chosen and Enemy Pokemon are filled
    var itselfP = false;
    var itselfS = false;
    var itselfC = false;
    var itselfB = false;

//Global Selector for Element Types for Super Effective Attacks
    var electric = false;
    var water = false;
    var fire = false;
    var grass = false;

    var electricEnemy = false;
    var waterEnemy = false;
    var fireEnemy = false;
    var grassEnemy = false;

//Health points beginning set
    $('#myHealthPoints').html(myHealthPoints);
    $('#enemiesHealthPoints').html(enemiesHealthPoints);

//Alerts player whether or not super effective
function attackAlerts() {
    if ((electric == true && waterEnemy == true) || (water == true && fireEnemy == true) || (fire == true && grassEnemy == true) || (grass == true && electricEnemy == true)) {
        alert("Your attacks will be Super Affective!");
    } else if ((electricEnemy == true && water == true) || (waterEnemy == true && fire == true) || (fireEnemy == true && grass == true) || (grassEnemy == true && electric == true)) {
        alert("Watch out! Your enemies attacks are Super Affective!")
    }
}

//Code for Chosen Pokemon and Enemy Pokemon

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
            electric = true;
        } else {
            if (itselfP == false) {
                enemy();
                enemyClicked = true;
                electricEnemy = true;
            } else {
                return;
            }
        }
        attackAlerts();
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
            water = true;
        } else {
            if (itselfS == false) {
                enemy();
                enemyClicked = true;
                waterEnemy = true;
            } else {
                return;
            }
        }
        attackAlerts();
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
            fire = true;
        } else {
            if (itselfC == false) {
                enemy();
                enemyClicked = true;
                fireEnemy = true;
            } else {
                return;
            }
        }
        attackAlerts();
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
            grass = true;
        } else {
            if (itselfB == false) {
                enemy();
                enemyClicked = true;
                grassEnemy = true;
            } else {
                return;
            }
        }
        attackAlerts();
    });

//Attack button functions
    $('#attack').on('click', function(){
        if (hasBeenClicked == false || enemyClicked == false) {
            return;
        } else {
            var damage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var superDamage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

            if ((electric == true && waterEnemy == true) || (water == true && fireEnemy == true) || (fire == true && grassEnemy == true) || (grass == true && electricEnemy == true)) {
                function SuperAttackE() {
                    // do random damage to enemy || chosen pokemon
                    var i = Math.floor(Math.random()*superDamage.length);
                    enemiesHealthPoints = enemiesHealthPoints - superDamage[i];
                    if (enemiesHealthPoints >= 0) {
                        $('#enemiesHealthPoints').html(enemiesHealthPoints);
                    } else {
                        $('#enemiesHealthPoints').html('K.0.');
                        alert("You Win!!");
                    }
                }
                SuperAttackE();
            } else {
                function attackE() {
                    // do random damage to enemy || chosen pokemon
                    var i = Math.floor(Math.random()*damage.length);
                    enemiesHealthPoints = enemiesHealthPoints - damage[i];
                    if (enemiesHealthPoints >= 0) {
                        $('#enemiesHealthPoints').html(enemiesHealthPoints);
                    } else {
                        $('#enemiesHealthPoints').html('K.0.');
                        alert("You Win!!");
                    }
                }
                attackE();
            }
            if ((electricEnemy == true && water == true) || (waterEnemy == true && fire == true) || (fireEnemy == true && grass == true) || (grassEnemy == true && electric == true)) { 
                function SuperAttackM() {
                    // do random damage to enemy || chosen pokemon
                    var i = Math.floor(Math.random()*superDamage.length);
                    myHealthPoints = myHealthPoints - superDamage[i];
                    if (myHealthPoints >= 0) {
                        $('#myHealthPoints').html(myHealthPoints);
                    } else {
                        $('#myHealthPoints').html('K.0.');
                        alert("You Lose!!");
                    }
                }
                SuperAttackM();
            } else {
                function attackM() {
                    // do random damage to enemy || chosen pokemon
                    var i = Math.floor(Math.random()*damage.length);
                    myHealthPoints = myHealthPoints - damage[i];
                    if (myHealthPoints >= 0) {
                        $('#myHealthPoints').html(myHealthPoints);
                    } else {
                        $('#myHealthPoints').html('K.0.');
                        alert("You Lose!!");
                    }
                }
                attackM();
            }
        }
    });

//Reset button
    $('#reset').on("click", function(){
        hasBeenClicked = false;
        enemyClicked = false; 
        myHealthPoints = 100;
        enemiesHealthPoints = 100;
        $('#myHealthPoints').html(myHealthPoints);
        $('#enemiesHealthPoints').html(enemiesHealthPoints);
        itselfP = false;
        itselfS = false;
        itselfC = false;
        itselfB = false;
        electric = false;
        water = false;
        fire = false;
        grass = false;
        electricEnemy = false;
        waterEnemy = false;
        fireEnemy = false;
        grassEnemy = false;
        $("#chosenPokemon").html("");
        $("#chosenPokeName").html("Chosen Pokemon");
        $("#enemyPokemon").html("");
        $("#enemyPokeName").html("Enemy Pokemon");
    });
//This is the end of document ready 
});