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
for(var i=0; i<3; i++){
var match = prompt("Did the team win, draw, or lose match one?");
while(match===""){
  var match = prompt("Make sure to enter a result!");
}

/*
var match2 = prompt("Did the team win, draw, or lose match two?");
while(match2===""){
  var match1 = prompt("Make sure to enter a result!");
}
var match3 = prompt("Did the team win, draw, or lose match three?");
while(match3===""){
  var match3 = prompt("Make sure to enter a result!");
}
*/

//team enters win -> pull win function -> adds to total
//team enters draw -> pull draw function -> adds to total
//team enters loss -> pull loss function -> adds to total


function result(match){

  if(match==="win"){
    var points = 3;
  } else if(match==="draw"){
    var points = 1;
  } else{
    var points = 0;
  }
  return points;
}

var matchResults = result(match);

for(var i = 0; i < 3; i++){
  matchResults += matchResults;
  console.log(matchResults);
}
}
/*
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
*/
