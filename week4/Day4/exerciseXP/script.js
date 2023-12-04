//exercise 1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
 // I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

 //exercise2
//  function displayStudentInfo(objUser){
//     const {first, last} = objUser;
//     console.log(`Your full name is ${first} ${last}`);
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

//exercise3
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const usersArray = Object.entries(users)
// console.log(usersArray)

// usersArray.map(user => {
// user[1] *= 2
// })
// console.log(usersArray)

//exercise4
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);
//   //object

//exercise5
class Dog {
    constructor(name) {
      this.name = name;
    }
  };
    // 1
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
  //error must use super() in constructor

    // 2
// class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
// this one is correct
  
  
    // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
  //error name is not defined
  
    // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };
//error must use super() in constructor

//exercisse6
// [2] === [2] // false
// {} === {} // false

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number) //4 because object2 is a reference to object1
// console.log(object3.number) // 4 because object3 is a reference to object2
// console.log(object4.number) // 5 because object4 is a new object

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
    }
    sound(){
        console.log(`Mooooo I'm a ${this.type}, my name is ${this.name} and I'm ${this.color}`)
    }
}

let farmerCow = new Mamal('Lily', 'cow', 'brown and white');
farmerCow.sound();