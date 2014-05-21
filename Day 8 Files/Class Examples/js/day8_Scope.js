/***************************************
Cory Wilson
WPF Section 1
05/21/14
Day 8 Scope
***************************************/

//Variable Scope
//Variables inside & outside of a function

//Try not to use the same variable names...BUT
//This is going to be the impossible in LARGE files

//Create a variable for Width in our MAIN code
var width = 5;

//Create a function that calculates the perimeter of a rectangle
function calcPeri(){
  width = 28;
  console.log(width);
}

console.log("Before Call "+width);
calcPeri();

console.log("After Call "+width);
