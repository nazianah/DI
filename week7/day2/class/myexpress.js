const express = require('express')
const app = express()

app.listen(5001, 'localhost', () => {
    console.log('Server is listening at localhost on port 5001')
})

app.get('/', (req, res) => {
    res.send('Hello World from the server');
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>')
})

app.get('/api/products', (req, res) => {
    res.json([
        { name: 'iPhone', price: 800 },
        { name: 'iPad', price: 650 },
        { name: 'iWatch', price: 750 }
    ])
});

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];