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
var textEdit = Boolean(prompt());
//Does it cost money?
var cost = Boolean(prompt());
//Does it autocomplete text?
var autoComplete = Boolean(prompt("Does the text editor allow for autocompletion of text?"));
//Is it customizable?
var custom = Boolean(prompt("Does the text editor allow for customization of the program?"));

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
