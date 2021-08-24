const express = require('express');

const app = express();
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
    res.json(req.body);
});

app.get('/users/:username', (req, res) => {
    res.send(req.params.username);
})