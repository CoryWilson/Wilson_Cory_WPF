/***************************
Cory Wilson
WPF Section 1
05/23/14
Functions Assignment - Wacky
***************************/

//Fifa World Cup Question
//Group Stage Thingy

//4 Teams
//3 Matches

//function loss - 0 points
//function draw - 1 point
//function win - 3 points

//user inputs results
//validate prompts
var match1 = prompt("Did the team win, draw, or lose match one?");
while(match1===""){
  var match1 = prompt("Make sure to enter a result!");
}
var match2 = prompt("Did the team win, draw, or lose match two?");
while(match2===""){
  var match1 = prompt("Make sure to enter a result!");
}
var match3 = prompt("Did the team win, draw, or lose match three?");
while(match3===""){
  var match3 = prompt("Make sure to enter a result!");
}
//function that returns points for a loss
var loss = function(){
   var points = 0;
   return points;
}
//function that returns the points for a draw
var draw = function(){
  var points = 1;
  return points;
}
//function that returns the points for a win
var win = function(){
  var points = 3;
  return points;
}

for(var i = 0; i<3; i++){

}
