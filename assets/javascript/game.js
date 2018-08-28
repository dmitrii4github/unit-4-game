var numberOfWins = 0;
var numberOfGuesses = 13;
var musicianMadonna = "M a d o n n a";
var musicianStarship = "S t a r s h i p";
var madonnaImage = "https://imgix.ranker.com/user_node_img/50040/1000793306/original/young-madonna-in-shiny-black-jacket-and-scarf-photo-u1?w=200&q=50&fm=jpg&fit=crop&crop=faces";
var madonnaSound = "assets/sounds/Frozen.mp3";
var starshipImage = "https://cbssanfran.files.wordpress.com/2017/04/starship_historical.jpg?w=200";
var starshipSound = "assets/sounds/WeBuiltThisCity.mp3";

$(document).ready(function() {

reset(0, 13, musicianStarship);

function reset(wins, g, musician) {
    
numberOfGuesses = g;
numberOfWins = wins;
var lettersGuessed = "";
var currentWord = null;
var initializePlaceholder = true;
var musicianPlaceholder = "";
var guesses = [];

var guessNumber = document.getElementById("guess_number"); 
guessNumber.textContent = "13";




document.onkeyup = function(event) {

    winsText = document.getElementById("Wins");
    winsText.textContent = numberOfWins;
    
    //alert("Setting guessNumber to "+numberOfGuesses);
    var guessNumber = document.getElementById("guess_number"); 
    guessNumber.textContent = numberOfGuesses;

    var you_won = document.getElementById("you_won");
    you_won.textContent = "";

    currentWord = document.getElementById("current_word"); 

    //Display the same number of '_' as the length of musician string
    if (initializePlaceholder) {
        for (var i=0; i<musician.length; i++) {
            if (musician[i] == " ") {
                musicianPlaceholder += " ";
            } else {
                musicianPlaceholder += "_";
            }
        }
        currentWord.textContent = musicianPlaceholder;
        initializePlaceholder = false;
    }

    // Determines which key was pressed.
    var userGuess = event.key;
    //alert(userGuess);

    if (userGuess == " ") {
        name = prompt("Enter the musician's name");
        if (compareNames(name, musician)) {
            winFunction(musician);
        }
    }


    if (guesses.indexOf(userGuess) == -1) {

        guesses.push(userGuess);
        numberOfGuesses--;

        var guessNumber = document.getElementById("guess_number"); 
        guessNumber.textContent = numberOfGuesses;

        //Display the letter
        var userGuessIndices = getAllIndices(musician, userGuess[0]);
        // alert(userGuessIndices[0]);
        // alert(userGuessIndices[1]);
        if (userGuessIndices.length != 0) {

            //First, display the musician placeholder with letters that were just guessed
            var newMusicianPlaceholder = "";
            // alert("starting loop");
            // alert("'"+musicianPlaceholder+"'");
            // alert("'"+newMusicianPlaceholder+"'");
            for (var i=0; i<musicianPlaceholder.length; i++) {
                if ((userGuessIndices.indexOf(i) != -1) || ((musicianPlaceholder[i] != "_") && (musicianPlaceholder[i] != " "))) {
                    newMusicianPlaceholder += musician[i];
                } else if (musicianPlaceholder[i] == "_") {
                    newMusicianPlaceholder += "_";
                } else {
                    newMusicianPlaceholder += " ";
                }
                // alert(newMusicianPlaceholder);
            }

            musicianPlaceholder = newMusicianPlaceholder;
        }   
        // alert(musicianPlaceholder);
        currentWord.textContent = musicianPlaceholder;

        // display what letters have been guessed
        lettersGuessed += userGuess;
        lettersGuessed += " ";
        var lettersGuessedDiv = document.getElementById("letters_guessed");
        lettersGuessedDiv.textContent = lettersGuessed;

        if (musicianPlaceholder == musician) {
            winFunction(musician);
        }
    }

    if (numberOfGuesses == 0) {
        loseFunction();
    }
}

}

function getAllIndices(arr, val) {
    var indices = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indices.push(i);
    }
    return indices;
}

function winFunction(m) {
    var guessNumber = document.getElementById("guess_number"); 
    guessNumber.textContent = "13";
    //alert("You won!");
    var you_won = document.getElementById("you_won");
    you_won.textContent = "YOU WON!!!!!"
    var winsString = document.getElementById("Wins");
    numberOfWins++;
    winsString.textContent = numberOfWins;
    var letters_guessed = document.getElementById("letters_guessed");
    letters_guessed.textContent = "";
    var audioElement = document.createElement("audio");
    var nameOfBand = document.getElementById("name-of-band");
    var img = document.createElement("IMG");
    if (m == "M a d o n n a") {
        nameOfBand.textContent = "FROZEN BY MADONNA";
        img.src = madonnaImage;
        document.getElementById('band-photo').appendChild(img);
        audioElement.setAttribute("src", madonnaSound);
        audioElement.play();
    } else {
        nameOfBand.textContent = "WE BUILT THIS CITY BY STARSHIP";
        img.src = starshipImage;
        document.getElementById('band-photo').appendChild(img);
        audioElement.setAttribute("src", starshipSound);
        audioElement.play();
    }
    confirm("Would you like to guess another mucisician?");
    audioElement.pause();
    nameOfBand.textContent = "";
    document.getElementById('band-photo').removeChild(img);
    reset(numberOfWins, 13, musicianMadonna);
}

function loseFunction() {
    var guessNumber = document.getElementById("guess_number"); 
    guessNumber.textContent = "13";
    //alert("You won!");
    var you_won = document.getElementById("you_won");
    you_won.textContent = "YOU LOST!!!!!"
    var letters_guessed = document.getElementById("letters_guessed");
    letters_guessed.textContent = "";
    reset(numberOfWins, 13);
}

function compareNames(name, musician) {
    for (var i=0, k=0; i<name.length, k<musician.length; i++, k+=2) {
        if (name[i] == musician[k]){
            continue;
        } else {
            return false;
        }
    }
    return true;
}

});

