/*
Cory Wilson
5/14/14
WPF Section 1
Day 5 Examples
*/

//Basic Conditional - If Statement

//If a child is tall enough, print to the console that he can ride a roller coaster

//var tallEnough = true;

/*
if(thing to evaluate){
  Code to run, if it is true!
}
*/

/*
if(tallEnough) {
  //Code will run if the kid is tall enough
  console.log("You can ride the roller coaster!");
}
else {
  //Code will run if the kid is NOT tall enough
  console.log("Sorry kid, you are not tall enough. :(");
}
*/

//Relational Expressions

//If a child is not over 48" tall, then he can't ride

var kidHeight = 46;

var minHeight = 48;

var sneakerLift = 2;

if(kidHeight + sneakerLift >= minHeight){
  //Code will run if the kid is tall enough
  console.log("Yeah, hop on dawg.");
}
  //Code will run if the kid is NOT tall enough
else{
  console.log("You're not tall enough brah...");
}

console.log("What comes after?");
