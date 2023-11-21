let divElement = document.querySelector("div");
 divElement.style.backgroundColor = "lightblue";
 divElement.style.padding = "20px";


 let John = document.querySelector(`ul li:first-child`);
    John.style.display = "none";


    let Pete = document.querySelector(`ul li:last-child`);
    Pete.style.border = "1px solid black";

    document.body.style.fontSize = "50px";


if (divElement.style.backgroundColor === "lightblue") {
    let users = Array.from(document.querySelectorAll("li")).map(li => li.textContent).join(" and ");
    alert("Hello " + users )

}