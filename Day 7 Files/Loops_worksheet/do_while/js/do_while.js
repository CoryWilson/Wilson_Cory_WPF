/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 Do While Loops
***************************************/

//Initialized Variables
var var1=Number(prompt("Insert a number in here:"));
//Validate Prompt
while(isNaN(var1) || var1===""){
  //Its a text string, prompt again for a number
  var1 = Number(prompt("Please type in a NUMBER!"));
}
var var2=Number(prompt("Insert another number in here:"));
//Validate Prompt
while(isNaN(var2) || var2===""){
  //Its a text string, prompt again for a number
  var2 = Number(prompt("Please type in a NUMBER!"));
}
//Setup the do while loop
do{
  console.log("Stuff goes in here "+var1+".");
  //Changing the value of the variable to avoid an infinite loop
  var1++;
}
while(var1<var2); //Condition to test
