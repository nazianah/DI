const http = require('http')

// const server = http.createServer((req, res) => {
//     // Send response
//     res.end('Hello World from the server')
// })

// server.listen(5000, 'localhost', () => {
//     console.log('Server is listening at localhost on port 5000')
// })


// const server = http.createServer(function(req, res) {
//     res.end('Hello World from the server')
// });

// server.listen(5001, 'localhost', function() {
//     console.log('Server is listening at localhost on port 5000')
// })

const server = http.createServer(function(req, res) {
    
    if (req.url === '/') {
        res.end('Hello World from the server')
    } else if (req.url === '/about') {
        res.end('<h1>About Page</h1>')
    } else if (req.url === '/contact') {
        res.end('<h1>Contact Page</h1>')
    } else {
        res.writeHead(404, {'Content-type': 'text/html'})
        res.end('<h1>404 Page not found</h1>')
    }
});

server.listen(5001, 'localhost', function() {
    console.log('Server is listening at localhost on port 5001')
})