// Check prompt vs pizza menu function
// function checkOrderName(order) {
//     if (
//       order.trim().toLowerCase() == vegetarian.toLowerCase() ||
//       order.trim().toLowerCase() == hawaiian.toLowerCase() ||
//       order.trim().toLowerCase() == pepperoni.toLowerCase()
//     ) {
//       return true;
//     } else {
//       alert(
//         `Sorry, ${order} is not on the menu. Please select a pizza from the menu: "Vegetarian Pizza", "Hawaiian Pizza" or "Pepperoni Pizza"`
//       );
//       return false;
//     }
//   }

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

const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// Ask the user which pizza they want, and how many
let orderName = document.getElementById("pizza-select"); // gissar getELementByID som på något sätt hämtar från id="pizza-select". Eller måste man hämta informationen från databasen när formuläret är skickat?

let orderQuantity = document.getElementById("quantity"); // gissar getELementByID som på något sätt hämtar från id="quantity" Eller måste man hämta informationen från databasen när formuläret är skickat?

// Finalizing the order
let waitTime;
let orderTotal;

// Trigga cookingTime och totalCost när man tryckt på submit. Är det här man använder Eventlisteners och sånt kanske?
cookingTime(orderQuantity);
totalCost(orderQuantity);

alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. ${waitTime}`
);

/*
Kod jag inte tror behövs i form-versionen av pizza-bot:

  
Loopen och function call (checkOrderName) borde vara onödig eftersom kunden bara kan välja giltiga alternativ:
  while (!checkOrderName(orderName)) {
    orderName = prompt("Enter the name of the pizza you want to order today.");
  }
  checkOrderName(orderName);
 
//   Loppen borde vara onödig. Antal begränsas direkt i html koden så inga fel kan begås.
//   while (!cookingTime(orderQuantity)) {
//     orderQuantity = prompt(`How many of ${orderName} do you want?`);
//   }
  
  */
