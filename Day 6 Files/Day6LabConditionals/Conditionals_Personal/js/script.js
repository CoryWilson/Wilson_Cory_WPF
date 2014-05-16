/***************************************
Cory Wilson
WPF Section 1
05/16/14
Day 6 Conditionals Assignment - Personal
***************************************/

//Personal Example

//You told us not to worry about validation :P

//utilize a ternary in here somewhere


//Did you break par in your round of golf?

//Givens:
//Par for the golf course
//Score shot for your round


//need two givens at least
var coursePar = Number(prompt("What is the par for the golf course?"));
var scoreShot = Number(prompt("What did you shoot for your round today?"));

if(scoreShot < coursePar){
  console.log("Congrats! You have broken par! Excellent round.");
}
else if(scoreShot = coursePar){
  console.log("Almost, you shot par. Still an great round.");
}
else{
  console.log("Sorry, you shot over par. Go practice some more.");
}
