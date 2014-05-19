/***************************************
Cory Wilson
WPF Section 1
05/19/14
Day 7 While Loops Examples
***************************************/

//Basic While Loop

//While loop. Loops through a block of code as long as the condition is true.

//Initialize the counter variable
var counter = 0;

//Setup while loop
while(counter < 200){ //condition - loops until false
  console.log("Something's just never end.");
  //Change the value of the counter variable
  //OR it will run FOREVER!! No Bueno!
  console.log("The counter is " + counter);
  counter++;
}

console.log("Ending counter " + counter);
