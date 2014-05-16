/***************************************
Cory Wilson
WPF Section 1
05/16/14
Day 6 Examples
Nesting If Statements
***************************************/

//Some Decisions affect other decisions

//If it is warm outside, lets go to the beach.
//If it is not...lets go to the movies!

//If the water is warm, I'm going in the water.
//If the water is not warm, I'm going to get a tan.


//Create variable for outside temp.
var temp = 90; //degrees

//Water temp
var waterTemp = 78; //degrees

if (temp >= 85){
  console.log("Let's go to the beach!");
}
else{
  console.log("Let's go to the movies!");
}

if(waterTemp >= 75){
  console.log("I'm going in the water!");
}
else{
  console.log("Let's get a tan.");
}
