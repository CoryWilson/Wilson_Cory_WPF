/******************************
Cory Wilson
WPF Section 1
05/23/14
Functions Assignment - Personal
******************************/

//Come up with Personal Function
//Can you attend a concert this week?
//Budget, Ticket Cost
//If price difference is > $50 then yes

alert("Let's see if you can attend a concert this week!");

var weeklyBudget = Number(prompt("How large is your budget this week?"));
while(isNaN(weeklyBudget) || weeklyBudget===""){
  weeklyBudget = Number(prompt("Please insert a number value for your weekly budget."));
}

var ticketCost = Number(prompt("How large is your budget this week?"));
while(isNaN(ticketCost) || ticketCost===""){
  ticketCost = Number(prompt("Please insert a number value for the cost of the ticket."));
}

function concert(b,t){

  var concertYes = b-t;

  return concertYes;

}

var result = concert(weeklyBudget,ticketCost);
console.log(result);

if(result > 50){
  console.log("Congratulations your budget is $"+weeklyBudget+" and the ticket to the concert costs $"+ticketCost+". That means you can go to the concert this week!");
}
else{
  console.log("Try again next week. :(");
}
