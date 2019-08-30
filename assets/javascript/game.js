//Four Crystals are displayed on the page

//how we start the functions in our jquery

//random number generator for container-1


//needed to start a js page
$(document).ready(function () {

    //variable for functions and for loops
    var counter = 0;
    var wins = 0;
    var losses = 0;
    //global math random variable
    var random = Math.floor(Math.random() * 120 + 19)
    var gem1 = Math.floor(Math.random() * 12 + 1)
    var gem2 = Math.floor(Math.random() * 12 + 1)
    var gem3 = Math.floor(Math.random() * 12 + 1)
    var gem4 = Math.floor(Math.random() * 12 + 1)

    //functions to text the wins to the wins div
    $('#wins').text(wins + "");
    $('#losses').text(losses + "");

    $("#random-button").on("click", function () {
        //var random = Math.floor(Math.random() * 50 + 11);
        $("#random-button").text(random);
    });

    //setting up clicks for each gem
    $('#yellow').on('click', function () {
        counter = counter + gem1;
        console.log("counter= " + counter);
        $('#counter').text(counter);
        //sets win/lose conditions
        if (counter == random) {
            winner();
            
        } else if (counter > random) {
            loser();
           
        }
    });

    $('#purple').on('click', function () {
        counter = counter + gem2;
        console.log("counter= " + counter);
        $('#counter').text(counter);
        //sets win/lose conditions
        if (counter == random) {
            winner();
        } else if (counter > random) {
            loser();
        }
    });

    $('#red').on('click', function () {
        counter = counter + gem3;
        console.log("counter= " + counter);
        $('#counter').text(counter);
        //sets win/lose conditions
        if (counter == random) {
            winner();
        } else if (counter > random) {
            loser();
        }
    });

    $('#orange').on('click', function () {
        counter = counter + gem4;
        console.log("counter= " + counter);
        $('#counter').html(counter);
        //sets win/lose conditions
        if (counter == random) {
            winner();
        } else if (counter > random) {
            loser();
        }
    })

    //add reset the game
    function reset() {
        randomNumber = Math.floor(Math.random() * 120 + 19)
        console.log(random)
        $('#random-button').text(randomNumber);
        gem1 = Math.floor(Math.random() * 12 + 1);
        gem2 = Math.floor(Math.random() * 12 + 1);
        gem3 = Math.floor(Math.random() * 12 + 1);
        gem4 = Math.floor(Math.random() * 12 + 1);
        counter = 0;
        $('#counter').text(counter);
    }
    //alerts for winning and losing
    function winner() {
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


});


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