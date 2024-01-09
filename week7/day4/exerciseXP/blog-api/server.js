const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/posts', require('./server/routes/posts'));

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
