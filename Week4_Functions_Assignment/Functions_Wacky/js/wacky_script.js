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
/*var match1 = prompt("Did the team win, draw, or lose match one?");
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

//function that returns the points for a win
var win = function(result){
  var points = "win";
  points = 3;
  return points;
}
//function that returns the points for a draw
var draw = function(result){
  var points = "draw";
  points = 1;
  return points;
}
//function that returns points for a loss
var loss = function(result){
   var points = "loss";
   points = 0;
   return points;
}

/*
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
*/
for(var i=0; i<3; i++){
  var match = prompt("Did the team win, draw, or lose match one?");
  while(match===""){
    var match = prompt("Make sure to enter a result!");
  }
  if(match==="win"){
    var results = win(match);
  } else if(match==="draw"){
    var results = draw(match);
  } else{
    var results = loss(match);
  }
  console.log(results);
  var newResult = results + results;
  console.log(newResult);
}
/*
if(match1==="win"){
  var results = win(match1);
} else if(match1==="draw"){
  var results = draw(match1);
} else{
  var results = loss(match1);
}
console.log(results);

if(match2==="win"){
  var results = win(match2);
} else if(match2==="draw"){
  var results = draw(match2);
} else{
  var results = loss(match2);
}

results += results;
console.log(results);

if(match3==="win"){
  var results = win(match3);
} else if(match3==="draw"){
  var results = draw(match3);
} else{
  var results = loss(match3);
}

results += results;
console.log(results);
*/
