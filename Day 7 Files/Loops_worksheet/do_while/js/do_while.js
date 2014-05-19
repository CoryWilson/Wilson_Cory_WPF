/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 For Loops
***************************************/

//Initialized Variables
var var1=Number(prompt("Variable 1 "));
var var2=Number(prompt("Variable 2 "));

//Setup the do while loop
do{
  console.log("Stuff goes in here "+var1+".");
  //Changing the value of the variable to avoid an infinite loop
  var1++;
}
while(var1<var2); //Condition to test
