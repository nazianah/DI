// method #1
// function allTruthy(...params) {
//     let result = true;
//     params.forEach(param => {
//         if (!Boolean(param)) {
//             result = false;
//         }
//     });
//     return result;
// }
//     console.log(allTruthy(5, 4, 3, 2, 1, 0));
//     console.log(allTruthy(true, true, true, true));
//     console.log(allTruthy(true, true, true, false));


// method #2
// function allTruthy(...params) {
//   return params.every(param => Boolean(param));
// }
// console.log(allTruthy(true, true, true, true));
// console.log(allTruthy(true, true, true, false));
// console.log(allTruthy(true, true, true, true, true, true, true, true, true));
// console.log(allTruthy(true, true, true, true, true, true, true, true, false));
// console.log(allTruthy(true, false));
// console.log(allTruthy(5, 4, 3, 2, 1, 0))

//method #3
function allTruthy(...args){
    let truthy = true;
    for (let i = 0; i < args.length; i++){
        if (!args[i]){
            truthy = false;
        }
    }
    return truthy;

}
console.log(allTruthy(true, true, true, true));
console.log(allTruthy(true, true, true, false));
console.log(allTruthy(5,4,3,2,1,0))