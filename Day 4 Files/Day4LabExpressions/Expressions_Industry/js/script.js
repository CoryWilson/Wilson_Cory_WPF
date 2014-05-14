/*
Cory Wilson
WPF Section 1
05/12/14
Day 4 Expressions Assignment - Industry
*/

//Industry Example

//How can I tell if a text editor is worth using?
//If it has all three of these then it works.

//Givens:
//Does it edit text?
//Does it autocomplete text?
//Does it color code text to make coding easier to decipher?

//Ask the user the name of the program.
var name = prompt("What is the name of the Text Editor you have selected?");
console.log(name);

//Ask the user if the program edits text property
var textEdit = prompt("Does the Text Editor you have selected successfully edit text? True or False?");
console.log(textEdit);

//Ask the user to input the whether or not the program auto completes text.
var autoComplete = prompt("Does the Text Editor auto complete text? True or False?");
console.log(autoComplete);

//Ask the user if the program color codes text.
var colorCode = prompt("Does the Text Editor color code text? True or False?");
console.log(colorCode);


if((Boolean(textEdit) === true) && (Boolean(autoComplete) === true) && (Boolean(colorCode) === true)){
  console.log(name + " is worth using");
}
else{
  console.log("Don't bother using " + name + " it is pretty terrible.");
}
