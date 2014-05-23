/*******************
Cory Wilson
WPF Section 1
05/23/14
Day 9 Random Numbers
*******************/

//Create a function that will give a random integer

function randomizer(mn,mx){ //Use Parameters

  //Generate a random integer and RETURN it back

  //Create a variable to hold our random integer
  var randomNum = Math.round(Math.random()*(mx-mn)+mn);

  //Return the random integer
  return randomNum;

}

//Function call this randomizer

//NEED a variable to catch the returned value
var result = randomizer(20,100); //NEED arguments

//Console log it out
console.log(result);
