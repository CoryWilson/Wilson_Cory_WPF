/*
Cory Wilson
WPF Section 1
05/12/14
Day 4 Expressions Assignment - Wacky
*/

//How many houses can you go through during a night at Halloween Horror Nights?

//Givens:
//Hours Available
//Wait Times for Each Haunted House

//Hours Until Park Closes
var minsLeft = prompt("How many minutes do you have until the park closes?");
console.log(minsLeft);

//Wait time for house #1
var house1 = prompt("How long is the wait for house 1 in minutes?");
console.log(house1);

//Wait time for house #2
var house2 = prompt("How long is the wait for house 2 minutes?");
console.log(house2);

//Wait time for house #3
var house3 = prompt("How long is the wait for house 3 in minutes?")
console.log(house3);

//Wait times for houses in an array
var houseArray = [house1, house2, house3];
console.log(houseArray);

//Wait time for all of the houses
var houseTotal = Number(house1) + Number(house2) + Number(house3);
console.log(houseTotal);

//Amount of Houses you can go through
var houseVisits = Number(minsLeft) / houseTotal;
console.log(houseVisits);

//Console Log out detailed answer
console.log("");
