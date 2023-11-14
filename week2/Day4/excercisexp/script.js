// Exercise 1
// function infoAboutMe() {
//     let name = "zii";
//     let age = 28;
//     let hobbies = ["reading", "coding"];
//     console.log(`My name is ${name}, I'm ${age} years old and I love ${hobbies}`);

// }
// infoAboutMe();
// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`My name is ${personName}, I'm ${personAge} years old, my favorite color is ${personFavoriteColor}`);
// }
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

//Exercise 2
// function calculateTip() {
//     let input = parseInt(prompt("How much is the bill?"));

//     if (isNaN(input)) {
//         alert("Please enter a number");
//         return;
//     } else if (input < 50) {
//         alert(`The tip is ${input * 0.2}`);
//         return input * 0.2;
//     } else if (input >= 50 && input <= 200) {
//         alert(`The tip is ${input * 0.15}`);
//         return input * 0.15;
//     } else {
//         alert(`The tip is ${input * 0.1}`);
//         return input * 0.1;
//     }
// }

// let tipAmount = calculateTip();
// alert(`Total amount including tip: ${input + tipAmount}`);

//exercise 3
// function isdivisible (diviser){
//     let sum = 0;    
//     for (let i = 0; i <= 500; i++) {
//         if (i % diviser === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }
// let divisiablesum = isdivisible();
// console.log(divisiablesum);

//exercise 4
//  const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// let shoppingList = ["banana", "orange", "apple"];
// function myBill() {
//     let sum = 0;
//     for (let i = 0; i < shoppingList.length; i++) {
//         if (stock[shoppingList[i]] > 0) {
//             sum += prices[shoppingList[i]];
//             stock[shoppingList[i]]--;
//         }
//     }
//     console.log(sum);
// }
// myBill();
// console.log(stock);

//exercise 5

// function changeEnough(itemPrice, amountOfChange) {
//     let quarters is 0.25;
//     let dimes is 0.10;
//     let nickel is 0.05;
//     let  penny is 0.01;
//     let totalchange = amountOfChange[0] * quarters + amountOfChange[1] * dimes + amountOfChange[2] * nickel + amountOfChange[3] * penny;
//     if (totalchange >= itemPrice) {
//         return true;
//     } else {
//         return false;
//     }

// }
// let canafford = changeEnough(4.25, [25, 20, 5, 0])
// console.log(canafford);

//exercise 6

// function hotelcost() {
//     while (true) {
//         let input = parseInt(prompt("How many nights are you staying?"));
//         if (isNaN(input)) {
//             alert("Please enter a number");
//         } else {
//             return input * 140;
//         }
//     }
// }
// function planeRideCost() {
//     while (true) {
//         let input = prompt("Where are you flying to?");
//         if (input === "London") {
//             return 183;
//         } else if (input === "Paris") {
//             return 220;
//         } else {
//             return 300;
//         }
//     }
// }
// function rentalCarCost() {
//     while (true) {
//         let days = parseInt(prompt("How many days are you renting a car?"));
//         if (!isNaN(days)) {
//       let costperday = 40;
//       let totalcost = days * costperday;
//         if (days >= 10) {
//             totalcost * 0.95;
//         }
//         return totalcost;
//     }
//     else {
//         alert("Please enter a number");
//     }
// }

// }
// function totalVacationCost() {
//     let hotel = hotelcost();
//     let plane = planeRideCost();
//     let car = rentalCarCost();
//     let total = hotel + plane + car;
//     alert(`Your hotel cost is ${hotel}, the plane ride cost is ${plane}, and the car rental cost is ${car}`);
//     alert(`Your total vacation cost is ${total}`)
// }
// totalVacationCost();

  

    