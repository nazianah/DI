console.log(allTruthy(true, true, true) === true);
console.log(allTruthy(true, false, true) === false);
console.log(allTruthy(5, 4, 3, 2, 1, 0) === false);
console.log(allTruthy() === true); // Empty arguments should return true
console.log(allTruthy(false, false, false) === false); // All falsy values should return false
console.log(allTruthy("hello", "world") === true); // All truthy values should return true
console.log(allTruthy(null, undefined) === false); // Null and undefined should return false