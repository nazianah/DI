// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne() 3 
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? error

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() 0
// funcTwo() 5
// funcThree() 5
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ? error


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() globalscope
// funcFive()inside the funcFive function hello

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()inside the funcSix function test
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ? error

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ? error

// excercise2

// let winbattle = () => true;
// let experiencePoints = winbattle() ? 10 : 1;
// console.log(experiencePoints); 

// excercise3
// let isstring = (str) => {
//     if (typeof str === "string") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isstring('hello')); 

// console.log(isstring([1, 2, 4, 0]));

// excercise4
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let order = () => {
//     colors.forEach((color, index) => {
//         console.log(`${index + 1} choice is ${color}`);
//     });
//     console.log(colors.includes("Violet") ? "yeah" : "nope");

// }
// order();

// excercise5

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// let order = () => {
//     colors.forEach((color, index) => {
//         console.log(`${index + 1}${ordinal[index + 1] || ordinal[0]} choice is ${color}`);
//     });
    

// }
//excercise6

let bankAmount = 1000;
const vat = 0.17;
const expenses = ["+200", "-100", "+146", "+167", "-2900"]
for (let i = 0; i < expenses.length; i++) {
    let expense = parseInt(expenses[i]);
    if (expense > 0) {
        bankAmount += expense;
    } else {
        bankAmount += expense - (expense * vat);
    }
}
console.log("Bank Account Standing at the end of the month: $" + bankAmount.toFixed(2));
