//exercice1

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result); //[ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]

// // ------2------
// const country = "USA";
// console.log([...country]); //[ 'U', 'S', 'A' ]

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);  //[ undefined, undefined ]

//exercise2
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// let welcomeUsers = users.map((user) => { return `Welcome ${user.firstName} !`});
// console.log(welcomeUsers);

// let fullStack = users.filter((user) => { return user.role === 'Full Stack Resident'});
// console.log(fullStack);

// let lastNames = fullStack.map((user) => { return user.lastName});
// console.log(lastNames);

//exercise3
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// let epicPhrase = epic.reduce((accumulator, current) => { return accumulator + ' '+ current});
// console.log(epicPhrase);
//exercise4
// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// let isPassed = students.filter((student) => { return student.isPassed === true});
// console.log(isPassed);

// let congratulations = isPassed.map((student) => { return `Good job ${student.name} you passed the course in ${student.course}`});
// console.log(congratulations); 
