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

//function win - 3 points
//function draw - 1 point
//function loss - 0 points
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
//Loop that runs 3 times, asking once for each individal match played by the team.
for(var i = 0; i < 3; i++){

var team1 = prompt("Did team "+team1Name+" win, draw, or lose the match?");
while(team1===""){
  var team1 = prompt("Make sure to enter a result!");
}
//compare results to win, draw, or loss
//provide corresponding points value through use of function call
if(team1 === "win"){
  var points = win();
}  else if(team1 === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
//add points from win to total points value
teamOnePoints += points;

}

//call out total points value and team name points value
console.log(team1Name+" finished the group stage with a total of "+teamOnePoints+" points.");



/********
Team Two!
********/
var teamTwoPoints = 0;
//Loop that runs 3 times, asking once for each individal match played by the team.
for(var j = 0; j < 3; j++){

var team2 = prompt("Did team "+team2Name+" win, draw, or lose the match?");
while(team2===""){
  var team2 = prompt("Make sure to enter a result!");
}
//compare results to win, draw, or loss
//provide corresponding points value through use of function call
if(team2 === "win"){
  var points = win();
}  else if(team2 === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
//add points from win to total points value
teamTwoPoints += points;

}
//call out total points value and team name points value
console.log(team2Name+" finished the group stage with a total of "+teamTwoPoints+" points.");
/**********
Team Three!
**********/
var teamThreePoints = 0;

//Loop that runs 3 times, asking once for each individal match played by the team.
for(var l = 0; l < 3; l++){

var team3 = prompt("Did team "+team3Name+"  win, draw, or lose the match?");
while(team3===""){
  var team3 = prompt("Make sure to enter a result!");
}
//compare results to win, draw, or loss
//provide corresponding points value through use of function call
if(team3 === "win"){
  var points = win();
}  else if(team3 === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
//add points from win to total points value
teamThreePoints += points;

}
//call out total points value and team name points value
console.log(team3Name+" finished the group stage with a total of "+teamThreePoints+" points.");
/*********
Team Four!
*********/
var teamFourPoints = 0;

//Loop that runs 3 times, asking once for each individal match played by the team.
for(var k = 0; k < 3; k++){

var team4 = prompt("Did team "+team4Name+" win, draw, or lose the match?");
while(team4===""){
  var team4 = prompt("Make sure to enter a result!");
}
//compare results to win, draw, or loss
//provide corresponding points value through use of function call
if(team4 === "win"){
  var points = win();
}  else if(team4 === "draw"){
  var points = draw();
}  else{
  var points = loss();
}
//add points from win to total points value
teamFourPoints += points;

}
//call out total points value and team name points value
console.log(team4Name+" finished the group stage with a total of "+teamFourPoints+" points.");

//store results in an array so they can be compared
var teamResultsArray = [teamOnePoints, teamTwoPoints, teamThreePoints, teamFourPoints];
//find the team with the most points by finding the max value in the array.
var groupWinner = Math.max.apply(Math,teamResultsArray);
console.log("The team that won the group stage ended up with "+groupWinner+ " points.");
