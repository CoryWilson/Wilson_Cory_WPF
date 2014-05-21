/*************************
Cory Wilson
WPF Section 1
05/21/14
Day 8 Functions Worksheet
*************************/

/**************************************************************
Circumference
**************************************************************/

//Create a function to find the circumference of a circle.
//Circumference = 2*PI*radius
//name function circleCirc
//provide parameter of radius
function circleCirc(radius){
  //calculate circumference
  var circumference = 2*Math.PI*radius;
  //return circumference
  return circumference;
}

//Alert the user to what we are doing
alert("Let's find the circumference of a circle!");

//Catch the returned value from the function
//Create a variable to hold the results
var userInput = Number(prompt("What is the radius of the circle?"));
//Validate the prompt to make sure the user input a number
while(isNaN(userInput) || userInput===""){
  //Its a text string, prompt again for a number
  userInput = Number(prompt("Please type in a NUMBER for radius!"));
}

//call the circleCirc function and store it in result
//print out result
var result = circleCirc(userInput);
console.log("The circumference of the circle is "+result+".");


/**************************************************************
Stung!
**************************************************************/

//It takes 8.666666667 bee stings per pound to kill an animal.
//Calculate how many bee stings are needed to kill an animal in a function.

//Given
//victim's weight (in lbs)

//Return
//# of bee stings

//function that tells you number of bee stings it takes to kill an animal

// numOfStings = weight / 8.666666667
var stingsPerPound = 8.666666667;

function beeStings(weight){
  var numOfStings = weight/stingsPerPound;
  return numOfStings;
}

var stingResult = beeStings(150);
console.log("It takes "+stingResult+" bee stings to kill this animal.");
