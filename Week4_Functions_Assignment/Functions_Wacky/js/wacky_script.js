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

//3 matches, so we need 3 prompts
//validate each prompt
/*
var match1 = prompt("Did the team win, draw, or lose match one?");
while(match1===""){
  var match1 = prompt("Make sure to enter a result!");
}
var match2 = prompt("Did the team win, draw, or lose match two?");
while(match2===""){
  var match2 = prompt("Make sure to enter a result!");
}
var match3 = prompt("Did the team win, draw, or lose match three?");
while(match3===""){
  var match3 = prompt("Make sure to enter a result!");
}
*/
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
var team2Name = prompt("What country is the fourth team?");
while(team2Name===""){
  var team2Name = prompt("Make sure to enter a team name!");
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
  var points = 3;
}  else if(team1 === "draw"){
  var points = 1;
}  else{
  var points = 0;
}
console.log(points);
teamOnePoints += points;

}
console.log(teamOnePoints);

/********
Team Two!
********/
var teamTwoPoints = 0;

for(var i = 0; i < 3; i++){
var team2 = prompt("Did the team win, draw, or lose the match?");
while(team2===""){
  var team2 = prompt("Make sure to enter a result!");
}

if(team2 === "win"){
  var points = 3;
}  else if(team2 === "draw"){
  var points = 1;
}  else{
  var points = 0;
}
console.log(points);
teamTwoPoints += points;

}
console.log(teamTwoPoints);

/**********
Team Three!
**********/
var teamThreePoints = 0;

for(var i = 0; i < 3; i++){
var team3 = prompt("Did the team win, draw, or lose the match?");
while(team3===""){
  var team3 = prompt("Make sure to enter a result!");
}

if(team3 === "win"){
  var points = 3;
}  else if(team3 === "draw"){
  var points = 1;
}  else{
  var points = 0;
}
console.log(points);
teamThreePoints += points;

}
console.log(teamThreePoints);

/*********
Team Four!
*********/
var teamFourPoints = 0;

for(var i = 0; i < 3; i++){
var team4 = prompt("Did the team win, draw, or lose the match?");
while(team4===""){
  var team4 = prompt("Make sure to enter a result!");
}

if(team4 === "win"){
  var points = 3;
}  else if(team4 === "draw"){
  var points = 1;
}  else{
  var points = 0;
}
console.log(points);
teamFourPoints += points;

}
console.log(teamFourPoints);
