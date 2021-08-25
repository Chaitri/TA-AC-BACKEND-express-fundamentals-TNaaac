const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use((req, res, next) => {
    let count = req.cookies.count;
    if(count) {
        res.cookie('count', Number(count) + 1);
    } else {
        res.cookie('count', 1);
    }
    next();
});

app.get('/', (req, res) => {
    res.send(`<h2>Welcome to express</h2>`);
});

app.get('/about', (req, res) => {
    res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
    res.json(req.body);
});

app.post('/json', (req, res) => {
    res.send(JSON.stringify(req.body));
});

app.get('/users/:username', (req, res) => {
    let username = req.params.username;
    res.send(`<h1>${username}</h1>`);
});

app.get('/admin', (req, res) => {
    res.send('You are not authorized to view this page!');
});

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
    res.status(500).send(err);
});