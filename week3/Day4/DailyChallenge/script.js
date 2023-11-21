let form = document.getElementById("form");
let taskInput = document.getElementById("tasks");
let task = document.getElementById("task");

form.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();

    if (taskInput.value === "") {
        return; // Exit the function if taskInput is empty
    }

    let tasks = document.createElement("li");
    tasks.innerHTML = `<input type="checkbox"> <p>${taskInput.value}</p> <button type="button">Delete</button>`;

    tasks.querySelector(`input[type="checkbox"]`)
        .addEventListener("click", toggleDone);

    tasks.querySelector("button").addEventListener("click", deleteTask);

    task.appendChild(tasks);
    taskInput.value = "";
}

function toggleDone(e) {
    let tasks = e.target.parentNode;
    tasks.querySelector("p").classList.toggle("done");
}

function deleteTask(e) {
    let tasks = e.target.parentNode;
    tasks.remove(); // Use remove() to remove the tasks element
}
