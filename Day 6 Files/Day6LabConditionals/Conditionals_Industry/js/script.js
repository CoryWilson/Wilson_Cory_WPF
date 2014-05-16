/***************************************
Cory Wilson
WPF Section 1
05/16/14
Day 6 Conditionals Assignment - Industry
***************************************/

//Industry Example

//Determine which text editor is the best option for you?

//You told us not to worry about validation :P

//Givens:
//Does it support basic text editing?
var textEdit = prompt("Does the text editor allow for basic text editing? True or False?");
//Does it cost money?
var cost = prompt("Does the text editor cost money? True or False?");
//Does it autocomplete text?
//var autoComplete = prompt("Does the text editor allow for autocompletion of text? True or False?");
//Is it customizable?
//var custom = prompt("Does the text editor allow for customization of the program? True or False?");

if(textEdit === "true" && cost === "true"){
  console.log("Good Shit");
}
else if(textEdit === "true" || cost === "true"){
  console.log("This is a decent text editor. It may be missing some necessary features.");
}
else{
  console.log("no bueno");
}

/*
//If the program has both autoComplete and custom it is a success
if(autoComplete  && custom ){
  console.log("This is a great text editor, it has all the necessary features.");
}
//If it has only one of autoComplete or custom it is an ok option
else if(autoComplete || custom ){
  console.log("This is a decent text editor. It may be missing some necessary features.");
}
//If it has neither don't bother using it
else{
  console.log("Don't waste your time. This is a poor text editor.");
}
*/
