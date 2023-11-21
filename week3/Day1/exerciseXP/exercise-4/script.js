let allBooks = [
    {
        title : "Solo Leveling",
        author : "Chugong",
        image : "https://upload.wikimedia.org/wikipedia/en/9/99/Solo_Leveling_Webtoon.png?20190805193256",
        alreadyRead : true
    },
    {
        title : "Classroom of the Elite",
        author : "Shōgo Kinugasa",
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Y%C5%8Dkoso_Jitsuryoku_Shij%C5%8D_Shugi_no_Ky%C5%8Dshitsu_e%2C_Volume_1.jpg/220px-Y%C5%8Dkoso_Jitsuryoku_Shij%C5%8D_Shugi_no_Ky%C5%8Dshitsu_e%2C_Volume_1.jpg",
        alreadyRead : false
    }
];

function renderBooks() {
 let div = document.querySelector(".listBooks")
 let table = document.createElement("table")
 allBooks.forEach((book) => {
    let row = document.createElement("tr");
    let title = document.createElement("td");
    let author = document.createElement("td");

    title.textContent = book.title + " written by " + book.author;
    author.innerHTML = `<img src="${book.image}" width="100px">`;

    if (book.alreadyRead) {
        row.style.backgroundColor = "green";
    } else {
        row.style.backgroundColor = "red";
    }
    row.appendChild(title);
    row.appendChild(author);
    table.appendChild(row);

});

div.appendChild(table);
}

renderBooks();