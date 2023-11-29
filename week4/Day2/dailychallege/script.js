let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Arrow function to display fruits using forEach
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

// Arrow function to clone groceries
const cloneGroceries = () => {
    // Copy the client variable
    let user = client;

    // Change the client variable
    client = "Betty";

    // Clone the groceries object
    let shopping = { ...groceries };

    // Change the value of the totalPrice key
    shopping.totalPrice = "35$";

    // Change the value of the paid key
    shopping.other.paid = false;

    // Log the modified values
    console.log("Modified client:", client);
    console.log("User:", user); // The user variable will not be affected by the change in the client variable because it's a primitive value (string).

    console.log("Modified shopping totalPrice:", shopping.totalPrice); // The shopping object will not be affected by the change in the groceries object because it's a new object created by spreading the properties of groceries.
    console.log("Modified shopping paid:", shopping.other.paid); // The shopping object will be affected by the change in the groceries object because it references the same nested object.

}

// Invoke displayGroceries
displayGroceries();

// Invoke cloneGroceries
cloneGroceries();