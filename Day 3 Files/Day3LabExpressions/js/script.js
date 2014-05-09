/*
 Cory Wilson
 05/09/14
 WPF 1405
 Day 3 Lab Expressions
 */




/*
Slice of Pie Part 1
*/

//Calculate the the slices each partygoer gets
//How many slices per pizza
var slices = 10;
//How many people are at the party
var people = 7;
//How many pizzas they ordered
var pizzas = 5;

//Slices per person = Multiply the number of slices and pizzas together to get the total number of slices. Then divide that total by the amount of people at the party
var peopleSlices = (slices * pizzas) / people;
//Output Area
console.log("Each person ate " + peopleSlices + " slices of pizza at the party.");


/*
Slice of Pie Part 2
*/

/*
var slices = 10;
var people = 10;
var pizzas = 5;
*/

//Total number of slices
var totalSlices = slices * pizzas;

//Calculate the number of slices Sparky eats
var sparkySlices = totalSlices % people ;

//Output Area
console.log("Sparky got " + sparkySlices + " slices of pizza.");




/*
Average shopping bill
*/

//Calculate average shopping bill for the past five weeks

//Week 1 Bills
var week1 = 50;
//Week 2 Bills
var week2 = 120;
//Week 3 Bills
var week3 = 110;
//Week 4 Bills
var week4 = 70;
//Week 5 Bills
var week5 = 190;

//Total spent on groceries
var total = week1 + week2 + week3 + week4 + week5;

//Average weekly grocery spending
var average = total / 5;

//Output Area
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week.");



/*
Discounts
*/

//Calculate the discounted price for an item. With and without sales tax.

//Original Price
var originalPrice = 500;
//Discount Percentage
var discountPercentage = .05;
//Item Description
var itemDescription = "Xbox One";
//Sales Tax Percentage
var salesTaxPercentage = .07;
//Discount Amount
var discountAmount = originalPrice * discountPercentage;
//Sales Tax Amount
var salesTaxAmount = originalPrice * salesTaxPercentage;

//Price of item with tax
var itemWithTax = originalPrice + salesTaxAmount - discountAmount;

//Price of item without tax
var itemWithoutTax = originalPrice - discountAmount;

//Output Area
console.log("Your " + itemDescription + " was originally $" + originalPrice + ", but after a " + discountPercentage + "% discount, it is now $" + itemWithoutTax + " without tax, and $" + itemWithTax + " with tax.");