//Four Crystals are displayed on the page

//how we start the functions in our jquery

//random number generator for container-1
$(document).ready(function() {
$("#random-button").on("click", function() {
    var random = Math.floor(Math.random() * 50 + 11);
    $("#random-button").text(random);
    });
});

//creating random number for each gem between 1-12
var totalScore = 0
var counter = 0;
var wins = 0;
var losses = 0;
var Random=Math.floor(Math.random() *50 + 11)
var gem1 = Math.floor(Math.random()*11+1)
var gem2 = Math.floor(Math.random()*11+1)
var gem3 = Math.floor(Math.random()*11+1)
var gem4 = Math.floor(Math.random()*11+1)

$('#wins').text(wins);
$('#losses').text(losses);

//alerts for winning and losing
function wins () {
    alert ("You Won!");
    wins++;
    $('#numberWins').html(wins);
  reset();
}

function losses () {
    alert ("You lose!");
    losses++;
    $('#numberLosses').html(losses);
  reset()
}
//setting up clicks for each gem
    $('#yellow').on ('click', function(){
        totalScore = totalScore + gem1;
        console.log("New totalScore= " + totalScore);
        $('#totalScore').text(counter); 
          //sets win/lose conditions
            if (totalScore == Random){
          yay();
        }
            else if ( totalScore > Random){
            loser();
            }
    })  
    $('#purple').on ('click', function(){
        totalScore = totalScore + gem2;
        console.log("New totalScore= " + totalScore);
            $('#totalScore').text(counter); 
                //sets win/lose conditions
        if (totalScore == Random){
                yay();
        }
        else if ( totalScore > Random){
                loser();
        }
    })  
    $('#red').on ('click', function(){
        totalScore = totalScore + gem3;
        console.log("wins= " + totalScore);
            $('#totalScore').text(counter); 
                //sets win/lose conditions
        if (totalScore== Random){
                yay();
        }
        else if ( totalScore > Random){
                loser();
        }
    })   

    $('#orange').on ('click', function(){
        totalScore = totalScore + gem4;
        console.log("New totalScore= " + totalScore);
            $('#totalScore').text(totalScore); 
                //sets win/lose conditions
        if (totalScore == Random){
                yay();
        }
        else if ( totalScore > Random){
                loser();
        }
    });

//add reset the game
function reset(){
    Random=Math.floor(Math.random() * 50 + 11)
    console.log(Random)
    $('#random-button').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#').text(counter);
    } 




// $("#yellow").on("click", function() {
//     var random = Math.floor(Math.random() * 11 +1)
//     +1;
//     $("#yellow").html(random);
//     alert (random);
//    });




//Player will click on any crystal which will add to the score
//The specific amount assigned to the crystal will be assigned to the score counter
//The player wins if the score counter is === the random number shown at the start
//Else the player loses if their score goes above the random number
//Restart the game each time the player wins or loses **do not use refresh to restart**
//Restart game so that only the users score and score counter reset to zero 
//display the number of wins and losses 
//Display number of wins and losses continuously
//Player will start the game by pressing any key
//Random number for a score goal will appear and be on a loop to change each time the game restarts
//All four crystals are randomly assigned different points at the beginning of each game 


