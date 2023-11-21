let container = document.getElementById(`container`)
console.log(container)

let users = document.querySelectorAll(`.list li`)
for  (let user of users ) {
    if (user.innerHTML === `Pete`) {
        user.innerHTML = `Richard`
    }
}
 let users2 = document.querySelectorAll(`.list li`);
 for (let user of users2) {
    if (user.innerHTML === `Sarah`) {
        user.remove();
    }
 }
 let myname = document.querySelectorAll(`.list`);
 for (let name of myname) {
    let firstname = name.querySelector(`li`);
    if (firstname) {
        firstname.innerHTML = `Zi`;
    }
 }
let ulName = document.querySelectorAll(`.list`);

for (let ul of ulName) {
    ul.classList.add("student_list");
    if (ul === ulName[0]) {
        ul.classList.add("university", "attendance");
    }
}



