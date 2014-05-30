/*************
Cory Wilson
WPF Section 1
05/30/14
WPF Final Exam
*************/

//Prompt user for the cost of an item
var itemCost = Number(prompt("How much does the item cost?"));

//Validate the prompt is in fact a number and not left blank
while(isNaN(itemCost) || itemCost===""){
    itemCost = Number(prompt("Please insert a NUMBER for the item cost!"));
}

//Prompt user for a discount %. This number should be between 0->100
var discPerc = Number(prompt("What is the discount % on the item?\n Number should be between 0->100."));

//Validate the prompt is in fact a number between those values and not left blank
while((discPerc < 0 || discPerc > 100) || discPerc===""){
    discPerc = Number(prompt("Make sure the number you entered is between 0->100!"));
}

//Create a function that will calculate the discounted cost of a product
//Cost and Discount as parameters
function discCalculator(cost,discount){
  //Discount Price = Original Cost * (Discount%/100)
  var discPrice = cost * (discount/100);
  //Final Price of item = Original Cost - Discounted Price
  var finalPrice = itemCost - discPrice;
  //Return Final Price
  return finalPrice;
}

//Create a function call, arguments from user prompts
var result = discCalculator(itemCost,discPerc);

//Console.log a text string that includes the returned price, original price, and discount%
console.log("The discounted price of the item is $"+result+", the original price of the item is $"+itemCost+", and the discount percentage is "+discPerc+"%.");
