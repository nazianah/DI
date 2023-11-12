// // // exercise#1
// const people = ["Greg", "Mary", "Devon", "James"];
// people.splice(people.indexOf("Greg"), 1); 
// people.splice(people.indexOf("James"), 1, "Jason");
// people.push("Zi");
// console.log(people);
// console.log(people.indexOf("Mary"));
// let peopleSlice = people.slice(1, 3);
// console.log(peopleSlice);
// console.log(people.indexOf("Foo")); // -1 because it doesn't exist
// console.log(people)
// let peopleLength = people.length;
// console.log(peopleLength);
// let last = people[people.length - 1];
// console.log(last);
// //part 2
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }
// for (let i = 0; i < people.length; i++) {
//     if (people[i] === "Devon") {
//         break;
//     }
//     console.log(people[i]);
// }

// exercise#2
// let colors = ["Blue", "Black", "White", "Pink", "Violet"];
// let suffix = ["st", "nd", "rd", "th" , "th"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(`My ${i + 1}${suffix[i]} choice is ${colors[i]}`);
// }

//exercise#3
while (true) {
    let userInput = prompt("Please enter a number");
    let num = parseInt(userInput);
    
    //check if is not number
      if (isNaN(num)) {
        alert("not a number");
        break;
      }
    
      //check if is even
    //repeats unless number 10 is entered
      if (!isNaN(num) && num === 10) {
        alert("Great!");
        break; 
      }
    }

// exercise#4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors);
// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.thirdFloor);
// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0]);

// let sarahRent = building.numberOfRoomsAndRent.sarah[1];
// let davidRent = building.numberOfRoomsAndRent.david[1];
// let danRent = building.numberOfRoomsAndRent.dan[1];


// if (sarahRent + davidRent > danRent) {
//     console.log("Dan's rent is too low");
//     building.numberOfRoomsAndRent.dan[1] = 1200;
// }
// console.log(building.numberOfRoomsAndRent.dan[1]);

//exercise#5
// let family = {
//     mom : "zed",
//     dad : "ree",
//     daughter : "Zi",
// };
// for (let key in family) {
//     console.log(key);
//   }
//     for (let key in family) {
//         console.log(family[key]);
//     }

//exercise#6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }
//     let sentence = "";
//     for (let key in details) {
//         sentence += `${key} ${details[key]} `;
//     }
//     console.log(sentence);

//exercise#7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let firstName = names.map(name => name[0]);
// let sortedNames = firstName.sort();
// let societyName = sortedNames.join("");
// console.log(societyName);
