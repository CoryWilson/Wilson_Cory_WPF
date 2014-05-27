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

function win(){
  var result = 3;
  return result;
}

function draw(){
  var result = 1;
  return result;
}

function loss(){
  var result = 0;
  return result;
}

alert("Let's figure out how the group stage of the world cup ended up.");

//team enters win -> pull win function -> adds to total
//team enters draw -> pull draw function -> adds to total
//team enters loss -> pull loss function -> adds to total
var team1Name = prompt("What country is the first team?");
while(team1Name===""){
  var team1Name = prompt("Make sure to enter a team name!");
}
var team2Name = prompt("What country is the second team?");
while(team2Name===""){
  var team2Name = prompt("Make sure to enter a team name!");
}
var team3Name = prompt("What country is the third team?");
while(team3Name===""){
  var team3Name = prompt("Make sure to enter a team name!");
}
var team4Name = prompt("What country is the fourth team?");
while(team4Name===""){
  var team4Name = prompt("Make sure to enter a team name!");
}


/********
Team One!
********/
var teamOnePoints = 0;

for(var i = 0; i < 3; i++){
var team1 = prompt("Did team "+team1Name+" win, draw, or lose the match?");
while(team1===""){
  var team1 = prompt("Make sure to enter a result!");
}

if(team1 === "win"){
  var points = win();
}  else if(team1 === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
console.log(points);
teamOnePoints += points;

}
console.log(team1Name+" finished the group stage with a total of "+teamOnePoints+" points.");

/********
Team Two!
********/
var teamTwoPoints = 0;

for(var i = 0; i < 3; i++){
var team2 = prompt("Did team "+team2Name+" win, draw, or lose the match?");
while(team2===""){
  var team2 = prompt("Make sure to enter a result!");
}

if(team2 === "win"){
  var points = win();
}  else if(team2 === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
console.log(points);
teamTwoPoints += points;

}
console.log(team2Name+" finished the group stage with a total of "+teamTwoPoints+" points.");
/**********
Team Three!
**********/
var teamThreePoints = 0;

for(var i = 0; i < 3; i++){
var team3 = prompt("Did team "+team3Name+"  win, draw, or lose the match?");
while(team3===""){
  var team3 = prompt("Make sure to enter a result!");
}

if(team3 === "win"){
  var points = win();
}  else if(team3 === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
console.log(points);
teamThreePoints += points;

}
console.log(team3Name+" finished the group stage with a total of "+teamThreePoints+" points.");
/*********
Team Four!
*********/
var teamFourPoints = 0;

for(var i = 0; i < 3; i++){
var team4 = prompt("Did team "+team4Name+" win, draw, or lose the match?");
while(team4===""){
  var team4 = prompt("Make sure to enter a result!");
}

if(team4 === "win"){
  var points = win();
}  else if(team4 === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
console.log(points);
teamFourPoints += points;

}
console.log(team4Name+" finished the group stage with a total of "+teamFourPoints+" points.");
