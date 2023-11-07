// Check prompt vs pizza menu
function checkOrderName(order) {
  if (
    order.trim().toLowerCase() == vegetarian.toLowerCase() ||
    order.trim().toLowerCase() == hawaiian.toLowerCase() ||
    order.trim().toLowerCase() == pepperoni.toLowerCase()
  ) {
    return true;
  } else {
    alert(
      `Sorry, ${order} is not on the menu. Please select a pizza from the menu: "Vegetarian Pizza", "Hawaiian Pizza" or "Pepperoni Pizza"`
    );
    return false;
  }
}

// Calculate cooking time
function cookingTime(order) {
  if (order >= 6 && order <= 10) {
    waitTime = "The pizzas will take 20 minutes.";
    return true;
  } else if (order <= 5 && order >= 3) {
    waitTime = "The pizzas will take 15 minutes.";
    return true;
  } else if (order <= 2 && order >= 1) {
    waitTime = "The pizzas will take 10 minutes.";
    return true;
  } else {
    alert(`You can't order ${order} ${orderName}s. Min: 1 Max: 10`);
    return false;
  }
}

// Calculate total cost
function totalCost(order) {
  return (orderTotal = order * pizzaPrice);
}

// The menu and price
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// Greet the customer
alert(
  "Hey! Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza"
);

// Ask the user which pizza they want, and how many
let orderName = prompt("Enter the name of the pizza you want to order today.");

while (!checkOrderName(orderName)) {
  orderName = prompt("Enter the name of the pizza you want to order today.");
}
checkOrderName(orderName);

let orderQuantity = prompt(`How many of ${orderName} do you want?`);

// Finalizing the order
let waitTime;
let orderTotal;

/* NOTE TO SELF:
totalCost(orderQuantity); // Placing the call here created an issue. If the user choose to put an invalid number in the orderQuantity prompt,
it still got saved in the variable... So the totalCost went off the charts even if you in the end only ordered 2 pizzas after being prompted so.
After placing the function call after the cookingTime loop and Call, this cured the problem.  
*/

while (!cookingTime(orderQuantity)) {
  orderQuantity = prompt(`How many of ${orderName} do you want?`);
}

cookingTime(orderQuantity);
totalCost(orderQuantity);

alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. ${waitTime}`
);
