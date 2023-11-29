// // Exercise 1 : Find the sum
// // const sum = (a, b) => a + b;


// //Excercise 2 : kg and grams
// function convertToGramsDeclaration(weightinkilograms) {
//     return weightinkilograms * 1000;   
// }
// console.log(convertToGramsDeclaration(2));
// const convertToGramsExpression = function(weightinkilograms) {
//     return weightinkilograms * 1000;   
// }
// // Function declaration is hoisted to the top of the scope, allowing it to be invoked before it's declared.
// // Function expression is assigned to a variable and can only be invoked after it's assigned
// const convertToGramsArrow = weightInKilograms => weightInKilograms * 1000;
// convertToGramsArrow(2);

// //Excercise 3 : Fortune Teller

// (function(numberOfChildren, partnerName, location, jobTitle) {
//     let sentence = "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numberOfChildren + " kids.";
//     document.getElementById("output").textContent = sentence;
//   })(1, "zi", "New York", "Software Engineer");
  

//exercise 4
// (function() {
//     // Get the navbar element
//     let navbar = document.querySelector('.navbar-collapse');

//     let userName = 'Elon Musk';
//     let profilePicturePath = 'https://th.bing.com/th/id/OIP.k5mBS4TCgV1jk-4IvWjySAHaFj?rs=1&pid=ImgDetMain';

//     // Create a new div element
//     let userDiv = document.createElement('div');
//     userDiv.className = 'navbar-text';

//     // Set the inner HTML of the div to include the user's name and profile picture
//     userDiv.innerHTML = '<p class="mr-2">Welcome, ' + userName + '!</p><img src="' + profilePicturePath + '" alt="Profile Picture" class="rounded-circle" style="width: 30px; height: 30px;">';

//     // Append the new div to the navbar
//     navbar.appendChild(userDiv);
// })();



// //   // Exercise 5
// //    // Part I
// //     function makeJuice(size) {
// //         function addIngredients(first, second, third) {
// //             // Display on the DOM
// //             const resultDiv = document.getElementById('result');
// //             resultDiv.innerHTML = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
// //         }

// //         // Invoke addIngredients once
// //         addIngredients('apple', 'orange', 'carrot');
// //     }

// //     // Invoke makeJuice in the global scope
// //     makeJuice('medium');

// //     // Part II
// //     function makeJuiceWithIngredients(size) {
// //         // Create an empty array named ingredients
// //         let ingredients = [];

// //         function addIngredients(first, second, third) {
// //             // Push ingredients into the array
// //             ingredients.push(first, second, third);
// //         }

// //         function displayJuice() {
// //             // Display on the DOM
// //             const resultDiv = document.getElementById('result');
// //             resultDiv.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`;
// //         }

// //         // Invoke addIngredients twice
// //         addIngredients('apple', 'orange', 'carrot');
// //         addIngredients('spinach', 'ginger', 'lemon');

// //         // Invoke displayJuice once
// //         displayJuice();
// //     }

// //     // Invoke makeJuiceWithIngredients in the global scope
// //     makeJuiceWithIngredients('large');