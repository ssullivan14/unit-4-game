//Four Crystals are displayed on the page

//how we start the functions in our jquery

//random number generator for container-1
$(document).ready(function () {
    $("#random-button").on("click", function () {
        var random = Math.floor(Math.random() * 50 + 11);
        $("#random-button").text(random);
    });
});

//creating random number for each gem between 1-12

var counter = 0;
var wins = 0;
var losses = 0;
var Random = Math.floor(Math.random() * 50 + 11)
var gem1 = Math.floor(Math.random() * 11 + 1)
var gem2 = Math.floor(Math.random() * 11 + 1)
var gem3 = Math.floor(Math.random() * 11 + 1)
var gem4 = Math.floor(Math.random() * 11 + 1)

$('#wins').text(wins + "");
$('#losses').text(losses + "");

//alerts for winning and losing
function wins() {
    alert("You Won!");
    wins++;
    $('#wins').text(wins);
    reset();
}

function loser() {
    alert("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
}
//setting up clicks for each gem
$('#yellow').on('click', function () {
    counter = counter + gem1;
    console.log("counter= " + counter);
    $('#counter').text(counter);
    //sets win/lose conditions
    if (counter === Random) {
        wins();
    } 
    else if (counter > Random) {
        loser();
    }
})
$('#purple').on('click', function () {
    counter = counter + gem2;
    console.log("counter= " + counter);
    $('#counter').html(counter);
    //sets win/lose conditions
    if (counter === Random) {
        wins();
    } else if (counter > Random) {
        losses();
    }
})
$('#red').on('click', function () {
    counter = counter + gem3;
    console.log("counter= " + counter);
    $('#counter').html(counter);
    //sets win/lose conditions
    if (counter === Random) {
        wins();
    } else if (counter > Random) {
        losses();
    }
})

$('#orange').on('click', function () {
    counter = counter + gem4;
    console.log("counter= " + counter);
    $('#counter').html(counter);
    //sets win/lose conditions
    if (counter === Random) {
        wins();
    } else if (counter > Random) {
        losses();
    }
});


//add reset the game
// function reset() {
//     Random = Math.floor(Math.random() * 50 + 11)
//     console.log(Random)
//     $('#random-button').text(Random);
//     gem1 = Math.floor(Math.random() * 11 + 1);
//     gem2 = Math.floor(Math.random() * 11 + 1);
//     gem3 = Math.floor(Math.random() * 11 + 1);
//     gem4 = Math.floor(Math.random() * 11 + 1);
//     userTotal = 0;
//     $('#').text(totalScore);
// }





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