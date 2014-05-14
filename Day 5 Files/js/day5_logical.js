/*
Cory Wilson
WPF Section 01
Locigal Operators
*/

//Logical Operators

//If the price of the iPad is less than or equal to our budget
//AND if our paycheck is over $600


var budget = 700;
var iPadPrice = 499.99;
var paycheck = 700;

// AND && - both must be true

if(iPadPrice <= budget && paycheck > 600){
  //Runs if is TRUE
  console.log("You can buy the iPad! Such Proud! Much Wow!");
}
else{
  console.log("No iPad for you sucka!");
}
