var numberOfWins = 0;
var numberOfLosses = 0;
var counter = 0;
var targetNumber = 0;
var numberOptions = [10, 5, 3, 7];
//var crystalValue = [];

$(document).ready(function() {

reset();

function reset() { 

    $(".crystal-image").unbind("click");
    
    numberOptions = [10, 5, 3, 7];

    $("#total-score").text("0");

//document.onkeyup = function(event) {

    targetNumber = Math.floor(Math.random()*100)+19;

    $("#random-number").text(targetNumber);

    counter = 0;

    $("#total-score").text(0);

    // Now for the hard part. Creating multiple crystals each with their own unique number value.
    // We begin by expanding our array to include four options.
    

    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 3; i >= 0; i--) {        
        //var option = Math.floor(Math.random()*4);
        //alert(option);    
        var crystalValueToSet = removeAtRandomPosition(i+1);
        //alert("Set crystal #"+i+" to "+crystalValueToSet);
        switch (i) {
            case 0:
                $("#crystal0").removeAttr("data-crystalvalue");
                $("#crystal0").attr("data-crystalvalue", crystalValueToSet);
                break;                
            case 1:
                $("#crystal1").removeAttr("data-crystalvalue");
                $("#crystal1").attr("data-crystalvalue", crystalValueToSet);
                break;
            case 2:
                $("#crystal2").removeAttr("data-crystalvalue");
                $("#crystal2").attr("data-crystalvalue", crystalValueToSet);
                break;
            case 3:
                $("#crystal3").removeAttr("data-crystalvalue");
                $("#crystal3").attr("data-crystalvalue", crystalValueToSet);
                break;
        }
        
    }

  // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function() {
 
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    //alert("crystalValue:"+crystalValue);
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);

    $("#total-score").text(counter);

    if (counter == targetNumber) {
      //alert("You win!");
      numberOfWins++;
      $("#wins").text(numberOfWins);
      reset();
    }

    else if (counter > targetNumber) {
      //alert("You lose!!");
      numberOfLosses++;
      $("#losses").text(numberOfLosses);
      reset();
    }

});

}

});

function removeAtRandomPosition(lengthOfArray) {
    var indexToRemove = Math.floor(Math.random()*lengthOfArray);
    //alert("indexToRemove:"+indexToRemove);
    var toReturn = numberOptions.splice(indexToRemove, 1);
    //alert("toReturn:"+toReturn);
    return toReturn;
}