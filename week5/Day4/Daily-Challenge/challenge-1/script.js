const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
 setTimeout(resolve, 3000, 'foo');
});

// Use Promise.all to wait for all promises to resolve.
// If all promises are resolved successfully, Promise.all returns a new promise that resolves with an array of their resolved values.
// In this case, the output would be Array [3, 42, "foo"].
Promise.all([promise1, promise2, promise3]).then((values) => {
 console.log(values);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
   }).catch((error) => {
    console.error('One of the promises was rejected:', error);
   });