var numberOfWins = 0;
var numberOfLosses = 0;
var counter = 0;

$(document).ready(function() {

reset();

function reset() {    

    $("#total-score").text("0");

//document.onkeyup = function(event) {

    var targetNumber = Math.floor(Math.random()*100)+19;

    $("#random-number").text(targetNumber);

    counter = 0;

    // Now for the hard part. Creating multiple crystals each with their own unique number value.
    // We begin by expanding our array to include four options.
    var numberOptions = [10, 5, 3, 7];
    var crystalValue = [];

    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {        
        var option = Math.floor(Math.random()*4);
        alert(option);    
        crystalValue[i] = numberOptions[option];
        switch (i) {
            case 0:
                $("#crystal0").attr("data-crystalvalue", crystalValue[0]);                
            case 1:
                $("#crystal1").attr("data-crystalvalue", crystalValue[1]);
            case 2:
                $("#crystal2").attr("data-crystalvalue", crystalValue[2]);
            case 3:
                $("#crystal3").attr("data-crystalvalue", crystalValue[3]);
        }
        alert("Set crystal #"+i+" to "+crystalValue[i]);
    }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    $("#total-score").text(counter);

    if (counter == targetNumber) {
      alert("You win!");
      numberOfWins++;
      $("#wins").text(numberOfWins);
      reset();
    }

    else if (counter > targetNumber) {
      alert("You lose!!");
      numberOfLosses++;
      $("#losses").text(numberOfLosses);
      reset();
    }

});

}

});




// function winFunction(m) {
//     var guessNumber = document.getElementById("guess_number"); 
//     guessNumber.textContent = "13";
//     //alert("You won!");
//     var you_won = document.getElementById("you_won");
//     you_won.textContent = "YOU WON!!!!!"
//     var winsString = document.getElementById("Wins");
//     numberOfWins++;
//     winsString.textContent = numberOfWins;
//     var letters_guessed = document.getElementById("letters_guessed");
//     letters_guessed.textContent = "";
//     var audioElement = document.createElement("audio");
//     var nameOfBand = document.getElementById("name-of-band");
//     var img = document.createElement("IMG");
//     if (m == "M a d o n n a") {
//         nameOfBand.textContent = "FROZEN BY MADONNA";
//         img.src = madonnaImage;
//         document.getElementById('band-photo').appendChild(img);
//         audioElement.setAttribute("src", madonnaSound);
//         audioElement.play();
//     } else {
//         nameOfBand.textContent = "WE BUILT THIS CITY BY STARSHIP";
//         img.src = starshipImage;
//         document.getElementById('band-photo').appendChild(img);
//         audioElement.setAttribute("src", starshipSound);
//         audioElement.play();
//     }
//     confirm("Would you like to guess another mucisician?");
//     audioElement.pause();
//     nameOfBand.textContent = "";
//     document.getElementById('band-photo').removeChild(img);
//     reset(numberOfWins, 13, musicianMadonna);
// }

// function loseFunction() {
//     var guessNumber = document.getElementById("guess_number"); 
//     guessNumber.textContent = "13";
//     //alert("You won!");
//     var you_won = document.getElementById("you_won");
//     you_won.textContent = "YOU LOST!!!!!"
//     var letters_guessed = document.getElementById("letters_guessed");
//     letters_guessed.textContent = "";
//     reset(numberOfWins, 13);
// }

// function compareNames(name, musician) {
//     for (var i=0, k=0; i<name.length, k<musician.length; i++, k+=2) {
//         if (name[i] == musician[k]){
//             continue;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }


