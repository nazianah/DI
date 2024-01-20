const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.get('/api/hello', (req, res) => {
    res.json('Hello From Express');
});
app.post('/api/world', (req, res) => {
    console.log('I received your POST request. This is what you sent me: ', req.body.post);
    res.json(`I received your POST request. This is what you sent me: ${req.body.post}`);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));