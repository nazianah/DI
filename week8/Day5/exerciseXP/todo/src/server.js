const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
app.use(express.json());

let db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

db.run('CREATE TABLE IF NOT EXISTS todos(text TEXT, crossed INTEGER)', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Todos table created.');
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  db.run(`INSERT INTO todos(text, crossed) VALUES(?, ?)`, [text, 0], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, text, crossed: false });
  });
});

app.get('/todos', (req, res) => {
  db.all('SELECT rowid as id, text, crossed FROM todos', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});