const express = require('express');
const app = express();


const books = [
 {id: 1, title: 'Harry Potter', author: 'J.K. Rowling', publishedYear: 1997},
    {id: 2, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', publishedYear: 1954},
    {id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937},
    {id: 4, title: 'A Game of Thrones', author: 'George R.R. Martin', publishedYear: 1996},
    {id: 5, title: 'A Clash of Kings', author: 'George R.R. Martin', publishedYear: 1998},
 
];


app.use(express.json());


app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Please provide title, author, and publishedYear' });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);

  res.status(201).json(newBook);
});


app.put('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex !== -1) {
    const updatedBook = {
      id: bookId,
      title: req.body.title || books[bookIndex].title,
      author: req.body.author || books[bookIndex].author,
      publishedYear: req.body.publishedYear || books[bookIndex].publishedYear,
    };

    books[bookIndex] = updatedBook;
    res.json(updatedBook);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.delete('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1)[0];
    res.json(deletedBook);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Set up the app to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
