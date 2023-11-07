// Check prompt vs menu
function checkOrderName(orderName) {
  //  Add while loop to restart when alert i triggered in else?
  if (
    orderName == vegetarian ||
    orderName == hawaiian ||
    orderName == pepperoni
  ) {
    return orderName;
  } else {
    alert(
      `Sorry, ${orderName} is not on the menu. Please select a pizza from the menu: "Vegetarian Pizza", "Hawaiian Pizza" or "Pepperoni Pizza"`
    );
  }
}

// Calculate total cost
function totalCost(order) {
  return (orderTotal = order * pizzaPrice);
}

// Calculate cooking time
function cookingTime(orderQuantity) {
  if (orderQuantity >= 6) {
    cookingTime = "The pizzas will take 20 minutes.";
  } else if (orderQuantity <= 5 && orderQuantity >= 3) {
    cookingTime = "The pizzas will take 15 minutes.";
  } else if (orderQuantity <= 2 && orderQuantity >= 1) {
    cookingTime = "The pizzas will take 10 minutes.";
  } else {
    return alert(`You can't order 0 ${orderName}`);
  }
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

checkOrderName(orderName);

let orderQuantity = prompt(`How many of ${orderName} do you want?`);

// 2.4 Finalizing the order

let orderTotal;
totalCost(orderQuantity);

cookingTime(orderQuantity);

alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. ${cookingTime}`
);
